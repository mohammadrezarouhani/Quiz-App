<script setup>
  import { ref, watch } from "vue"
  import q from "./data/data.json"
  import Card from "./components/Card.vue"

  const quizes = ref(q)
  const search = ref("")

  watch(search , () => {
      quizes.value=q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>

<template>
  <div class="container">
    <header>
      <h1>
        Quiz APP
      </h1>
      <input v-model.trim="search" type="search-input" placeholder="Search...">
    </header>

    <main>
      <div class="card-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      </div>
    </main>

  </div>
</template>

<style scoped>
.container {
  margin: 20px 30px 0px 30px;
  margin: 0px 180px 0px 180px;
}

header {
  display: flex;
  align-items: center;
  padding: 10px;
}

header h1 {
  font-weight: bold;
  padding: 10px;
}

header input {
  height: 50px;
  border: none;
  border-radius: 7px;
  font-size: 1rem;
  padding: 10px;
  background-color: rgb(128, 128, 128, .1);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
}

/* CARD */
</style>