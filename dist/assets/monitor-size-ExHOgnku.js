import { Z as reactive, o as onMounted, P as onUnmounted, aa as toRefs } from "./index-BBZgqMci.js";
function useMonitorSize() {
  const sizes = reactive({
    browserWidth: window.innerWidth,
    browserHeight: window.innerHeight,
    deviceWidth: screen.width,
    isMobile: false,
    isVertical: false
  });
  const browserResized = () => {
    sizes.browserWidth = window.innerWidth;
    sizes.deviceWidth = screen.width;
    sizes.isMobile = isMobile();
    sizes.isVertical = isVertical();
  };
  const isVertical = () => {
    return window.innerWidth < window.innerHeight ? true : false;
  };
  const isMobile = () => {
    return window.innerWidth <= 600 ? true : false;
  };
  onMounted(() => {
    window.addEventListener("resize", browserResized);
    sizes.isVertical = isVertical();
    sizes.isMobile = isMobile();
  });
  onUnmounted(() => {
    window.removeEventListener("resize", browserResized);
  });
  return {
    ...toRefs(sizes)
  };
}
export {
  useMonitorSize as u
};
