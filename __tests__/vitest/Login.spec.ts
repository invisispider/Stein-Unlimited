import { describe, it, expect, vi, beforeEach, type Mock, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Login from '@/components/Login.vue';
import { useStore } from '@/stores';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getAuthInstance } from '@/services/firebaseconfig';

interface MockStore {
  setUser: Mock;
  email: string | null;
  styleMode: string;
}

vi.mock('@/stores', () => ({
  useStore: vi.fn(),
}));

vi.mock('firebase/auth', async () => {
  const actual = await vi.importActual<typeof import('firebase/auth')>('firebase/auth')
  return {
    ...actual,
    getAuthInstance: vi.fn(() => ({}),),
    signInWithEmailAndPassword: vi.fn(() => Promise.resolve({
        user: { uis: '123', email: 'test@example.com' }
    })),
    sendSignInLinkToEmail: vi.fn(),
    isSignInWithEmailLink: vi.fn(() => false),
    signInWithEmailLink: vi.fn(() => Promise.resolve({
        user: { uid: 'email-link-user', email: 'email@example.com' }
    })),
    signInWithPopup: vi.fn(() => Promise.resolve({
        user: { uid: 'google-user', email: 'google@example.com' }
    })),
    GoogleAuthProvider: vi.fn(() => ({})),
  };
});

vi.mock('firebase/firestore', async () => {
    const actual = await vi.importActual<typeof import('firebase/firestore')>('firebase/firestore')
    return {
      ...actual,
      getFirestore: vi.fn(() => ({})),  // Mocking getFirestore to return an empty object (or a mock DB)
      doc: vi.fn(() => ({ id: '123' })),  // Return a mock document reference
      getDoc: vi.fn(() => Promise.resolve({
        exists: () => true,
        data: () => ({ email: 'test@example.com', displayName: 'Test User' })
      })),
      setDoc: vi.fn(() => Promise.resolve()),
      updateDoc: vi.fn(() => Promise.resolve()),
    }
  })
  
test('should initialize Firebase Auth correctly', () => {
  const auth = getAuthInstance()
  expect(auth).toBeTruthy()
})

describe('Login.vue', () => {
  let mockStore: MockStore;
  
  beforeEach(() => {
    mockStore = {
      setUser: vi.fn(),
      email: null,
      styleMode: 'default',
    };
    (useStore as unknown as Mock).mockReturnValue(mockStore);
  });

  it('logs in using email and password', async () => {
    const fakeUser = { uid: 'abc123', email: 'test@example.com' };
    (signInWithEmailAndPassword as Mock).mockResolvedValue({ user: fakeUser });

    const wrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    await wrapper.find('input[type="email"]').setValue('test@example.com');
    await wrapper.find('input[type="password"]').setValue('testpassword');
    await wrapper.find('button[type="submit"]').trigger('submit');

    // Wait for async signIn
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.anything(),
      'test@example.com',
      'testpassword'
    );
    expect(mockStore.setUser).toHaveBeenCalledWith(fakeUser);
  });

  it('starts Google login and sets user', async () => {
    const fakeUser = { uid: 'guser123', email: 'google@example.com' };
    (signInWithPopup as Mock).mockResolvedValue({ user: fakeUser });

    const wrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const googleBtn = wrapper.findAll('button').find(btn => btn.text().includes('Google'));
    expect(googleBtn).toBeDefined();

    await googleBtn?.trigger('click');
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(signInWithPopup).toHaveBeenCalled();
    expect(mockStore.setUser).toHaveBeenCalledWith(fakeUser);
  });
});
