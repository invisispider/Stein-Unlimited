import { d as defineComponent, r as ref, C as computed, h as createElementBlock, j as createBaseVNode, w as withDirectives, D as normalizeClass, k as createCommentVNode, E as vShow, F as createStaticVNode, v as vModelText, H as vModelSelect, n as withModifiers, t as toDisplayString, y as openBlock, I as router, J as _imports_0, _ as _export_sfc } from "./index-BBZgqMci.js";
const _imports_1 = "/assets/sticker-AltitudesLevels-web-CDIOXQwr.jpg";
const _hoisted_1 = { id: "contact" };
const _hoisted_2 = { class: "mode-toggle" };
const _hoisted_3 = ["value"];
const _hoisted_4 = { class: "contact-description" };
const _hoisted_5 = { class: "contact-description" };
const _hoisted_6 = { class: "contact-description" };
const _hoisted_7 = ["value"];
const _hoisted_8 = ["required"];
const _hoisted_9 = {
  key: 0,
  class: "dropdown-selector"
};
const _hoisted_10 = { key: 1 };
const _hoisted_11 = {
  key: 2,
  class: "order-section"
};
const _hoisted_12 = {
  class: "flex",
  style: { "justify-content": "center" }
};
const _hoisted_13 = { type: "submit" };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { key: 1 };
const FORM_ENDPOINT = "https://formspree.io/f/mgopneap";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  setup(__props) {
    document.title = "Contact ~ Stein unLimited";
    const mode = ref("business");
    const isValidEmail = (email2) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2);
    };
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const subject = ref("Collaboration");
    const address = ref("");
    const note = ref("");
    const quantity = ref(1);
    const errorMessage = ref("");
    const isSubmitting = ref(false);
    const computedSubject = computed(() => {
      if (mode.value === "business") return `[BIZ] ${subject.value} – ${name.value}`;
      if (mode.value === "order") return `[ORDER] Signed Copy – ${name.value}`;
      return `[MSG] General – ${name.value}`;
    });
    const redirectUrl = computed(() => {
      return `https://steinunlimited.com/Thanks?type=${mode.value}`;
    });
    const handleSubmit = async () => {
      var _a, _b;
      if (!name.value.trim()) {
        errorMessage.value = "Name is required";
        return;
      }
      if (!isValidEmail(email.value)) {
        errorMessage.value = "Enter a valid email";
        return;
      }
      if (!message.value.trim()) {
        errorMessage.value = "Message cannot be empty";
      }
      isSubmitting.value = true;
      errorMessage.value = "";
      if (mode.value === "order" && !address.value) {
        errorMessage.value = "Please provide an address for shipping calculation.";
        return;
      }
      if (mode.value === "order" && (!quantity.value || !Number.isFinite(quantity.value))) {
        errorMessage.value = "Please enter a valid Quantity for order requests.";
        return;
      }
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
            subject: computedSubject.value,
            address: address.value,
            note: note.value,
            quantity: quantity.value
          })
        });
        if (res.ok) {
          router.push(`/Thanks?type=${mode.value}`);
        } else {
          const data = await res.json();
          errorMessage.value = ((_b = (_a = data.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) || "Submission failed";
          console.error(data.errors);
        }
      } catch (e) {
        errorMessage.value = "Network error";
        console.error(e);
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[15] || (_cache[15] = createBaseVNode("h1", null, "Contact", -1)),
        _cache[16] || (_cache[16] = createBaseVNode("p", { style: { "margin-top": "1em" } }, "Adam Loewen ~ unThinkMe ~ Stein unLmiited", -1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("button", {
            class: normalizeClass({ active: mode.value === "business" }),
            onClick: _cache[0] || (_cache[0] = ($event) => mode.value = "business")
          }, "Business", 2),
          createBaseVNode("button", {
            class: normalizeClass({ active: mode.value === "general" }),
            onClick: _cache[1] || (_cache[1] = ($event) => mode.value = "general")
          }, "Message", 2),
          createBaseVNode("button", {
            class: normalizeClass({ active: mode.value === "order" }),
            onClick: _cache[2] || (_cache[2] = ($event) => mode.value = "order")
          }, "Purchase", 2)
        ]),
        createBaseVNode("form", {
          class: "contact-form",
          onSubmit: withModifiers(handleSubmit, ["prevent"])
        }, [
          createBaseVNode("input", {
            type: "hidden",
            name: "_redirect",
            value: redirectUrl.value
          }, null, 8, _hoisted_3),
          withDirectives(createBaseVNode("div", _hoisted_4, "Professional inquiries and networking. Get in touch for holistic solutions. ", 512), [
            [vShow, mode.value === "business"]
          ]),
          withDirectives(createBaseVNode("div", _hoisted_5, "We love feedback on the work, general questions, and often just weird stuff. Reach out and see if anything happens. ", 512), [
            [vShow, mode.value === "general"]
          ]),
          withDirectives(createBaseVNode("div", _hoisted_6, _cache[11] || (_cache[11] = [
            createStaticVNode('<h3 style="text-align:center;" data-v-62cea987>The unThinkMe Corner Store</h3><p data-v-62cea987>This is a fun, casual way you can purchase Stein unLimited products and services, giving $0 to Jeff Bezos and other corporate giants. </p><p style="text-align:center;" data-v-62cea987><b data-v-62cea987>~Signature Pack~ unThinkMe&#39;s Guide to Integral Theory</b></p><div class="flex" style="justify-content:center;" data-v-62cea987><img src="' + _imports_0 + '" class="product-card" style="border-radius:2%;margin-right:5px;" data-v-62cea987><img src="' + _imports_1 + '" class="product-card" data-v-62cea987></div><p class="order-note" style="text-align:center;" data-v-62cea987> Includes signed copy + optional message + bonus Levels sticker. </p><b data-v-62cea987>$20 (+shipping)</b><p data-v-62cea987>Pick up your copy of the unThinkMe book directly from Adam through Venmo and US Postal, with the AWESOME Levels of Consciousness sticker, and a personal message, OR spice things up with a Truth or Dare request. </p><p style="text-align:center;" data-v-62cea987><b data-v-62cea987>~Exclusive - Levels of Consciousness sticker~</b></p><p data-v-62cea987> unThinkMe Altitudes Levels graphic can be purchased seperately while supplies last. Classic 3&quot;x2&quot; decal for laptops, water bottles, and perhaps less common places. </p><b data-v-62cea987>$5 (+shipping)</b><p style="text-align:center;" data-v-62cea987><b data-v-62cea987>~Holistic Music Lessons (remote)~</b></p><p data-v-62cea987> Adam teaches holistic general music - voice, guitar, bass, piano, rhythm, performance, audio, production, and also communicative, psychological, somatic, spiritual, and existential aspects of the practice. </p><b data-v-62cea987>$30 / 30min negotiable.</b><p data-v-62cea987>No commitment! Reach out if curious, very informal. For purchases, we&#39;ll calculate shipping based on the address, we&#39;ll send payment request, and upon payment, item should ship within 1 or 2 business days, and then take forever to get there. </p>', 14)
          ]), 512), [
            [vShow, mode.value === "order"]
          ]),
          createBaseVNode("input", {
            type: "hidden",
            name: "_subject",
            value: computedSubject.value
          }, null, 8, _hoisted_7),
          _cache[14] || (_cache[14] = createBaseVNode("input", {
            type: "text",
            name: "_gotcha",
            style: { "display": "none" }
          }, null, -1)),
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => name.value = $event),
            type: "text",
            name: "name",
            placeholder: "Name",
            required: mode.value !== "general"
          }, null, 8, _hoisted_8), [
            [vModelText, name.value]
          ]),
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => email.value = $event),
            type: "email",
            name: "email",
            placeholder: "Email",
            required: ""
          }, null, 512), [
            [vModelText, email.value]
          ]),
          mode.value === "business" ? (openBlock(), createElementBlock("div", _hoisted_9, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => subject.value = $event),
              name: "topic"
            }, _cache[12] || (_cache[12] = [
              createBaseVNode("option", null, "Freelance / Contract Work", -1),
              createBaseVNode("option", null, "Collaboration", -1),
              createBaseVNode("option", null, "Speaking / Podcast", -1),
              createBaseVNode("option", null, "Other", -1)
            ]), 512), [
              [vModelSelect, subject.value]
            ]),
            withDirectives(createBaseVNode("textarea", {
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => message.value = $event),
              name: "message",
              placeholder: "Message",
              required: ""
            }, null, 512), [
              [vModelText, message.value]
            ])
          ])) : createCommentVNode("", true),
          mode.value === "general" ? (openBlock(), createElementBlock("div", _hoisted_10, [
            withDirectives(createBaseVNode("textarea", {
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => message.value = $event),
              name: "message",
              placeholder: "Say whatever you like"
            }, null, 512), [
              [vModelText, message.value]
            ])
          ])) : createCommentVNode("", true),
          mode.value === "order" ? (openBlock(), createElementBlock("div", _hoisted_11, [
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => address.value = $event),
              type: "text",
              name: "address",
              placeholder: "Shipping Address",
              required: ""
            }, null, 512), [
              [vModelText, address.value]
            ]),
            createBaseVNode("div", _hoisted_12, [
              _cache[13] || (_cache[13] = createBaseVNode("label", { for: "quantity" }, "Quantity", -1)),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => quantity.value = $event),
                type: "number",
                name: "quantity",
                min: "1",
                style: { "max-width": "15ch" }
              }, null, 512), [
                [
                  vModelText,
                  quantity.value,
                  void 0,
                  { number: true }
                ]
              ])
            ]),
            withDirectives(createBaseVNode("textarea", {
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => note.value = $event),
              name: "note",
              placeholder: "Optional message for signing"
            }, null, 512), [
              [vModelText, note.value]
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("button", _hoisted_13, [
            mode.value === "order" ? (openBlock(), createElementBlock("span", _hoisted_14, "Get Payment Instructions")) : (openBlock(), createElementBlock("span", _hoisted_15, "Send Message"))
          ])
        ], 32),
        withDirectives(createBaseVNode("p", { class: "pedantic" }, toDisplayString(errorMessage.value), 513), [
          [vShow, errorMessage.value]
        ])
      ]);
    };
  }
});
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62cea987"]]);
export {
  Contact as default
};
