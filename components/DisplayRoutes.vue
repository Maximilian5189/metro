<template>
    <div class="display-routes">
      <h2>Itineraries</h2>
      <div v-for="itinerary in itineraries" :key="itinerary.id" class="itinerary">
        <h3>Duration: {{ Math.round(itinerary.duration / 60) }} minutes</h3>
        <ul class="legs">
          <li v-for="leg in itinerary.legs" :key="leg.id" class="leg">
            <div v-if="leg.mode === 'WALK'">{{ leg.mode }}</div>
            <div v-if="leg.mode !== 'WALK'">{{ leg.route }}</div>
            <div v-if="leg.mode !== 'WALK'">
              <br/>
              <div>From {{ leg.from.name }}</div>
              <div>To {{ leg.to.name }}</div>
              <br/>
            </div>
            <span>{{ new Date(leg.startTime).toLocaleString("en-US", {timeZone: "America/New_York"}).split(",")[1] }} - </span>
            <span>{{ new Date(leg.endTime).toLocaleString("en-US", {timeZone: "America/New_York"}).split(",")[1] }}</span>
            <br/>
            <div v-if="leg.departureDelay">departureDelay {{ leg.departureDelay }}</div>
            <div v-if="leg.arrivalDelay">arrivalDelay {{ leg.arrivalDelay }}</div>
            <div>-----------</div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from '../state/store.js'

  export default {
    computed: {
      itineraries() {
        return store.itineraries;
      },
    },
  };
  </script>
  
  <style scoped>
  .display-routes {
    /* Add your component-level styling here */
  }
  
  .itinerary {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .legs {
    list-style-type: none;
    padding: 0;
  }
  
  .leg {
    margin-top: 10px;
  }
  </style>
  