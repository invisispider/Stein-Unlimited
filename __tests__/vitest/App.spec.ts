import { describe, it, expect, vi, beforeEach } from "vitest";
import { createTestingPinia } from '@pinia/testing';
import { mount, VueWrapper } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createWebHistory, type Router } from 'vue-router';
import Home from "@/views/Home.vue";
import type { ComponentPublicInstance } from "vue";

console.log("Firebase API Key:", import.meta.env.VITE_FB_APIKEY);

type AppInstance = ComponentPublicInstance<{
    isVertical: string;
    isLoading: boolean;
  }>

 
  // Explicitly type the wrapper
let wrapper: VueWrapper<unknown>;
let router: Router;

describe("App", () => {
  beforeEach(async () => {

    const Dummy = { template: '<div />' }; // basic stub component

    const routes = [
        { path: '/', component: Home },
        { path: '/Integral', component: Dummy },
        { path: '/UnThinkMe', component: Dummy },
        { path: '/Time', component: Dummy },
        { path: '/Music', component: Dummy },
        { path: '/Beacon', component: Dummy },
        { path: '/Videos', component: Dummy },
        { path: '/Technomancy', component: Dummy },
        { path: '/UnthinkMe', component: Dummy }, // case sensitivity?
        { path: '/TermsOfService', component: Dummy },
        { path: '/PrivacyPolicy', component: Dummy },
    ];
      
     
    router = createRouter({
      history: createWebHistory(),
      routes,
    });

    const pinia = createTestingPinia({
      stubActions: false,
      createSpy: vi.fn,
    });

    wrapper = mount(App, {
      global: {
        plugins: [pinia, router],
      },
    });

    await router.isReady();
  });

  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#appWrapper').exists()).toBe(true);
    expect(wrapper.find('#appWrapper').text()).toContain("nightlight");
  });

  it("renders sidebar", () => {
    const sidebar = wrapper.findComponent({ name: 'Sidebar' });
    expect(sidebar.exists()).toBe(true);
  });

  it("renders style selector", () => {
    const styleSelector = wrapper.findComponent({ name: 'StyleSelector' });
    expect(styleSelector.exists()).toBe(true);
  });

  it("renders router view", () => {
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });



  it("has 'horizontal' isVertical computed", () => {
    // Safely access vm properties with `any` or type cast
    const vm = wrapper.vm as AppInstance;
    expect(vm.isVertical).toBe('horizontal');
  });
});
