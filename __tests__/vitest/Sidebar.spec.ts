import { mount, type VueWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import { createRouter, createWebHistory, type Router } from 'vue-router';
import { nextTick } from 'vue';
import * as sidebarState from '@/components/Sidebar/state';

vi.spyOn(sidebarState, 'toggleSidebar');

let wrapper: VueWrapper<unknown>; 
let router: Router;
let pinia;
const Dummy = { template: '<div />' };

const routes = [
  { path: '/', component: Dummy },
  { path: '/Integral', component: Dummy },
  { path: '/UnThinkMe', component: Dummy },
  { path: '/Time', component: Dummy },
  { path: '/Music', component: Dummy },
  { path: '/Beacon', component: Dummy },
  { path: '/Videos', component: Dummy },
  { path: '/Technomancy', component: Dummy },
  { path: '/TermsOfService', component: Dummy },
  { path: '/PrivacyPolicy', component: Dummy },
  { path: '/Talk', component: Dummy },
  { path: '/Login', component: Dummy },
  { path: '/Crossword', component: Dummy },
  { path: '/Logout', component: Dummy },
  { path: '/Next', component: Dummy },
];

describe('Sidebar.vue', () => {
  beforeEach(async () => {
    sidebarState.collapsed.value = true;
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    pinia = createTestingPinia({
      stubActions: false,
      createSpy: vi.fn,
    });

    await router.push('/');
    await router.isReady();
    
    wrapper = mount(Sidebar, {
      global: {
        plugins: [pinia, router],
      },
    });
  });
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders sidebar and toggles collapse', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('.collapse-icon').exists()).toBe(true);
  });

  it('toggles the sidebar collapse state when collapse icon is clicked', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('.collapse-icon').classes()).not.toContain('collapse-icon-closed');
    expect(sidebarState.collapsed.value).toBe(true);

    await wrapper.find('.collapse-icon').trigger('click');
    await nextTick();
    expect(sidebarState.toggleSidebar).toHaveBeenCalled();
    expect(sidebarState.collapsed.value).toBe(false);

    expect(wrapper.find('.collapse-icon').classes()).not.toContain('collapse-icon-closed');

  });
  it('is hidden when collapsed', () => {
    sidebarState.collapsed.value = true;
    const wrapper = mount(Sidebar, {
      global: { plugins: [router] },
      stubs: { transition: false },
    });

    expect(wrapper.find('[data-testid="sidebar"]').isVisible()).toBe(false);
  });

  it('is visible when expanded', async () => {
    sidebarState.collapsed.value = false;
    const wrapper = mount(Sidebar, {
      global: { plugins: [router] },
      stubs: { transition: false },
    });

    await nextTick();
    expect(wrapper.find('[data-testid="sidebar"]').isVisible()).toBe(true);
  })

  it('shows and hides navigation links based on collapsed state', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
        stubs: {
          transition: false
        }
      },
    });

    // Sidebar collapsed
    expect(wrapper.find('[data-testid="sidebar"]').isVisible()).toBe(false);

    // Trigger expand
    await wrapper.find('.collapse-icon').trigger('click');
    sidebarState.collapsed.value = false;
    await nextTick();

    // Sidebar visible
    let navItems = wrapper.findAll('.navItem') 
    expect(navItems.length).toBeGreaterThan(0);
    
    sidebarState.collapsed.value = true
    await wrapper.find('.collapse-icon').trigger('click');
    await nextTick();
    await nextTick();

    navItems = wrapper.findAll('.navItem')
    
  });

  it('renders admin link when store.admin is true', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
      },
    });
    vi.mock('@/stores/index', () => ({
      useStore: () => ({
        admin: true,
        uid: 'some-uid',
        isIn: true,
      }),
      oneInTwoHundred: false,
    }));

    await wrapper.find('.collapse-icon').trigger('click');
    nextTick();
    router.push('/Login')
    nextTick();
    expect(wrapper.find('[href="/Admin"]').exists()).toBe(false);
    
    expect(wrapper.find('a[href="/Talk"]').exists()).toBe(true);
  
    expect(wrapper.find('a[href="/Next"]').exists()).toBe(false);

  });

  it('does not render admin link when store.admin is false', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
      },
    });

    vi.mock('@/stores/index', () => ({
      useStore: () => ({
        admin: false,
        uid: 'some-uid',
        isIn: true,
      }),
    }));
    await wrapper.find('.collapse-icon').trigger('click');

    nextTick();
    expect(wrapper.find('[href="/Talk"]').exists()).toBe(true);
    expect(wrapper.find('[href="/Next"]').exists()).toBe(false);
    expect(wrapper.find('[href="/Login"]').exists()).toBe(false);
    expect(wrapper.find('[href="/Logout"]').exists()).toBe(true);
  
    expect(wrapper.find('[href="/Admin"]').exists()).toBe(false);
  });

  it('shows Logout link when store.uid is true', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
      },
    });

    vi.mock('@/stores/index', () => ({
      useStore: () => ({
        admin: false,
        uid: 'some-uid',
        isIn: true,
      }),
    }));
    await wrapper.find('.collapse-icon').trigger('click');

    expect(wrapper.find('.collapse-icon').exists()).toBe(true);
    expect(wrapper.find('.collapse-icon-closed').exists()).toBe(false);
    expect(wrapper.find('[href="/Talk"]').exists()).toBe(true);
    expect(wrapper.find('[href="/Logout"]').exists()).toBe(true);
  
    expect(wrapper.find('[href="/Login"]').exists()).toBe(false);

    await wrapper.find('.collapse-icon').trigger('click');
    expect(wrapper.find('a[href="/Next"]').exists()).toBe(false);
    expect(await wrapper.find('.collapse-icon-closed').exists()).toBe(true);
  });

  it('renders sidebar and button link based on random number', async () => {
    const wrapper = mount(Sidebar, {
      global: {
        plugins: [router],
        mocks: {
          useStore: () => ({
            uid: null,
            isIn: false,
          }),
          oneInTwoHundred: true,
        },
      },
    });

    await wrapper.find('.collapse-icon').trigger('click');

    expect(wrapper.find('.sidebar-wrapper').exists()).toBe(true);


    expect(wrapper.find('a[href="/Talk"]').exists()).toBe(true);
    expect(wrapper.find('a[href="/Logout"]').exists()).toBe(true);
  
    expect(wrapper.find('a[href="/Next"]').exists()).toBe(true);

  });
});
