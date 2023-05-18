<script setup>
import QuestionHeader from '../components/QuestionHeader.vue';
import Question from '../components/Question.Vue';
import { useRoute } from "vue-router"
import { ref, computed } from "vue"
import quizes from "../data/data.json"

const router = useRoute()
const quizID = parseInt(router.params.id)
const quiz = quizes.find(q => q.id === quizID)
const currentQuestionIndex = ref(0)
const questionStatus = computed(() => 'Question ' + currentQuestionIndex.value + '/' + quiz.questions.length)
const barPercentage = computed(() => currentQuestionIndex.value / quiz.questions.length * 100 + '%')
const correctAnswers = ref(0)

const onOptionSelected = (isCorrect) => {
        if (isCorrect) {
            correctAnswers.value += 1
        }
        currentQuestionIndex.value += 1
}

</script>

<template>
    <div class="container">
        <QuestionHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <Question :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
    </div>
</template>

<style scoped>
.container {
    margin: 20px 0px 0px 300px;
}
</style>