import { _ as _export_sfc, K as useRoute, C as computed, h as createElementBlock, y as openBlock, j as createBaseVNode, k as createCommentVNode, w as withDirectives, m as createVNode, q as createTextVNode, E as vShow, p as withCtx, l as unref, R as RouterLink } from "./index-BBZgqMci.js";
const _hoisted_1 = { class: "thanks" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 2 };
const _sfc_main = {
  __name: "Thanks",
  setup(__props) {
    const route = useRoute();
    const type = computed(() => route.query.type || "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[4] || (_cache[4] = createBaseVNode("h1", null, "Thank You", -1)),
        type.value === "order" ? (openBlock(), createElementBlock("div", _hoisted_2, _cache[0] || (_cache[0] = [
          createBaseVNode("h1", null, "✅ Order received", -1),
          createBaseVNode("p", null, [
            createBaseVNode("strong", null, "Send payment via Venmo to @unThinkMe-Adam"),
            createBaseVNode("br"),
            createTextVNode(" Include your name in the payment. ")
          ], -1),
          createBaseVNode("p", null, "Your order will ship within a few days.", -1),
          createBaseVNode("p", { class: "subtle" }, " Thanks for supporting this project directly—it genuinely makes a difference. ", -1)
        ]))) : type.value === "business" ? (openBlock(), createElementBlock("div", _hoisted_3, _cache[1] || (_cache[1] = [
          createBaseVNode("h1", null, "Message Received", -1),
          createBaseVNode("p", null, "We appreciate you reaching out.", -1),
          createBaseVNode("p", null, "I’ll review your message and respond as soon as I can.", -1)
        ]))) : type.value === "general" ? (openBlock(), createElementBlock("div", _hoisted_4, _cache[2] || (_cache[2] = [
          createBaseVNode("p", null, "Thanks for the message — I appreciate you taking the time to reach out.", -1)
        ]))) : createCommentVNode("", true),
        withDirectives(createBaseVNode("p", null, " It's possible that no message went through, sorry. 🔧 ", 512), [
          [vShow, !type.value]
        ]),
        createVNode(unref(RouterLink), { to: "/" }, {
          default: withCtx(() => _cache[3] || (_cache[3] = [
            createTextVNode("Home")
          ])),
          _: 1
        })
      ]);
    };
  }
};
const Thanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94923577"]]);
export {
  Thanks as default
};
