<template>
    <main class="flex flexrow flex-wrap gap-20 mt-10 mb-20">
        <CarteArtiste
        titrebouton="En savoir plus"
        chansonconnue="Animals"
        artiste="Martin Garrix"
        image="/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp"
        />

        <CarteArtiste
        titrebouton="En savoir plus"
        chansonconnue="Broken"
        artiste="Netsky"
        :image="img6"
        />

        <CarteArtiste
        titrebouton="En savoir plus"
        chansonconnue="Heartbeat Loud"
        artiste="Andy C"
        image="../../public/Images/pexels-binyamin-mellish-106399 1.png"
        />

        <CarteArtiste
        titrebouton="En savoir plus"
        chansonconnue="Animals"
        artiste="Martin garrix"
        image="../../public/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp"
        />

        <CarteArtiste
        titrebouton="En savoir plus"
        chansonconnue="Animals"
        artiste="Martin garrix"
        image="../../public/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp"
        />

    </main>
</template>

<script>
import CarteArtiste from '../components/CarteArtiste.vue'
import img6 from '../../public/Images/Netsky_(DJ).webp'

export default {
    data: function () {
        return {
            img6,
        }
    },
    name:"Accueil",
    components:{CarteArtiste,}

}
</script>
