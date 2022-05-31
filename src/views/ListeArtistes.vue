<template>
    <main>
    <div>
        <RectanglePresentation
        titre="Tout les artistes"
        couleur="#0C4A6E"/>
    </div>
    <div class="mx-auto w-3/4 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Animals"
        artiste="Martin Garrix"
        image="/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Broken"
        artiste="Netsky"
        :image="img6"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Heartbeat Loud"
        artiste="Andy C"
        image="/Images/pexels-binyamin-mellish-1063991.png"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Stalker"
        artiste="Aphrodite"
        image="/Images/image_card_artiste_vert.png"
        />

        <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Desire"
        artiste="Sub focus"
        image="/Images/benjamin.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Supersonic"
        artiste="Noisia"
        image="/Images/artiste_2.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="You & I"
        artiste="Bru-C"
        image="/Images/artiste_3.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Your Love"
        artiste="Kanine"
        image="/Images/artiste_4.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Blind Faith"
        artiste="Chase & Status"
        image="/Images/artiste_5.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="I Adore You"
        artiste="Goldie"
        image="/Images/artiste_6.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Promises"
        artiste="Nero"
        image="/Images/artiste_7.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Pleasure"
        artiste="1991"
        image="/Images/artiste_8.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Watch it Burn"
        artiste="Camo & Krooked"
        image="/Images/artiste_9.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Peace, Love and Unity"
        artiste="DJ Hype"
        image="/Images/artiste_10.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Count My Blessings"
        artiste="Spor"
        image="/Images/artiste_11.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Solitary Native"
        artiste="Alix Perez"
        image="/Images/artiste_12.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Hometown Glory"
        artiste="High Contrast"
        image="/Images/artiste_13.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Feeling Stronger"
        artiste="Muzz"
        image="/Images/artiste_14.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="We Got It"
        artiste="Metrik"
        image="/Images/artiste_1.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="Dimension"
        artiste="Saviour"
        image="/Images/artiste_15.webp"
        />

                <CarteArtiste class="mb-16"
        titrebouton="En savoir plus"
        chansonconnue="I Saw You"
        artiste="Black Sun Empire"
        image="/Images/artiste_16.webp"
        />
    </div>
    </main>
</template>

<script>
import CarteArtiste from '../components/CarteArtiste.vue'
import RectanglePresentation from '../components/RectanglePresentation.vue'
import img6 from '/public/Images/Netsky_(DJ).webp'

export default {
    data: function () {
        return {
            img6,
        }
    },
    name:"Accueil",
    components:{CarteArtiste, RectanglePresentation}

}
</script>
