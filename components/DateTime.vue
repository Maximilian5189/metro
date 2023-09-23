<template>
    <div class="datetime-picker">
      <div class="date-picker">
        <label>Date:</label>
        <input type="date" v-model="selectedDate">
      </div>
      <div class="time-picker">
        <label>Time:</label>
        <input type="time" v-model="selectedTime">
      </div>
    </div>
  </template>
  
  <script>
  import { store } from '../state/store.js'

  export default {
    computed: {
      selectedDate: {
        get() {
          return `${store.year}-${store.month}-${store.day}`;
        },
        set(value) {
          const [year, month, day] = value.split('-');
          store.year = year
          store.month = month
          store.day = day
        },
      },
      selectedTime: {
        get() {
          return `${store.hours}:${store.minutes}`;
        },
        set(value) {
          let [hours, minutes] = value.split(':');
          store.hours = hours
          store.minutes = minutes
        },
      },
    },
  };
  </script>
  
  <style scoped>
  .datetime-picker {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .date-picker,
  .time-picker {
    margin-right: 20px;
  }
  
  label {
    font-weight: bold;
  }
  </style>
  