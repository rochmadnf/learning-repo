<script setup>
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from "vue";
import cars from "../data.json";

const route = useRoute();
const car = ref(null);
const { id } = route.params;

onBeforeMount(() => {
  car.value = cars.find(c => c.id === parseInt(id));
});
</script>

<template>
  <main class="container">
    <h1>The Car</h1>
    <p>Make : {{ car.make }}</p>
    <p>Body : {{ car.body }}</p>
    <p>Price: {{ car.price }}</p>
    <p>Year : {{ car.year }}</p>
  </main>
</template>