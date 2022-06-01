<template>
    <main>
        <div>
            <img class="h-[641px] max-h-[641px] min-h-[641px] w-full object-cover " src="/public/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp" alt="Martin Garrix">
            <div class="font-lato text-2xl font-medium text-center text-white -mt-20 mb-20">
                <p>Martin</p>
                <p>Garrix</p>
            </div>
        </div>
        <div class="w-full flex gap-5 snap-x overflow-x-auto lg:hidden">
            <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                <ComposantConcert
                couleur="#4C1D95"/>
            </div>
        </div>

        <div class="w-full gap-5 snap-x overflow-x-auto hidden lg:flex justify-center">
            <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                <ComposantConcert
                couleur="#4C1D95"/>
            </div>
        </div>
        <div>
            <RectanglePresentation
            titre="Heure et nom de la scène"
            couleur="#4C1D95"/>

            <div class="mt-12 justify-end flex mb-4">
                <BarInformations/>
            </div>

            <div class="font-lato font-semibold text-lg text-center">
                <p>22h30 - 00h00</p>
                <p>Scène numéro 1; la scène principale </p>
            </div>

            <div class="mt-4 justify-start flex mb-20">
                <BarInformations/>
            </div>

            <p class="font-lato font-medium text-2xl text-center mb-12">Quelques photos de la scène</p>

            <div class="w-full gap-20 snap-x overflow-x-auto hidden lg:flex flex-row justify-center mb-24">
                <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                    <img src="/Images/AnyConv.com__image6.webp" alt="Photo concert">
                </div>
                <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                    <img src="/Images/pexels-wendy-wei-15404062.webp" alt="Photo concert">
                </div>
            </div>

            <div class="w-full flex flex-row gap-10 snap-x overflow-x-auto lg:hidden mb-24">
                <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                    <img src="/Images/AnyConv.com__image6.webp" alt="Photo concert">
                </div>
                <div class="snap-start shrink-0 first:pl-5 last:pr-5">
                    <img src="/Images/pexels-wendy-wei-1540406 2.webp" alt="Photo concert">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ComposantConcert from '../../components/ComposantConcert.vue'
import RectanglePresentation from '../../components/RectanglePresentation.vue'
import BarInformations from '../../components/icons/BarInformations.vue'

export default {
  name: "Accueil",
  components: {ComposantConcert, RectanglePresentation, BarInformations},
}
</script>
