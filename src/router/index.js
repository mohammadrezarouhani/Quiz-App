import { createRouter, createWebHistory } from "vue-router";
import Quizes from "../view/Quizes.vue"
import Quiz from "../view/Quiz.vue"

const routers = createRouter({
    "history": createWebHistory(import.meta.env.BASE_URL),

    "routes": [
        {
            "path": "/",
            "name": "App",
            "component": Quizes
        },
        {
            "path":"/quiz/:id",
            "name":"quiz",
            "component":Quiz
        }
    ]
})

export default routers