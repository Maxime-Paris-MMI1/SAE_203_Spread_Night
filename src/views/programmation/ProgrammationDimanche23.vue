<template>
    <main>
        <section>
            <RectanglePresentation
            titre="Programmation"
            couleur="#4C1D95"/>
            
                <div class="w-full flex gap-5 snap-x overflow-x-auto lg:hidden">
                    <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                        <ComposantDate class="shrink-0"
                        couleur1="#4C1D95"
                        lien="/programmation"
                        lien2="/programmation24"
                        lien3="/programmation25"
                        lien4="/programmation26"
                        lien5="/programmation27"
                        lien6="/programmation28"
                        lien7="/programmation29"/>
                    </div>
                </div>

                <div class="hidden lg:flex justify-center">
                    <ComposantDate class="shrink-0"
                    couleur1="#4C1D95"
                    lien="/programmation"
                    lien2="/programmation24"
                    lien3="/programmation25"
                    lien4="/programmation26"
                    lien5="/programmation27"
                    lien6="/programmation28"
                    lien7="/programmation29"/>
                </div>


            <RectanglePresentation
            titre="Dimanche 23/10"
            couleur="#4C1D95"/>
        </section>
        <section>
            <h2 class="font-lato font-medium text-2xl text-center mt-8">Les concerts</h2>

            <div class="mx-auto w-11/12 justify-center items-center gap-20 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] ">
                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Sub Focus"
                image="/Images/benjamin.webp"/>

                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Black Sun Empire"
                image="/Images/artiste_16.webp"/>

                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Camo & Krooked"
                image="/Images/artiste_9.webp"/>

                <CarteConcert
                titrebouton="Voir les horaires et le lieu"
                artiste="Netsky"
                image="/Images/Netsky_(DJ).webp"/>
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