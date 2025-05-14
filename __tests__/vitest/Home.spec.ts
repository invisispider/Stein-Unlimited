import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/composables/socials', () => ({
  useSocials: () => ({
    socials: [
      { name: 'Facebook', url: 'https://facebook.com', link: '@/assets/facebook.png' },
      { name: 'Twitter', url: 'https://twitter.com', link: '@/assets/twitter.png' },
    ],
  }),
}));

describe('Home.vue', () => {
  it('renders the logo image', () => {
    const wrapper = mount(Home);
    const logoImage = wrapper.find('img.stu-banner');
    expect(logoImage.exists()).toBe(true);
    expect(logoImage.attributes('src')).toBe('/src/assets/img/steinunlimited.png');
    expect(logoImage.attributes('alt')).toBe('stein unlimited logo');
  });

  it('renders the landing page components', () => {
    const wrapper = mount(Home);
    
    // Check that specific components are rendered
    expect(wrapper.findComponent({ name: 'Namaste' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'SteinunLimited' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'UnThinkMe' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'IntegralTheory' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Beacon' }).exists()).toBe(true);
  });

  it('sets the correct document title', () => {
    mount(Home);
    expect(document.title).toBe('Stein unLimited');
  });

  it('renders social media links', () => {
    const wrapper = mount(Home);
    const socialLinks = wrapper.findAll('.social-grp > a');
    expect(socialLinks.length).toBe(2); // Expecting two social links (Facebook & Twitter)

    // Verify that the social media URLs and images are correct
    expect(socialLinks[0].attributes('href')).toBe('https://facebook.com');
    expect(socialLinks[1].attributes('href')).toBe('https://twitter.com');
    
    const facebookImage = socialLinks[0].find('img');
    const twitterImage = socialLinks[1].find('img');
    
    expect(facebookImage.attributes('src')).toBe('@/assets/facebook.png');
    expect(twitterImage.attributes('src')).toBe('@/assets/twitter.png');
  });

  it('renders navigation links', () => {
    const wrapper = mount(Home);
    const termsLink = wrapper.find('[to="TermsOfService"]');
    const privacyLink = wrapper.find('[to="PrivacyPolicy"]');
    
    expect(termsLink.exists()).toBe(true);
    expect(privacyLink.exists()).toBe(true);
  });
});
