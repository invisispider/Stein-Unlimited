import { watch, unref, ref, isRef } from "vue";
import { DateTime } from "luxon";
import { useTime } from "@/stores/time";

export function setupTimeWatcher() {
  const store = useTime();

  if (!store.inputDate) {
    store.startTimer();
  }

//   watch(
//     () => store.inputDate,
//     (newDate) => {
//         const rawDate = unref(newDate);

//         if (!(rawDate instanceof Date) || isNaN(rawDate.getTime())) return;

//         const luxonDate = DateTime.fromJSDate(rawDate);
//         if (!luxonDate.isValid) return;

//         store.animateToSelectedDate(luxonDate);
//     },
//     { immediate: true }  // optional, trigger on load
//   );

  // watch(
  //   () => {
  //     const date = store.inputDate;

  //     // If store.inputDate is a ref, access its value
  //     const unwrapped = isRef(date) ? date.value : date;

  //     if (unwrapped instanceof Date) {
  //       console.warn("date instanceof Date.");
  //       return unwrapped.getTime();
  //     } else {
  //       console.log("watcher triggered with non-date.");
  //       return null;
  //     }
  //   },
  //   (newTime, oldTime) => {
  //     if (!newTime || newTime === oldTime) return;
  //     console.log("Watcher received new inputDate", newTime);
  //     const luxonDate = DateTime.fromMillis(newTime);
  //     if (!luxonDate.isValid) return;
  //     store.animateToSelectedDate(luxonDate);
  //   },
  //   { immediate: true }
  // );

  // Fix: Flatpickr is assigning a string to store.inputDate

  // Solution 1: Convert to Date manually inside the watcher
  watch(
    () => {
      const raw = store.inputDate;
      const unwrapped = isRef(raw) ? raw.value : raw;

      // Flatpickr is assigning a string, so we need to parse it
      const parsed = typeof unwrapped === 'string' ? new Date(unwrapped) : unwrapped;

      if (parsed instanceof Date && !isNaN(parsed.getTime())) {
        console.warn("Valid Date parsed from input.");
        return parsed.getTime();
      } else {
        console.log("Watcher triggered with non-date.");
        return null;
      }
    },
    (newTime, oldTime) => {
      if (!newTime || newTime === oldTime) return;
      console.log("Watcher received new inputDate", newTime);
      const luxonDate = DateTime.fromMillis(newTime);
      if (!luxonDate.isValid) return;
      store.animateToSelectedDate(luxonDate);
    },
    { immediate: true }
  );
};