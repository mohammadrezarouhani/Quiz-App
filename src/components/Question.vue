<script setup>

const { question } = defineProps(['question'])
const emit=defineEmits(['selectOption'])

const emitSelectOption=(isCorrect)=>{
    emit("selectOption",isCorrect)
}

</script>   

<template>
    <div>
        <main>
            <div class="question">
                <h1>{{ question.text }}</h1>
            </div>
            <div class="option-container">
                <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectOption(option.isCorrect)">
                    <p class="option-number">{{ option.label }}</p>
                    <p class="option-content">{{ option.text }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.question{
    margin: 0px auto;
    width: 50%;
}
.option-container {
    margin: 0px auto;
    width:50%;
    flex-direction: column;
    cursor: pointer;
}

.option {
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgb(172, 216, 255);
    border-radius: 15px;
    margin: 10px 0px;
}

.option-number {
    border-radius: 10px;
    width: 40px;
    height: 40px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: bisque;
}

.option-content {
    padding: .4%;
    font-size: 21px;
}
</style>