
<script setup>
    import { useRouter } from 'vue-router';

    const {quiz}=defineProps(["quiz"])
    const router=useRouter()

    const navigateToQuiz=()=>{
      router.push({ name: 'quiz', params: { id: quiz.id } })
    } 
</script>

<template>    
    <div class="card-container">
        <div @click="navigateToQuiz" class="card">
            <img :src="quiz.img" alt="">
            <p class="title">{{quiz.name}}</p>
            <p class="question-number">
                {{quiz.questions.length}} questions
            </p>
        </div>
    </div>
</template>

<style scoped>
.card {
  width: 320px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 1px 1px 10px rgb(0, 0, 0, .1);
  margin: 5px 10px 25px 10px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 260px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-bottom: 10px;
}

.card .title {
  font-size: 1.2rem;
  margin-left: 5px;
}

.card .question-number {
  margin-left: 5px;
  font-size: .8rem;
}
</style>