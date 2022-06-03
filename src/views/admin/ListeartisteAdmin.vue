<template>      
    <h1 class="font-lato text-2xl text-center border-b-2 mb-20">Page liste artiste admin</h1>



    <span class="flex flex-row justify-center gap-3">
        <span>Filtrage</span>
        <input type="text" class="border-2" v-model="filter" />

        <button type="button"  title="Filtrage">
            Filtrer
        </button>
    </span>

<!-- <tr v-for="artistes in searchByName" :key="artistes.artiste" class="mt-2">

    <td class=""><img :src="artistes.imageartiste" :alt="artistes.artiste" class="w-full h-auto"></td>
    <td class="text-center font-montserrat">{{artistes.artiste}}</td> -->

 <div class="mx-auto w-3/4 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <CarteArtiste v-for="artiste in listArt" :key="artiste.id"
        class="mb-16"
        titrebouton="En savoir plus"
        :chansonconnue="artiste.chansonconnue"
        :artiste="artiste.artiste"
        :imageartiste="artiste.imageartiste"
        lien="/martingarrix"
        />
 </div>
<!-- 
      <div class="mx-auto w-3/4 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Animals"
        artiste="Martin Garrix"
        imageartiste="/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp"
        lien="/martingarrix"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Broken"
        artiste="Netsky"
        imageartiste="/Images/Netsky_(DJ).webp"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Heartbeat Loud"
        artiste="Andy C"
        imageartiste="/Images/pexels-binyamin-mellish-1063991.png"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Stalker"
        artiste="Aphrodite"
        imageartiste="/Images/image_card_artiste_vert.png"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Desire"
        artiste="Sub focus"
        imageartiste="/Images/benjamin.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Supersonic"
        artiste="Noisia"
        imageartiste="/Images/artiste_2.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="You & I"
        artiste="Bru-C"
        imageartiste="/Images/artiste_3.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Your Love"
        artiste="Kanine"
        imageartiste="/Images/artiste_4.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Blind Faith"
        artiste="Chase & Status"
        imageartiste="/Images/artiste_5.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="I Adore You"
        artiste="Goldie"
        imageartiste="/Images/artiste_6.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Promises"
        artiste="Nero"
        imageartiste="/Images/artiste_7.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Pleasure"
        artiste="1991"
        imageartiste="/Images/artiste_8.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Watch it Burn"
        artiste="Camo & Krooked"
        imageartiste="/Images/artiste_9.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Peace, Love and Unity"
        artiste="DJ Hype"
        imageartiste="/Images/artiste_10.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Count My Blessings"
        artiste="Spor"
        imageartiste="/Images/artiste_11.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Solitary Native"
        artiste="Alix Perez"
        imageartiste="/Images/artiste_12.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Hometown Glory"
        artiste="High Contrast"
        imageartiste="/Images/artiste_13.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Feeling Stronger"
        artiste="Muzz"
        imageartiste="/Images/artiste_14.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="We Got It"
        artiste="Metrik"
        imageartiste="/Images/artiste_1.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Dimension"
        artiste="Saviour"
        imageartiste="/Images/artiste_15.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="I Saw You"
        artiste="Black Sun Empire"
        imageartiste="/Images/artiste_16.webp"
        />
    </div> -->


</template>

<script>
import CarteArtiste from '../../components/CarteArtiste.vue'
import RectanglePresentation from '../../components/RectanglePresentation.vue'

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
import { emitter } from '../../main.js'


export default {

    name:"Accueil",
    components:{CarteArtiste, RectanglePresentation},

    data(){
        return{
            listArt:[],
            query:'',

        }
    },

    mounted(){
       // debugger
      this.getArtiste();
    },

    methods:{
        async getArtiste(){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document artistes
            const dbPart = collection(firestore, "artistes");
            // Liste des participants triés sur leur nom
            const q = query(dbPart, orderBy('artiste', 'asc'));
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

    // computed:{
    // searchByName(){
    //         let query = this.query;
    //             return this.listArt.filter(function(artistes){
    //                 return artistes.artiste.includes(query);
    //         })
    //     },

    // },

    // Tri des pays par nom en ordre croissant

    // orderByName:function(){

    //   // Parcours et tri des pays 2 à 2

    //   return this.artiste.sort(function(a,b){

    //     // Si le nom du pays est avant on retourne -1

    //     if(a.artiste < b.artiste) return -1;

    //     // Si le artiste du pays est après on retourne 1

    //     if(a.artiste > b.artiste) return 1;

    //     // Sinon ni avant ni après (homonyme) on retourne 0

    //     return 0;
    //   });
    // },
    // Filtrage de la propriété calculée de tri
    // filterByName:function(){

    //   if(this.filter.length > 0){

    //     let filter = this.filter.toLowerCase();

    //     return this.orderByName.filter(function(artiste){

    //       return artistes.artiste.toLowerCase().includes(filter);
    //     })
    //   }else{

    //     return this.orderByName;
    //   }
    // }
  }
</script>
