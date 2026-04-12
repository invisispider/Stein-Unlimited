import { _ as _export_sfc, x as resolveComponent, h as createElementBlock, y as openBlock, q as createTextVNode, m as createVNode, p as withCtx, j as createBaseVNode } from "./index-BBZgqMci.js";
const _sfc_main = {
  name: "FourOhFour"
};
document.title = "404 | Uh Oh Oh No";
const _hoisted_1 = { class: "fourohfour login-page" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = createTextVNode(" The pants is in another castle.😜 ")),
    createVNode(_component_RouterLink, { to: "/" }, {
      default: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode("button", null, "Home", -1)
      ])),
      _: 1
    })
  ]);
}
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  _404 as default
};
