import { d as defineComponent, Z as reactive, h as createElementBlock, m as createVNode, j as createBaseVNode, p as withCtx, k as createCommentVNode, l as unref, ae as Transition, q as createTextVNode, y as openBlock } from "./index-BBZgqMci.js";
const _imports_0 = "/assets/Abandon-toxgmU7m.jpg";
const _hoisted_1 = { id: "nextBody" };
const _hoisted_2 = {
  key: 0,
  id: "abaDong",
  align: "left"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Next",
  setup(__props) {
    document.title = "Wow You Found It!";
    var state = reactive({
      one: true,
      two: true,
      three: true,
      four: true
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(Transition, { name: "shrinkDiv" }, {
          default: withCtx(() => [
            unref(state).one ? (openBlock(), createElementBlock("img", {
              key: 0,
              id: "abaDon",
              src: _imports_0,
              class: "transparent",
              onMouseleave: _cache[0] || (_cache[0] = ($event) => unref(state).one = false)
            }, null, 32)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        _cache[8] || (_cache[8] = createBaseVNode("h1", { style: { "text-align": "center" } }, " /NEXT Error: This Feature Does Not Exist Yet! ", -1)),
        createBaseVNode("div", null, [
          _cache[5] || (_cache[5] = createBaseVNode("h2", { style: { "color": "#ffffff" } }, "/NEXT Error10441: ThisFeaturedoesnotexits", -1)),
          createVNode(Transition, { name: "growText" }, {
            default: withCtx(() => [
              unref(state).two ? (openBlock(), createElementBlock("h4", {
                key: 0,
                id: "abaDont",
                onMouseover: _cache[1] || (_cache[1] = ($event) => unref(state).two = false)
              }, _cache[4] || (_cache[4] = [
                createTextVNode(" Oh... you know, I didn't think you'd get here so soon. "),
                createBaseVNode("br", null, null, -1),
                createTextVNode(" I, uh... I don't really have anything ready for you yet."),
                createBaseVNode("br", null, null, -1),
                createTextVNode(" It's like, the opposite of that."),
                createBaseVNode("br", null, null, -1),
                createTextVNode(" You know the old tale about the ant and the grasshopper, right?"),
                createBaseVNode("br", null, null, -1),
                createTextVNode(" I left an old copy lying around, in case you get bored."),
                createBaseVNode("br", null, null, -1),
                createTextVNode(" It's inside the shop. I think I've gotht eh key around here somewhere. Uh..."),
                createBaseVNode("br", null, null, -1),
                createTextVNode(" Check back with us soon, though! I'm really sorry. ")
              ]), 32)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        createVNode(Transition, { name: "shrinkText" }, {
          default: withCtx(() => [
            unref(state).three ? (openBlock(), createElementBlock("p", {
              key: 0,
              id: "abaDona",
              align: "left",
              onMouseover: _cache[2] || (_cache[2] = ($event) => unref(state).three = false)
            }, _cache[6] || (_cache[6] = [
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1)
            ]), 32)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "appearDiv" }, {
          default: withCtx(() => [
            !unref(state).four ? (openBlock(), createElementBlock("p", _hoisted_2, _cache[7] || (_cache[7] = [
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1),
              createBaseVNode("br", null, null, -1)
            ]))) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          id: "footer",
          class: "text-center",
          onClick: _cache[3] || (_cache[3] = ($event) => unref(state).four = false)
        }, " comments--> ")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
