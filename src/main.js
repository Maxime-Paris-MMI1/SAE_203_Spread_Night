import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import de mitt


// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA5LfdxhvXmaXw0t9erBw5R_zCupb7-NhA",
    authDomain: "spread-night.firebaseapp.com",
    projectId: "spread-night",
    storageBucket: "spread-night.appspot.com",
    messagingSenderId: "317176532321",
    appId: "1:317176532321:web:a7f5384260e6e12eba4920"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
