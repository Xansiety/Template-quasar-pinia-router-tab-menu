<script setup>
import { ref } from "vue";
import { useCounterStore } from "../store/counterStore";
import Datatable from "../components/datatable.vue";
const storeCounter = useCounterStore();
</script>

<template>
  <q-page>
    Valor actual desde vista datatable: {{ storeCounter.count }}
    <q-btn label="Incrementar" @click="storeCounter.increment"></q-btn>

    <datatable></datatable>
  </q-page>
</template>

<style lang="scss" scoped></style>
