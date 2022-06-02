<template>
<header>
  <div class="flex flex-row justify-between bg-gray-100 px-4 py-7
              lg:hidden">

    <a href="/"><img src="../public/Images/Logo.webp" alt="logo"></a>
    <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
      <div>
        <MenuHamburger :class="{'hidden' : menuOuvert}" />
      </div>
      <span class="sr-only">Menu</span>
    </button>
  </div>
  <div id="menu" class="z-50 fixed inset-0  translate-x-full bg-[#0369A1] motion-safe:duration-1000 motion-safe:transition-transform h-full lg:hidden" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-between">
          <RouterLink to="/connexion">
            <IconConnexion class=" mt-12 ml-8"
            couleur="#ffffff"
            couleur1="#ffffff"/>
          </RouterLink>
          <button class="relative z-50 mr-8 mt-12" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <CroixMenu :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}"/>
          </button>
        </div>

        <nav class="text-white font-lato font-medium text-2xl pt-20">
          <ul class="flex flex-col text-center gap-[70px]">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/programmation">Programmation</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/artistes">Artistes</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/festival">Le Festival</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/contact">Contact</RouterLink>
          </ul>
        </nav>

        <div class="absolute bottom-[145px] w-full">
          <DecoFooter class=" max-h-[178px] w-full min-h-[0px]  object-cover relative z-0 -mb-36"/>
          <img class="h-[72px] absolute z-50 mt-9 ml-4" src="../public/Images/Logo.webp" alt="logo">
        </div>


        
  </div>
  <div class="hidden lg:flex justify-center gap-[25px] bg-gray-100 pb-4">
    <a href="/"><img class="mt-5 h-10" src="../public/Images/Logo.webp" alt="logo"></a>

    <ul class=" gap-8  font-lato font-semibold text-black flex flex-row">
      <li class="pt-6 font-lato font-semibold text-lg"><RouterLink to="/programmation"><p>Programmation</p></RouterLink></li>
      <LigneMenu class="mt-9 motion-safe:animate-[barmenu_1.5s_cubic-bezier(.01,.95,.5,.91)]"/>
      <li class="pt-6 font-lato font-semibold text-lg"><RouterLink to="/artistes"><p>Artistes</p></RouterLink></li>
      <LigneMenu class="mt-9 motion-safe:animate-[barmenu_1.5s_cubic-bezier(.01,.95,.5,.91)]"/>
      <li class="pt-6 font-lato font-semibold text-lg"><RouterLink to="/festival"><p>Le Festival</p></RouterLink></li>
      <LigneMenu class="mt-9 motion-safe:animate-[barmenu_1.5s_cubic-bezier(.01,.95,.5,.91)]"/>
      <li class="pt-6 font-lato font-semibold text-lg"><RouterLink to="/contact"><p>Contact</p></RouterLink></li>
      <div class="flex flex-row gap-8" v-if="isAdmin">
        <LigneMenu class="mt-9 motion-safe:animate-[barmenu_1.5s_cubic-bezier(.01,.95,.5,.91)]"/>
        <li class="pt-6 font-lato font-semibold text-lg"><RouterLink to="/admin"><p>Admin</p></RouterLink></li>
      </div>
      <RouterLink to="/connexion"><IconConnexion class="mt-5"/></RouterLink>
    </ul>
  </div>
</header>

<p v-if="isConnecte">Contenu lorsque qu'une personne se connecte. Lorsqu'on est Admin, une page apparait dans le menu</p>

  <RouterView/>



<footer>
  <ul class="bg-[#0C4A6E] pb-8 flex flex-col text-center gap-8 pt-6 font-montserrat text-white font-normal text-xs lg:hidden">
    <li><RouterLink to="/mentionslegales"><p>Mentions légales</p></RouterLink></li>
    <li><RouterLink to="/contact"><p>Nous contacter</p></RouterLink></li>
    <li>Nous suivre sur les réseaux</li>
    <div class="flex flex-row justify-center gap-5 h-8 ">
      <a href="https://www.facebook.com/"><img src="../public/Images/PinClipart-1.webp" alt="Logo Facebook"></a>
      <a href="https://www.youtube.com/"><img src="../public/Images/logo-youtube-1.webp" alt="Logo Youtube"></a>
      <a href="https://www.instagram.com/"><img src="../public/Images/logo-instagram-noir-1.webp" alt="logo Instagram"></a>
    </div>
  </ul>

  <ul class="bg-[#0C4A6E] pb-9  flex-row justify-center gap-16 pt-9 font-montserrat text-white font-normal text-xs hidden lg:flex">
    <li class="mt-2"><RouterLink to="/mentionslegales"><p>Mentions légales</p></RouterLink></li>
    <li class="mt-2"><RouterLink to="/contact"><p>Nous contacter</p></RouterLink></li>
    <div class="flex flex-row justify-center gap-5 h-8 ">
      <a href="https://www.facebook.com/"><img src="../public/Images/PinClipart-1.webp" alt="Logo Facebook"></a>
      <a href="https://www.youtube.com/"><img src="../public/Images/logo-youtube-1.webp" alt="Logo Youtube"></a>
      <a href="https://www.instagram.com/"><img src="../public/Images/logo-instagram-noir-1.webp" alt="logo Instagram"></a>
    </div>
  </ul>
</footer>
 


</template>
<script>
import MenuHamburger from './components/icons/MenuHamburger.vue'
import LigneMenu from './components/icons/LigneMenu.vue'
import CroixMenu from './components/icons/CroixMenu.vue'
import DecoFooter from './components/icons/DecoFooter.vue'
import IconConnexion from './components/icons/IconConnexion.vue'

import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'


// Fonctions Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from './main.js'

export default {
  name: "Accueil",
  components: {MenuHamburger, LigneMenu, CroixMenu, DecoFooter, IconConnexion},

  beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  },

  data() {
    return {
      user:{              // User connecté
        email:null,
        password:null,
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"Spread-Night",       // Titre de l'application ou nom du user
      isAdmin:false,      // Si l'utilisateur est ou non administrateur
      isConnecte: false, 
      menuOuvert: false,
    }
  },
  mounted(){
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on('connectUser', e => {
      // Récupération du user
      this.user = e.user;
      console.log('App => Reception user connecté', this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);      
    })        
    
    // Ecoute de l'évènement de deconnexion
    emitter.on('deConnectUser', e => {
      // Récupération user 
      this.user = e.user;
      console.log('App => Reception user deconnecté', this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo   = null;
      this.name       = 'Spread-Night';
      this.isAdmin    = false;
      this.isConnecte   = false;
    })
  },
  methods:{
    // Obtenir les informations du user connecté
    async getUserConnect(){
      await getAuth().onAuthStateChanged(function(user) { 
        if(user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);   
        } 
      }.bind(this));
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user){
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
          this.userInfo = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
          ));
          console.log("userInfo", this.userInfo);                
          // userInfo étant un tableau, onn récupère
          // ses informations dans la 1° cellule du tableau : 0
          this.name = this.userInfo[0].login;
          this.isAdmin=this.userInfo[0].admin;
          this.isConnecte=this.userInfo[0].connecte;
          // Recherche de l'image du user sur le Storage
          // Référence du fichier avec son nom
        });
      }
    } 
}
</script>