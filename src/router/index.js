import { createRouter, createWebHistory } from 'vue-router'

// Fonction d'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import { 
  getFirestore, 
  collection, 
  onSnapshot, 
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


import accueilview    from      '../views/AccueilView.vue'
import concertview    from      '../views/ConcertView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                        name: 'accueilview',         component: accueilview  },
    { path: '/concertview',                        name: 'concertview',         component: concertview  },
  ]
})


export default router


