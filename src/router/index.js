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

import 'tw-elements';

import accueil    from      '../views/AccueilView.vue'
import contact   from      '../views/ContactView.vue'
import festival    from      '../views/FestivalView.vue'
import artistes    from      '../views/ListeArtistes.vue'
import mentionslegales   from      '../views/MentionsLegales.vue'
import programmation    from      '../views/ProgrammationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                        name: 'accueil',         component: accueil  },
    { path: '/contact',                        name: 'contact',         component: contact  },
    { path: '/festival',                        name: 'festival',         component: festival   },
    { path: '/artistes',                        name: 'artistes',         component: artistes  },
    { path: '/mentionslegales',                        name: 'mentionslegales',         component: mentionslegales  },
    { path: '/programmation',                        name: 'programmation',         component: programmation  },
  ]
})


export default router


