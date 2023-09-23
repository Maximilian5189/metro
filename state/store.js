import { reactive } from "vue";

const currentDateTime = new Date();

let month = (currentDateTime.getMonth() + 1).toString();
if (month.length === 1) {
  month = "0" + month;
}

let day = currentDateTime.getDate().toString();
if (day.length === 1) {
  day = "0" + day;
}

let hours = currentDateTime.getHours().toString();
if (hours.length === 1) {
  hours = "0" + hours;
}

let minutes = currentDateTime.getMinutes().toString();
if (minutes.length === 1) {
  minutes = "0" + minutes;
}

export const store = reactive({
  from: "",
  to: "",
  year: currentDateTime.getFullYear().toString(),
  month,
  day,
  hours,
  minutes,
  seconds: "",
  ampm: "",
  optimize: "QUICK", // TRANSFERS, QUICK
});
