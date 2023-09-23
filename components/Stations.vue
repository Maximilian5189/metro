<script>
  import stations from "./stationsArr"
  import { store } from '../state/store.js'

  export default {
  props: {
    componentName: "",
  },
  props: ['componentName'],
  // componentName,
  // setup(props) {
  //   // setup() receives props as the first argument.
  //   this.componentName = props.componentName
  // },

  data() {
    return {
      searchText: "",
      stations: stations,
      filteredStations: [],
    };
  },
  methods: {
    filterStations() {
      this.filteredStations = this.stations.filter((station) =>
        station.stop_name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    selectStation(station) {
      this.searchText = station.stop_name;
      store[this.componentName] = station
      this.filteredStations = [];
    },
  },
};
</script>

<template>
  <div>{{ componentName }}</div>
  <div class="autocomplete">
    <input
      v-model="searchText"
      @input="filterStations"
      placeholder="Search for a station"
      class="autocomplete-input"
    />
    <ul v-if="filteredStations.length" class="autocomplete-list">
      <li
        v-for="(station, index) in filteredStations"
        :key="index"
        @click="selectStation(station)"
        class="autocomplete-item"
      >
        {{ station.stop_name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.autocomplete {
  position: relative;
}

.autocomplete-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
}

.autocomplete-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
}

.autocomplete-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.autocomplete-item:hover {
  background-color: #f0f0f0;
}
</style>