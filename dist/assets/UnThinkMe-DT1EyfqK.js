import { d as defineComponent, h as createElementBlock, j as createBaseVNode, t as toDisplayString, y as openBlock, r as ref, C as computed, o as onMounted, P as onUnmounted, Q as Fragment, w as withDirectives, k as createCommentVNode, m as createVNode, a0 as TransitionGroup, p as withCtx, S as renderList, E as vShow, a1 as LoadingComponent, n as withModifiers, a as getFirestoreInstance, a2 as watch, q as createTextVNode, a3 as _imports_0, a4 as BookHero, X as createBlock, M as query, L as collection, N as orderBy, a5 as startAfter, a6 as limit, a7 as getDocs, _ as _export_sfc } from "./index-BBZgqMci.js";
const _hoisted_1$2 = { class: "utm-blog-article" };
const _hoisted_2$2 = { class: "title-place" };
const _hoisted_3$2 = ["href"];
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "desc-place" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UtmBlogArticle",
  props: [
    "id",
    "date",
    "content",
    "tnurl",
    "ytlink",
    "title"
  ],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
        createBaseVNode("h3", _hoisted_2$2, toDisplayString(props.title), 1),
        createBaseVNode("a", {
          href: props.ytlink,
          target: "_blank"
        }, [
          createBaseVNode("img", {
            class: "video-place",
            src: props.tnurl
          }, null, 8, _hoisted_4$1)
        ], 8, _hoisted_3$2),
        createBaseVNode("div", _hoisted_5$1, toDisplayString(props.content), 1)
      ]);
    };
  }
});
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = ["src", "alt"];
const _hoisted_3$1 = { class: "video-title" };
const _hoisted_4 = { class: "modal-content" };
const _hoisted_5 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UnthinkmeGallery",
  props: {
    videos: { default: () => [] },
    hasMore: { type: Boolean, default: true },
    isRendering: { type: Boolean, default: false }
  },
  emits: ["loadMore"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const selectedVideoId = ref(null);
    const sortedVideos = computed(() => {
      var _a;
      return ((_a = props.videos) == null ? void 0 : _a.slice().sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )) || [];
    });
    function openVideo(videoId) {
      selectedVideoId.value = videoId;
    }
    function closeVideo() {
      selectedVideoId.value = null;
    }
    const infiniteScrollTrigger = ref(null);
    let observer;
    onMounted(() => {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !props.isRendering && props.hasMore) {
          emit("loadMore");
        }
      }, {
        root: null,
        rootMargin: "100px",
        threshold: 0.1
      });
      if (infiniteScrollTrigger.value) {
        observer.observe(infiniteScrollTrigger.value);
      }
    });
    onUnmounted(() => {
      if (observer && infiniteScrollTrigger.value) {
        observer.unobserve(infiniteScrollTrigger.value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createVNode(TransitionGroup, {
            name: "video",
            tag: "div",
            class: "video-grid"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(sortedVideos.value, (video) => {
                var _a, _b;
                return openBlock(), createElementBlock("div", {
                  key: video.resourceId.videoId,
                  class: "video-item",
                  onClick: ($event) => openVideo(video.resourceId.videoId)
                }, [
                  ((_b = (_a = video.thumbnails) == null ? void 0 : _a.high) == null ? void 0 : _b.url) ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    loading: "lazy",
                    src: video.thumbnails.high.url,
                    alt: video.title || "YouTube thumbnail",
                    class: "video-thumb"
                  }, null, 8, _hoisted_2$1)) : createCommentVNode("", true),
                  createBaseVNode("h3", _hoisted_3$1, toDisplayString(video.title), 1)
                ], 8, _hoisted_1$1);
              }), 128))
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", {
          ref_key: "infiniteScrollTrigger",
          ref: infiniteScrollTrigger,
          class: "scroll-trigger"
        }, null, 512),
        withDirectives(createVNode(LoadingComponent, null, null, 512), [
          [vShow, props.isRendering]
        ]),
        selectedVideoId.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "modal",
          onClick: withModifiers(closeVideo, ["self"])
        }, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("iframe", {
              src: `https://www.youtube.com/embed/${selectedVideoId.value}`,
              width: "100%",
              height: "480",
              frameborder: "0",
              allowfullscreen: ""
            }, null, 8, _hoisted_5),
            createBaseVNode("button", {
              class: "modal-close-button",
              onClick: closeVideo
            }, " Close ")
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "unthinkme" };
const _hoisted_2 = { class: "utm-description" };
const _hoisted_3 = { class: "video-grid" };
const pageSize = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UnThinkMe",
  setup(__props) {
    document.title = "unThinkMe on YouTube ~ Stein unLimited";
    const firestoreDb = getFirestoreInstance();
    const classicVideos = ref(false);
    const toggleClassic = () => classicVideos.value = !classicVideos.value;
    const blogData = ref([]);
    const getBlog = async () => {
      const q = query(collection(firestoreDb, "utmblog"), orderBy("id", "desc"));
      const snapshot = await getDocs(q);
      blogData.value = snapshot.docs.map((doc) => doc.data());
    };
    watch(classicVideos, async () => {
      isLoadingVideos.value = true;
      if (classicVideos.value === true) {
        await getBlog();
      }
      isLoadingVideos.value = false;
    });
    const lastVisible = ref(null);
    const youtubeVideos = ref([]);
    const isLoadingVideos = ref(false);
    const hasMoreVideos = ref(true);
    async function loadVideos(initial = false) {
      if (isLoadingVideos.value || !initial && !hasMoreVideos.value) return;
      isLoadingVideos.value = true;
      try {
        const baseQuery = query(
          collection(firestoreDb, "youtubechannel"),
          orderBy("publishedAt", "desc"),
          ...lastVisible.value && !initial ? [startAfter(lastVisible.value)] : [],
          limit(pageSize)
        );
        const snapshot = await getDocs(baseQuery);
        const videos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.resourceId) videos.push(data);
        });
        if (initial) {
          youtubeVideos.value = videos;
        } else {
          youtubeVideos.value.push(...videos);
        }
        if (snapshot.empty || snapshot.docs.length < pageSize) {
          hasMoreVideos.value = false;
        }
        lastVisible.value = snapshot.docs.at(-1) ?? null;
      } catch (error) {
        console.error("Error loading videos:", error);
      }
      isLoadingVideos.value = false;
    }
    onMounted(async () => {
      await loadVideos(true);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "utm-bg-image-div-1 theme-image" }, [
          createBaseVNode("h2", { class: "glow" }, [
            createTextVNode("Visit our "),
            createBaseVNode("a", {
              href: "https://discord.gg/jZrS3GVXsS",
              target: "_blank"
            }, [
              createTextVNode("Discord community!"),
              createBaseVNode("img", {
                class: "utm-social",
                src: _imports_0
              })
            ])
          ])
        ], -1)),
        _cache[9] || (_cache[9] = createBaseVNode("h1", null, "An Integral YouTube Channel", -1)),
        createBaseVNode("div", _hoisted_2, [
          createVNode(BookHero),
          _cache[1] || (_cache[1] = createBaseVNode("h2", null, "About", -1)),
          _cache[2] || (_cache[2] = createBaseVNode("p", null, " I didn’t aspire to be an Integral theorist on YouTube. When my life wonderfully exploded in my face, it created space to ask better questions: given my mix of talents and dysfunctions, what’s actually worth doing? ", -1)),
          _cache[3] || (_cache[3] = createBaseVNode("p", null, " This is my answer—share what I’ve found most valuable for personal evolution, and offer some company to people who feel alone or misunderstood. The response has gone far beyond what I expected. I’m grateful to anyone who spends even a few minutes here. I feel welcome and useful here. ", -1)),
          _cache[4] || (_cache[4] = createBaseVNode("p", null, " This isn’t an ideology you outgrow. It’s a framework you can choose to grow into—or not. The higher Levels and States are optional, but they’re real, and worth exploring. ", -1)),
          _cache[5] || (_cache[5] = createBaseVNode("p", null, " For me, Integral provides structure without rigidity—a compass that guides and challenges at the same time. It enhances how I think, create, and live. The years I spent on music, video, and philosophy weren’t random after all—they were preparation. ", -1)),
          _cache[6] || (_cache[6] = createBaseVNode("p", null, " This project is small, but it’s intentional. A kind of beacon. If you’re here, you probably see something in it too. ", -1))
        ]),
        createBaseVNode("button", {
          class: "classic-button",
          onClick: toggleClassic
        }, "Classic Videos"),
        withDirectives(createBaseVNode("div", _hoisted_3, [
          _cache[7] || (_cache[7] = createBaseVNode("h2", {
            id: "clasic-videos",
            class: "unthink-title"
          }, [
            createTextVNode("Classic Videos: "),
            createBaseVNode("i", { class: "material-icons glow" }, "park"),
            createTextVNode(" Integral Philosophy")
          ], -1)),
          createVNode(TransitionGroup, {
            name: "video",
            tag: "div",
            class: "video-grid"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(blogData.value, (datum) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  id: datum.id,
                  key: datum.id,
                  date: datum.date,
                  content: datum.content,
                  tnurl: datum.tnurl,
                  ytlink: datum.ytlink,
                  title: datum.title
                }, null, 8, ["id", "date", "content", "tnurl", "ytlink", "title"]);
              }), 128))
            ]),
            _: 1
          })
        ], 512), [
          [vShow, classicVideos.value]
        ]),
        _cache[10] || (_cache[10] = createBaseVNode("h2", { class: "glow" }, "Latest Videos:", -1)),
        withDirectives(createVNode(LoadingComponent, null, null, 512), [
          [vShow, isLoadingVideos.value]
        ]),
        createVNode(_sfc_main$1, {
          videos: youtubeVideos.value,
          "has-more": hasMoreVideos.value,
          "is-rendering": isLoadingVideos.value,
          onLoadMore: _cache[0] || (_cache[0] = ($event) => loadVideos(false))
        }, null, 8, ["videos", "has-more", "is-rendering"])
      ]);
    };
  }
});
const UnThinkMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c10306e"]]);
export {
  UnThinkMe as default
};
