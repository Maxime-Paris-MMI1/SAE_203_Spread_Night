import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import de mitt
import mitt from 'mitt';

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

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

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
