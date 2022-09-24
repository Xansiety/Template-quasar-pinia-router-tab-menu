<script setup>
import { ref } from "vue";
import { useCounterStore } from "../store/counterStore.js"; 
const storeCounter = useCounterStore();
console.log(storeCounter.count);
</script>

<template>
  <q-page>
    Valor actual desde contador: {{ storeCounter.count }}
    <q-btn label="Incrementar" @click="storeCounter.increment"></q-btn> 

  </q-page>
</template>

<style lang="scss" scoped></style>
