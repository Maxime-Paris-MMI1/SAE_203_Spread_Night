<template>  


    <RectanglePresentation
    titre="Tout les artistes"
    couleur="#0c4a6e"/>




    <span class="flex flex-row justify-center gap-3 mt-16">
        <span class="font-lato lg:text-xl ">Filtrage</span>
        <input type="search" class="border-2 pl-2" v-model="query"/>

        <button class="font-montserrat py-2 px-3 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5 hidden lg:flex"
         type="button"  title="Filtrage">
            Filtrer
        </button>
    </span>
 <div class="mx-auto w-3/4 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">

        <CarteArtiste v-for="artiste in searchByName" :key="artiste.id"
        class="mb-16"
        titrebouton="En savoir plus"
        :chansonconnue="artiste.chansonconnue"
        :artiste="artiste.artiste"
        :imageartiste="artiste.imageartiste"
        lien="/martingarrix"
        />
 </div>

</template>

<script>
import CarteArtiste from '../components/CarteArtiste.vue'
import RectanglePresentation from '../components/RectanglePresentation.vue'

import { 
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

// Fonctions Storage
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'

// Import emetteur de main.js
import { emitter } from '../main.js'


export default {

    name:"Accueil",
    components:{CarteArtiste, RectanglePresentation},

    data(){
        return{
            artiste:null, //pour la création
            listArt:[],
            query:'',

        }
    },
    computed:{
        searchByName(){
            console.log("search");
            let query = this.query;
                return this.listArt.filter(function(artistes){
                    return artistes.artiste.includes(query);
            })    
        },

    },

    mounted(){
      this.getArtiste();
    },

    methods:{
        async getArtiste(){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document artistes
            const dbArt = collection(firestore, "artistes");
            const q = query(dbArt, orderBy('artiste', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listArt = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération des images de chaque artiste
                // parcours de la liste
                this.listArt.forEach(function(personne){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupération de l'image par son nom de fichier
                    const spaceRef = ref(storage, 'imageartiste/'+personne.imageartiste);
                    // Récupération de l'url complète de l'image
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        // On remplace le nom du fichier
                        // Par l'url complète de la imageartiste
                        personne.imageartiste = url;
                    })
                    .catch((error) =>{
                        console.log('erreur downloadUrl', error);
                    })
                })
            })      
        },
    },

    
  }
</script>
