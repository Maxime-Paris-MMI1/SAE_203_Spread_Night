<template>
    <main>
        <CarteArtiste
        titrebouton="En savoir plus"
        chansonconnue="Animals"
        artiste="Martin garrix"
        image="../../public\Images\medias_2019_07_martin-garrix_5d2319d26058b.webp"
        />

    </main>
</template>

<script>
import CarteArtiste from '../components/CarteArtiste.vue'

export default {
    name:"Accueil",
    components:{CarteArtiste,}

}
</script>
