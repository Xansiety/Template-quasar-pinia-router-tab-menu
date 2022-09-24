<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

const coordenadas = ref({
  latitud: "",
  longitud: "",
});

let map = ref("");

onMounted(() => {
  map = L.map("map").fitWorld();

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  map.locate({ setView: true, maxZoom: 16 });

  map.on("locationfound", onLocationFound);
  map.on("locationerror", onLocationError);
});

const onLocationFound = (e) => {
  var radius = e.accuracy;
  L.marker(e.latlng)
    .addTo(map)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();
  L.circle(e.latlng, radius).addTo(map);

  coordenadas.value.latitud = e.latlng.lat;
  coordenadas.value.longitud = e.latlng.lng;

  tryThis() // emitimos la información al padre
};

const onLocationError = (e) => {
  alert(e.message);
};

const emit = defineEmits(["enlargeText"]);

const tryThis = () => {
  console.log("trying");
  emit("enlargeText",coordenadas.value);
};
</script>

<template>
  <button v-on:click="tryThis">Enlarge text</button>
  <div id="map"></div>
</template>

<style lang="css" scoped>
#map {
  height: 500px;
}
</style>
