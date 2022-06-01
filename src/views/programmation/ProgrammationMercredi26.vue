<template>
    <main>
        <section>
            <RectanglePresentation
            titre="Programmation"
            couleur="#4C1D95"/>
            
                <div class="w-full flex gap-5 snap-x overflow-x-auto lg:hidden">
                    <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                        <ComposantDate class="shrink-0"
                        couleur4="#4C1D95"
                        lien="/programmation"
                        lien1="/programmation23"
                        lien2="/programmation24"
                        lien3="/programmation25"
                        lien5="/programmation27"
                        lien6="/programmation28"
                        lien7="/programmation29"/>
                    </div>
                </div>

                <div class="hidden lg:flex justify-center">
                    <ComposantDate class="shrink-0"
                    couleur4="#4C1D95"
                    lien="/programmation"
                    lien1="/programmation23"
                    lien2="/programmation24"
                    lien3="/programmation25"
                    lien5="/programmation27"
                    lien6="/programmation28"
                    lien7="/programmation29"/>
                </div>


            <RectanglePresentation
            titre="Mercredi 26/10"
            couleur="#4C1D95"/>
        </section>
        <section>
            <h2 class="font-lato font-medium text-2xl text-center mt-8">Les concerts</h2>

            <div class="mx-auto w-11/12 justify-center items-center gap-20 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] ">
                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Martin Garrix"
                image="/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp"
                lien="/concertmartingarrix"/>
                <!-- obligation d'avoir cet artiste au dessus -->
                
                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Aphrodite"
                image="/Images/image_card_artiste_vert.png"/>

                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Andy C"
                image="/Images/pexels-binyamin-mellish-1063991.png"/>

                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Noisia"
                image="/Images/artiste_2.webp"/>
            </div>
        </section>
    </main>
</template>

<script>
import RectanglePresentation from '../../components/RectanglePresentation.vue'
import ComposantDate from '../../components/ComposantDate.vue'
import CarteConcert from '../../components/CarteConcert.vue'


export default {
    name:"Accueil",
    components:{RectanglePresentation, ComposantDate, CarteConcert}

}
</script>