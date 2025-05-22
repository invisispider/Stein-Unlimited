import { watch, unref, ref, isRef } from "vue";
import { DateTime } from "luxon";
import { useTime } from "@/stores/time";

export function setupTimeWatcher() {
  const store = useTime();

  if (!store.inputDate) {
    store.startTimer();
  }

  watch(
    () => {
      const raw = store.inputDate;
      const unwrapped = isRef(raw) ? raw.value : raw;

      const parsed = typeof unwrapped === 'string' ? new Date(unwrapped) : unwrapped;

      if (parsed instanceof Date && !isNaN(parsed.getTime())) {
        // console.warn("Valid Date parsed from input.");
        return parsed.getTime();
      } else {
        // console.log("Watcher triggered with non-date.");
        return null;
      }
    },
    (newTime, oldTime) => {
      if (!newTime || newTime === oldTime) return;
      // console.log("Watcher received new inputDate", newTime);
      const luxonDate = DateTime.fromMillis(newTime);
      if (!luxonDate.isValid) return;
      store.animateToSelectedDate(luxonDate);
    },
    { immediate: true }
  );
};