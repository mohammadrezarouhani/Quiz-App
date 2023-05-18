<script setup>
import QuestionHeader from '../components/QuestionHeader.vue';
import Question from '../components/Question.Vue';
import Result from '../components/Result.vue'

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
const showResult=ref(false)

const onOptionSelected = (isCorrect) => {
        if (isCorrect) {
            correctAnswers.value += 1
        }
        if (currentQuestionIndex.value==quiz.questions.length-1){
            showResult.value=true
        }
        currentQuestionIndex.value += 1
}

</script>

<template>
    <div class="container">
        <QuestionHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <Question v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
        <Result v-else :correctAnswers="correctAnswers" :questionLength="quiz.questions.length"/>
    </div>
</template>

<style scoped>

</style>