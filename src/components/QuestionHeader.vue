<script setup>
const { questionStatus, barPercentage } = defineProps(['questionStatus', 'barPercentage'])
</script>

<template>
    <div>
        <header>
            <h1>{{ questionStatus }}</h1>
            <div class="bar-container">
                <div class="bar" :style="{ width: barPercentage }"></div>
            </div>
        </header>
    </div>
</template>


<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

header h1 {
    font-weight: bold;
}

.bar-container {
    width: 300px;
    border: 1px solid brown;
    margin: 20px 0px 20px 0px;
    height: 40px;
}

.bar {
    height: 100%;
    width: 0%;
    background-color: green;
}
</style>