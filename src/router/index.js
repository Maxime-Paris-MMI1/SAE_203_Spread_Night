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
import programmation23    from      '../views/programmation/ProgrammationDimanche23.vue'
import programmation24    from      '../views/programmation/ProgrammationLundi24.vue'
import programmation25    from      '../views/programmation/ProgrammationMardi25.vue'
import programmation26    from      '../views/programmation/ProgrammationMercredi26.vue'
import programmation27    from      '../views/programmation/ProgrammationJeudi27.vue'
import programmation28    from      '../views/programmation/ProgrammationVendredi28.vue'
import programmation29    from      '../views/programmation/ProgrammationSamedi29.vue'
import concertmartingarrix   from      '../views/concert/ConcertMartingarrix.vue'
import martingarrix  from      '../views/artiste/MartinGarrix.vue'
import connexion  from      '../views/ConnexionView.vue'
import View404   from      '../views/View404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                        name: 'accueil',         component: accueil  },
    { path: '/contact',                        name: 'contact',         component: contact  },
    { path: '/festival',                        name: 'festival',         component: festival   },
    { path: '/artistes',                        name: 'artistes',         component: artistes  },
    { path: '/mentionslegales',                        name: 'mentionslegales',         component: mentionslegales  },
    { path: '/programmation',                        name: 'programmation',         component: programmation  },
    { path: '/programmation23',                        name: 'programmation23',         component: programmation23  },
    { path: '/programmation24',                        name: 'programmation24',         component: programmation24  },
    { path: '/programmation25',                        name: 'programmation25',         component: programmation25  },
    { path: '/programmation26',                        name: 'programmation26',         component: programmation26  },
    { path: '/programmation27',                        name: 'programmation27',         component: programmation27  },
    { path: '/programmation28',                        name: 'programmation28',         component: programmation28  },
    { path: '/programmation29',                        name: 'programmation29',         component: programmation29  },
    { path: '/concertmartingarrix',                        name: 'concertmartingarrix',         component: concertmartingarrix  },
    { path: '/martingarrix',                        name: 'martingarrix',         component: martingarrix  },
    { path: '/connexion',                        name: 'connexion',         component: connexion },
    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },
  ]
})


export default router


