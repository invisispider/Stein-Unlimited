import { a as getFirestoreInstance, r as ref, L as collection, M as query, N as orderBy, O as onSnapshot, P as onUnmounted, h as createElementBlock, y as openBlock, j as createBaseVNode, Q as Fragment, S as renderList, k as createCommentVNode, n as withModifiers, t as toDisplayString, w as withDirectives, v as vModelText, b as doc, T as deleteDoc, U as addDoc, V as serverTimestamp, _ as _export_sfc, d as defineComponent, o as onMounted, W as getAllUsers, X as createBlock, u as useStore, Y as useRouter, Z as reactive, l as unref, E as vShow, $ as resolveDynamicComponent } from "./index-BBZgqMci.js";
const _hoisted_1$4 = { class: "todo-list" };
const _hoisted_2$2 = {
  key: 0,
  class: "todo-item"
};
const _hoisted_3$1 = ["onClick"];
const _hoisted_4 = { class: "todo-desc" };
const _hoisted_5 = { class: "todo-time" };
const _sfc_main$4 = {
  __name: "TodoComponent",
  setup(__props) {
    const firestoreDb = getFirestoreInstance();
    const newTodo = ref("");
    const Todos = ref([]);
    const colRef = collection(firestoreDb, "todo_collection");
    const listName = ref("");
    const q = query(colRef, orderBy("createdAt"));
    const unsubSnap = onSnapshot(
      q,
      (snapshot) => {
        let todos = [];
        snapshot.docs.forEach((doc2) => {
          todos.push({ ...doc2.data(), id: doc2.id });
        });
        Todos.value = todos;
      },
      (err) => console.log(err.message)
    );
    const showList = (list) => listName.value = list;
    const addTodo = () => {
      addDoc(colRef, {
        description: newTodo.value,
        list: listName.value,
        createdAt: serverTimestamp()
      });
      newTodo.value = "";
    };
    const removeTodo = (id) => {
      const docRef = doc(firestoreDb, "todo_collection", id);
      deleteDoc(docRef);
    };
    onUnmounted(() => {
      if (unsubSnap) {
        unsubSnap();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "todo-title" }, [
          createBaseVNode("h2", null, "unDoMe")
        ], -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Todos.value, (ado) => {
          return openBlock(), createElementBlock(Fragment, { key: ado }, [
            ado.list == listName.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
              createBaseVNode("a", {
                class: "material-icons",
                onClick: withModifiers(($event) => removeTodo(ado.id), ["prevent"])
              }, "delete", 8, _hoisted_3$1),
              createBaseVNode("span", _hoisted_4, toDisplayString(ado.description), 1),
              createBaseVNode("span", _hoisted_5, toDisplayString(ado && ado.createdAt && ado.createdAt.toDate && ado.createdAt.toDate().toLocaleString("en-us", {
                dateStyle: "short",
                timeStyle: "short",
                hour12: false
              })), 1)
            ])) : createCommentVNode("", true)
          ], 64);
        }), 128)),
        createBaseVNode("button", {
          class: "userButton btn-list-selector",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => showList(""), ["prevent"]))
        }, " Project "),
        createBaseVNode("button", {
          class: "userButton btn-list-selector",
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => showList("show_ideas"), ["prevent"]))
        }, " Show Ideas "),
        createBaseVNode("button", {
          class: "userButton btn-list-selector",
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => showList("songs"), ["prevent"]))
        }, " Songs "),
        createBaseVNode("button", {
          class: "userButton btn-list-selector",
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => showList("memo"), ["prevent"]))
        }, " Memo "),
        createBaseVNode("form", {
          onSubmit: withModifiers(addTodo, ["prevent"])
        }, [
          createBaseVNode("h2", null, toDisplayString(`add new: ${listName.value}`), 1),
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newTodo.value = $event)
          }, null, 512), [
            [vModelText, newTodo.value]
          ]),
          _cache[5] || (_cache[5] = createBaseVNode("i", { class: "material-icons" }, "cruelty_free", -1))
        ], 32)
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "untable" };
const _hoisted_2$1 = { class: "unchunk" };
const _hoisted_3 = { class: "unchunk" };
const _sfc_main$3 = {
  __name: "ScheduleComponent",
  setup(__props) {
    let arr = [];
    for (var i = 1; i < 46; i++) {
      arr.push(i);
    }
    const mockData = ref(arr);
    const daynames = ref(["Sunday", "Tuesday", "Thursday", "Friday", "Saturday"]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _cache[0] || (_cache[0] = createBaseVNode("h2", { class: "unheader" }, "Flowers", -1)),
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(daynames.value, (day) => {
            return openBlock(), createElementBlock("div", {
              key: day,
              class: "baheader"
            }, toDisplayString(day), 1);
          }), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(mockData.value, (d) => {
            return openBlock(), createElementBlock("div", {
              key: d,
              class: "uncell"
            }, toDisplayString(d), 1);
          }), 128))
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "unheader" }, "Vivid", -1)),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(daynames.value, (day) => {
            return openBlock(), createElementBlock("div", {
              key: day,
              class: "baheader"
            }, toDisplayString(day), 1);
          }), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(mockData.value, (d) => {
            return openBlock(), createElementBlock("div", {
              key: d,
              class: "uncell"
            }, toDisplayString(d), 1);
          }), 128))
        ])
      ]);
    };
  }
};
const ScheduleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9af60f79"]]);
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserPane",
  props: {
    displayName: {},
    email: {},
    photoURL: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("img", {
          src: _ctx.photoURL,
          alt: "avatar"
        }, null, 8, _hoisted_1$2),
        createBaseVNode("h3", null, toDisplayString(_ctx.displayName), 1),
        createBaseVNode("p", null, toDisplayString(_ctx.email), 1)
      ]);
    };
  }
});
const UserCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e9247707"]]);
const _hoisted_1$1 = { class: "admin-user-list" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminUserList",
  setup(__props) {
    const users = ref([]);
    onMounted(async () => {
      users.value = await getAllUsers();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", null, "User Directory", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(users.value, (user) => {
          return openBlock(), createBlock(UserCard, {
            key: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL || "/favicon.ico"
          }, null, 8, ["displayName", "email", "photoURL"]);
        }), 128))
      ]);
    };
  }
});
const AdminUserList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0cddbc8e"]]);
const _hoisted_1 = { class: "admin-container" };
const _hoisted_2 = { class: "collapseNav" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Admin",
  setup(__props) {
    document.title = "Upstairs ~ Stein unLimited";
    const store = useStore();
    const router = useRouter();
    const collapseState = ref(false);
    onMounted(() => {
      if (store.uid !== "9zPT6STYcKg5g3lAnNbTPQzdXBz2") {
        router.isReady().then(() => {
          router.push("/");
        });
      }
    });
    const adminState = reactive({
      userPane: true,
      toDoComponent: true,
      scheduleComponent: false,
      mJBlog: false
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        unref(store).admin ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", null, [
            adminState.userPane ? (openBlock(), createBlock(resolveDynamicComponent(AdminUserList), { key: 0 })) : createCommentVNode("", true),
            adminState.toDoComponent ? (openBlock(), createBlock(resolveDynamicComponent(_sfc_main$4), { key: 1 })) : createCommentVNode("", true),
            adminState.scheduleComponent ? (openBlock(), createBlock(resolveDynamicComponent(ScheduleComponent), { key: 2 })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_2, [
            withDirectives(createBaseVNode("nav", null, [
              createBaseVNode("button", {
                class: "userButton",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => adminState.userPane = !adminState.userPane, ["prevent"]))
              }, "Users"),
              createBaseVNode("button", {
                class: "userButton",
                onClick: _cache[1] || (_cache[1] = withModifiers(($event) => adminState.toDoComponent = !adminState.toDoComponent, ["prevent"]))
              }, " Memo "),
              createBaseVNode("button", {
                class: "userButton",
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => adminState.scheduleComponent = !adminState.scheduleComponent, ["prevent"]))
              }, " Habit ")
            ], 512), [
              [vShow, !collapseState.value]
            ]),
            createBaseVNode("i", {
              class: "material-icons christmas-icon green",
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => collapseState.value = !collapseState.value, ["prevent"]))
            }, "terminal")
          ])
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
