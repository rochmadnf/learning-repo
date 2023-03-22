<template>
  <main class="container">
    <h1>Our Cars</h1>
    <select v-model="make">
      <option value="all">All</option>
      <option value="audi">Audi</option>
      <option value="porsche">Porsche</option>
      <option value="chevrolet">Chevrolet</option>
      <option value="buick">Buick</option>
    </select>

    <div class="cards">
      <div class="card" v-for="car in cars" :key="car.id"
        v-on:click="router.push({ name: 'car', params: { id: car.id } })">
        <h1>{{ car.make }}</h1>
        <p>${{ car.price }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import Cars from "../data.json";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cars = ref(Cars);
const make = ref("");

watch(make, () => {
  if (make.value) {
    (make.value === "all") ? cars.value = Cars : cars.value = Cars.filter(Car => Car.make.toLowerCase() === make.value)
  }
})
</script>

<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  background-color: #cbd5e1;
  border-radius: 6px;
  color: #0f172a;
  margin-bottom: 20px;
}
</style>
