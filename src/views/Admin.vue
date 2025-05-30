<script setup lang="ts">
import TodoComponent from "@/components/Admin/TodoComponent.vue";
import ScheduleComponent from "@/components/Admin/ScheduleComponent.vue";
// import MJBlog from "@/components/Admin/MJBlog.vue";
import { ref, reactive, nextTick, onMounted } from "vue";
import { useStore } from "@/stores/index";
// import { auth, firestoreDb } from "@/services/firebaseconfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import AdminUserList from '@/components/Admin/AdminUserList.vue';

// import { httpsCallable } from "firebase/functions";
// import { fireFunctions } from "@/services/firebaseconfig";
document.title = "Upstairs ~ Stein unLimited";
const store = useStore();
const router = useRouter();
const doShowTodo = ref(false);
const doShowSchedule = ref(false);
// const doShowMJ = ref(false);
const collapseState = ref(false);
const chooseWindow = (which: string) => {
  doShowTodo.value = false;
  doShowSchedule.value = false;
  // doShowMJ.value = false;
  nextTick(() => {
    if (which === "todo") {
      doShowTodo.value = true;
    } else if (which === "schedule") {
      doShowSchedule.value = true;
      // } else if (which === "mjblog") {
      //   doShowMJ.value = true;
    }
  });
};
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     auth.currentUser
//       .getIdTokenResult()
//       .then((idTokenResult) => {
//         if (idTokenResult.claims.admin) {
//           console.info("~We create the Future~");
//           // @TODO This is terrible security. Find another way.
//           store.setAdmin();
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     store.setIsIn();
//     store.setUid((await user.uid) as string);
//     const docRef = doc(firestoreDb, "users", user.uid);
//     const docSnap = await getDoc(docRef);
//     if (docSnap) {
//       store.setEmail(await docSnap.data().email);
//     } else {
//       console.log("No such document!");
//     }
//   } else {
    // store.$reset()
    // router.push('/')
//     store.setAuthIsReady();
//   }
// });
onMounted(() => {
  if (store.uid !== import.meta.env.VITE_UID) {
    router.isReady().then(()=>{
      router.push("/");
    })
  }
});
const adminState = reactive({
  userPane: true,
  toDoComponent: true,
  scheduleComponent: false,
  mJBlog: false
})
</script>
<template>
  <main class="admin-container">
    <template v-if="store.admin">
      <div>
        <component :is="AdminUserList" v-if="adminState.userPane" />
        <component :is="TodoComponent" v-if="adminState.toDoComponent" />
        <component :is="ScheduleComponent" v-if="adminState.scheduleComponent" />
        <!-- <component :is="MJBlog" v-if="adminState.mJBlog" /> -->
      </div>
      <div class="collapseNav">
        <nav v-show="!collapseState">
          <button
            class="userButton"
            @click.prevent="adminState.userPane=!adminState.userPane"
          >Users</button>

          <!-- v-show="!collapseState" -->
          <button
            class="userButton"
            @click.prevent="adminState.toDoComponent=!adminState.toDoComponent"
          >
            Memo
          </button>
          <!-- v-show="!collapseState" -->
          <button
            class="userButton"
            @click.prevent="adminState.scheduleComponent=!adminState.scheduleComponent"
          >
            Habit
          </button>
        </nav>
      <i
        class="material-icons christmas-icon green"
        @click.prevent="collapseState = !collapseState"
        >terminal</i
      >
      </div>
    </template>
  </main>
</template>
<style lang="sass">
.admin-container
  margin-top: 5rem
  display: grid
  .green
    cursor: pointer
    width: 100%
    padding: 0.3rem 2rem
    border-radius: 3rem
    margin: auto
    font-size: 3rem
    // width: clamp(min-content, 8rem, 100%)
.collapseNav
  max-width: 80vw
  width: 6rem
  margin: 0.2em 0.6em
  color: white
  display: grid
  background-color: rgba(10, 10, 10, 0.7)
  position: fixed
  bottom: 0
  right: 0
  z-index: 11
  nav
    margin: 0.2em 0.6em
    padding: 0.5rem
.userButton
  background: rgba(0, 0, 0, 0)
  color: red
  font-size: 1.3rem
  padding: 0.4rem 0.9rem
  display: block
  border-radius: 5px
.userButton:hover
  background: rgba(220, 220, 220, 1)
</style>
