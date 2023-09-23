<template>
    <button @click="fetchRoutes" class="async-button">get routes</button>
  </template>
  
  <script>
  import { getRoutes } from "./getRoutes"
  import { store } from '../state/store.js'

  export default {
    props: {
      buttonText: "get routes",
    },
    methods: {
      async fetchRoutes() {
        try {
          console.log('fetching routes')
          
          const date = `${store.month}%2F${store.day}%2F${store.year[2]}${store.year[3]}`

          const ampm = store.hours >= 12 ? 'PM':'AM'
          let americanHours = ((Number(store.hours) + 11) % 12 + 1).toString();
          // if (americanHours.length === 1) {
          //   americanHours = '0' + americanHours
          // }
          const time = `${americanHours}%3A${store.minutes}%00${ampm}`
          
          console.log('date', date, 'should be this format 9%2F23%2F23')
          console.log('time', time, 'should be this format 08%3A00%20PM')

          const itineraries = await getRoutes(store.from, store.to, date, time, store.optimize);
          store.itineraries = itineraries
        } catch (error) {
          console.error("Error fetching routes:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .async-button {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: #fff;
    transition: background-color 0.2s;
  }
  
  .async-button:hover {
    background-color: #f0f0f0;
  }
  </style>
  