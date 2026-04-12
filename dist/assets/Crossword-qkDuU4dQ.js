import { d as defineComponent, r as ref, u as useStore, o as onMounted, h as createElementBlock, j as createBaseVNode, q as createTextVNode, t as toDisplayString, l as unref, Q as Fragment, S as renderList, ag as withKeys, m as createVNode, p as withCtx, w as withDirectives, E as vShow, a0 as TransitionGroup, ab as nextTick, y as openBlock } from "./index-BBZgqMci.js";
const useCrossword = {
  across: [
    {
      pos: [1, 1],
      question: "Integrated body and mind.",
      answer: "CENTAUR"
    },
    {
      pos: [2, 1],
      question: "Teal tactic: Yes, _.",
      answer: "AND"
    },
    {
      pos: [2, 7],
      question: "Soul, Self, or total psyche.",
      answer: "ATMAN"
    },
    {
      pos: [3, 1],
      question: "Mean Red/Orange interpersonal aim.",
      answer: "USE"
    },
    {
      pos: [3, 5],
      question: "Infrared narrative: _ _ eat it?",
      answer: "CANI"
    },
    {
      pos: [4, 1],
      question: "Collective compass direction.(abbr)",
      answer: "SO"
    },
    {
      pos: [4, 7],
      question: "Deep sleep brainwaves.",
      answer: "DELTA"
    },
    {
      pos: [5, 3],
      question: "Romantic idealist destination.",
      answer: "EDEN"
    },
    {
      pos: [6, 9],
      question: "Lower Right pronoun.",
      answer: "ITS"
    },
    {
      pos: [7, 4],
      question: "Type system originator, for one.",
      answer: "MYERS"
    },
    {
      pos: [7, 10],
      question: "_ from Eden.",
      answer: "UP"
    },
    {
      pos: [8, 1],
      question: "Teal time management system.(abbr)",
      answer: "ILP"
    },
    {
      pos: [8, 10],
      question: "Spiritual teacher Adi.",
      answer: "DA"
    },
    {
      pos: [9, 7],
      question: "Carol Gilligan Levels Type.",
      answer: "WOMEN"
    },
    {
      pos: [10, 1],
      question: "The Up relating to Quadrants.",
      answer: "SHOW"
    },
    {
      pos: [11, 4],
      question: "Incidental group of holons.",
      answer: "HEAP"
    },
    {
      pos: [11, 9],
      question: "Earlier Level prefix.",
      answer: "PRE"
    }
  ],
  down: [
    {
      pos: [1, 1],
      question: "Formless empty witness State.",
      answer: "CAUSAL"
    },
    {
      pos: [1, 2],
      question: "Zen flow character.",
      answer: "ENSO"
    },
    {
      pos: [1, 3],
      question: "Bardo visitation.",
      answer: "NDE"
    },
    {
      pos: [1, 5],
      question: "Fundamental pattern essense.",
      answer: "ARCHETYPE"
    },
    {
      pos: [1, 7],
      question: "Best-selling Orange paragon.",
      answer: "RAND"
    },
    {
      pos: [1, 9],
      question: "Basic mantra.",
      answer: "OM"
    },
    {
      pos: [2, 8],
      question: "A quantum level of consciousness.",
      answer: "TIER"
    },
    {
      pos: [2, 10],
      question: "Stage theory standardized unit.",
      answer: "ALTITUDE"
    },
    {
      pos: [6, 7],
      question: "Display emergent Levels.",
      answer: "GROWUP"
    },
    {
      pos: [6, 11],
      question: "Greatest depth for greatest _?",
      answer: "SPAN"
    },
    {
      pos: [7, 2],
      question: "Relaxed waking brainwaves.",
      answer: "ALPHA"
    },
    {
      pos: [9, 9],
      question: "Philosophical relational model.",
      answer: "MAP"
    },
    {
      pos: [10, 4],
      question: "Typical question starter.",
      answer: "WH"
    }
  ]
};
const _hoisted_1 = { id: "puzzle-body" };
const _hoisted_2 = { class: "user-message" };
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = { class: "crossword-body" };
const _hoisted_5 = { id: "puzzle-container" };
const _hoisted_6 = { id: "puzzle" };
const _hoisted_7 = ["row"];
const _hoisted_8 = ["col"];
const _hoisted_9 = ["name", "onKeyup"];
const _hoisted_10 = { id: "puzzle-clues" };
const _hoisted_11 = { id: "acrossDiv" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { id: "downDiv" };
const _hoisted_14 = ["onClick"];
const rowNum = 11;
const colNum = 11;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Crossword",
  setup(__props) {
    document.title = "Integral Crossword ~ Stein unLimited";
    const across = ref(useCrossword.across);
    const down = ref(useCrossword.down);
    const store = useStore();
    const collapseAcross = ref(true);
    const collapseDown = ref(true);
    const cheating = ref(false);
    const userMessage = ref("Welcome! Enjoy a nice game.");
    const toggle = (direc) => {
      if (direc == "across") {
        collapseAcross.value = !collapseAcross.value;
      } else {
        collapseDown.value = !collapseDown.value;
      }
    };
    const enumerateCells = (pRef) => 11 * (pRef[0] - 1) + pRef[1];
    const getElement = (pRef) => {
      var refCell = document.querySelector(
        `tr[row='${pRef[0]}']>td[col='${pRef[1]}']`
      );
      return refCell;
    };
    const drawWord = ([row, col], chars, direc) => {
      var _a;
      for (let i = 0; i < chars.length; i++) {
        const p = direc === "across" ? [row, col + i] : [row + i, col];
        const input = (_a = getElement(p)) == null ? void 0 : _a.querySelector("input");
        if (input) input.value = chars[i];
      }
    };
    const renderChars = () => {
      across.value.forEach((datum) => drawWord(datum.pos, datum.answer, "across"));
      down.value.forEach((datum) => drawWord(datum.pos, datum.answer, "down"));
    };
    const buildMatrix = () => {
      const m = Array.from({ length: rowNum }, () => Array(colNum).fill(""));
      [...across.value, ...down.value].forEach(({ pos: [r, c], answer }, idx) => {
        for (let i = 0; i < answer.length; i++) {
          if (idx < across.value.length) m[r - 1][c - 1 + i] = answer[i];
          else m[r - 1 + i][c - 1] = answer[i];
        }
      });
      return m;
    };
    const setupMatrix = () => {
      const matrix = buildMatrix();
      const startMap = new Set([...across.value, ...down.value].map((d) => `${d.pos[0]}x${d.pos[1]}`));
      matrix.forEach((row, i) => {
        row.forEach((cell, j) => {
          const pair = [i + 1, j + 1];
          const el = getElement(pair);
          if (!cell && el) el.innerHTML = "";
          else if (startMap.has(`${pair[0]}x${pair[1]}`) && el) {
            const label = document.createElement("div");
            label.className = "head-label";
            label.innerText = enumerateCells(pair).toString();
            el.prepend(label);
          }
        });
      });
    };
    onMounted(() => {
      setupMatrix();
      setTimeout(() => {
        userMessage.value = " ";
      }, 8e3);
    });
    const selectMe = async (pRef) => {
      if (typeof pRef === "object") {
        let el = getElement(pRef);
        let child = el == null ? void 0 : el.lastChild;
        await nextTick(() => child == null ? void 0 : child.focus());
      }
    };
    const resetInputs = (warn) => {
      if (warn) {
        if (confirm("Really want to CLEAR all your progresst?")) {
          let inputs = document.getElementsByClassName("clearme");
          Array.from(inputs).forEach((input) => input.value = "");
        }
      } else {
        let inputs = document.getElementsByClassName("clearme");
        Array.from(inputs).forEach((input) => input.value = "");
      }
    };
    const clueMe = () => {
      if (confirm(
        "This will erase your porgoresst! Are you REALLY sure? If you are, you can keep mashing it btw."
      )) {
        cheating.value = true;
        setTimeout(() => {
          resetInputs(false);
          cheating.value = false;
        }, 3e3);
        renderChars();
      }
    };
    const infoMe = () => {
      var instructions = "";
      instructions += "How to play:\n";
      instructions += "- Couch Icons jump to squares.\n- Click or use arrow keys to move.\n";
      instructions += "- Clue Button flashes solution then resets the board.\n- Reset Button clears the board.\n";
      instructions += "- Solve Button checks your answers.\n";
      instructions += "- New games may become available as you progrest.";
      setTimeout(() => {
        userMessage.value = " ";
      }, 2e4);
      userMessage.value = instructions;
    };
    const moveMe = (keyPress, row, col) => {
      let el = getElement([row, col]);
      let child = el == null ? void 0 : el.lastChild;
      if (child instanceof HTMLInputElement && typeof child.focus === "function") {
        child.focus();
      } else if (keyPress === "left") {
        if (col > 1) moveMe("left", row, col - 1);
      } else if (keyPress === "right") {
        if (col < 11) moveMe("right", row, col + 1);
      } else if (keyPress === "down") {
        if (row < 11) moveMe("down", row + 1, col);
      } else if (keyPress === "up") {
        if (row > 1) moveMe("up", row - 1, col);
      }
    };
    const validateEntry = (entry, dir) => {
      const [row, col] = entry.pos;
      return [...entry.answer].every((ch, i) => {
        const r = dir === "across" ? row : row + i;
        const c = dir === "across" ? col + i : col;
        const input = document.querySelector(`#puzzle input[name='${r}x${c}']`);
        return (input == null ? void 0 : input.value.toUpperCase()) === ch;
      });
    };
    const checkAnswer = () => {
      if (cheating.value) return false;
      const allCorrect = [
        ...across.value.map((a) => validateEntry(a, "across")),
        ...down.value.map((b) => validateEntry(b, "down"))
      ].every(Boolean);
      userMessage.value = allCorrect ? "My goodness, you completed all porgrus! One point." : "Hmm. Not quite.";
      if (allCorrect) store.points++;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          _cache[8] || (_cache[8] = createBaseVNode("h1", { class: "main-title" }, "Integral Crossword", -1)),
          createBaseVNode("p", null, [
            _cache[3] || (_cache[3] = createTextVNode("Points: ")),
            createBaseVNode("b", null, toDisplayString(unref(store).points), 1)
          ]),
          createBaseVNode("p", _hoisted_2, toDisplayString(userMessage.value), 1),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", {
              id: "solve",
              onClick: infoMe
            }, _cache[4] || (_cache[4] = [
              createBaseVNode("i", { class: "material-icons" }, "quiz", -1),
              createTextVNode(" info ")
            ])),
            createBaseVNode("span", {
              id: "other",
              onClick: clueMe
            }, _cache[5] || (_cache[5] = [
              createBaseVNode("i", { class: "material-icons" }, "visibility", -1),
              createTextVNode(" clue ")
            ])),
            createBaseVNode("span", {
              id: "check",
              onClick: checkAnswer
            }, _cache[6] || (_cache[6] = [
              createBaseVNode("i", { class: "material-icons" }, "mood", -1),
              createTextVNode(" solve ")
            ])),
            createBaseVNode("span", {
              id: "clear",
              onClick: _cache[0] || (_cache[0] = ($event) => resetInputs(true))
            }, _cache[7] || (_cache[7] = [
              createBaseVNode("i", { class: "material-icons" }, "delete_outline", -1),
              createTextVNode(" reset ")
            ]))
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("table", _hoisted_6, [
              createBaseVNode("tbody", null, [
                (openBlock(), createElementBlock(Fragment, null, renderList(rowNum, (row, row_ind) => {
                  return createBaseVNode("tr", {
                    key: row_ind,
                    row
                  }, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(colNum, (col, col_ind) => {
                      return createBaseVNode("td", {
                        key: col_ind,
                        col
                      }, [
                        createBaseVNode("input", {
                          class: "clearme",
                          maxlength: "1",
                          type: "text",
                          tabindex: "-1",
                          name: `${row}x${col}`,
                          onKeyup: [
                            withKeys(($event) => moveMe("left", row, col - 1), ["left"]),
                            withKeys(($event) => moveMe("right", row, col + 1), ["right"]),
                            withKeys(($event) => moveMe("down", row + 1, col), ["down"]),
                            withKeys(($event) => moveMe("up", row - 1, col), ["up"])
                          ]
                        }, null, 40, _hoisted_9)
                      ], 8, _hoisted_8);
                    }), 64))
                  ], 8, _hoisted_7);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", {
                class: "clue-button",
                onClick: _cache[1] || (_cache[1] = ($event) => toggle("across"))
              }, "Across"),
              createVNode(TransitionGroup, {
                id: "across",
                name: "grow",
                tag: "div",
                appear: "",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(across.value, (ac) => {
                    return withDirectives((openBlock(), createElementBlock("div", {
                      key: ac.answer,
                      class: "couch li-div",
                      tabindex: "1"
                    }, [
                      createBaseVNode("span", {
                        class: "material-icons",
                        onClick: ($event) => selectMe(ac.pos)
                      }, "chair", 8, _hoisted_12),
                      createTextVNode(" " + toDisplayString(enumerateCells(ac.pos)) + ". " + toDisplayString(ac.question), 1)
                    ])), [
                      [vShow, !collapseAcross.value]
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", {
                class: "clue-button",
                onClick: _cache[2] || (_cache[2] = ($event) => toggle("down"))
              }, "Down"),
              createVNode(TransitionGroup, {
                id: "down",
                name: "grow",
                tag: "div",
                appear: "",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(down.value, (dow) => {
                    return withDirectives((openBlock(), createElementBlock("div", {
                      key: dow.answer,
                      class: "couch li-div",
                      tabindex: "1"
                    }, [
                      createBaseVNode("span", {
                        class: "material-icons",
                        onClick: ($event) => selectMe(dow.pos)
                      }, "chair", 8, _hoisted_14),
                      createTextVNode(" " + toDisplayString(enumerateCells(dow.pos)) + ": " + toDisplayString(dow.question), 1)
                    ])), [
                      [vShow, !collapseDown.value]
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
