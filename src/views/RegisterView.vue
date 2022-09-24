<script setup>
import { ref } from "vue";
import MapComponent from "../components/MapComponent.vue";
const latitudUsuario = ref("");
const longitudUsuario = ref("");

const locationUser = ref({})
const onEnlargeText = (value) => {
  console.log(value);

  locationUser.value =  value
};
</script>

<template>
  <div>
    Esta es la informacion del padre:
    <pre>
     {{locationUser}}
    </pre>
  </div>
  <MapComponent @enlargeText="onEnlargeText" />
</template>

<style lang="scss" scoped></style>
