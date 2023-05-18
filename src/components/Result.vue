
<script setup>
import { RouterLink } from 'vue-router';
 
const { questionLength, correctAnswers } = defineProps(['questionLength', 'correctAnswers'])
</script>

<template>
    <div class="container">
        <h1>Finished</h1>
        <h2>your score is:</h2>
        <h2>{{ correctAnswers }}/{{ questionLength }}</h2>
        <RouterLink to="/">GO Back</RouterLink>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>