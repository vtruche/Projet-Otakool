import { createRouter, createWebHistory } from "vue-router"
import Login from "./components/Login.vue";
import Acceuil from "./components/Acceuil.vue";
import Signup from './components/Signup.vue'
import Profil from './components/Profil.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "acceuil",
            component: Acceuil
        },
        {
            path: "/connexion",
            name: "connexion",
            component: Login
        },
        {
            path: "/inscription",
            name: "inscription",
            component: Signup
        },
        {
            path: "/profil",
            name: "profil",
            component: Profil
        }
    ]
})

export default router; 