import { describe, it, expect, vi, type Mock } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import StyleSelector from '@/components/StyleSelector.vue';
import { useStore } from '@/stores';

vi.mock('@/stores', () => {
  return {
    useStore: vi.fn(),
  };
});

describe('StyleSelector', () => {
  it('calls updateStyleMode with correct style when a button is clicked', async () => {
    const updateStyleMode = vi.fn();
    (useStore as unknown as Mock).mockReturnValue({ updateStyleMode });

    const wrapper = mount(StyleSelector, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const flowersButton = wrapper.get('[data-testid="dark-purple"]');
    await flowersButton.trigger('click');

    expect(updateStyleMode).toHaveBeenCalledWith('flowers');
  });
});
