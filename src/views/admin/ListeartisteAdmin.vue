<template>      
    <h1 class="font-lato text-2xl text-center border-b-2 mb-20">Page liste artiste admin</h1>



    <span class="flex gap-x-2">
        <span>Filtrage</span>
        <input type="text" class="border-2" v-model="filter" />

        <button type="button"  title="Filtrage">
            Filtrer
        </button>
    </span>


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
    </div>
</template>

<script>
import CarteArtiste from '../../components/CarteArtiste.vue'
import RectanglePresentation from '../../components/RectanglePresentation.vue'

import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'


export default {
    name:"Accueil",
    components:{CarteArtiste, RectanglePresentation},


    computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.artiste.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.artiste < b.artiste) return -1;
        // Si le artiste du pays est après on retourne 1
        if(a.artiste > b.artiste) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est rnseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(artiste){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return artistes.artiste.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },

}
</script>
