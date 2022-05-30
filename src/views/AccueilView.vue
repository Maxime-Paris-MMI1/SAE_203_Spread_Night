<template>
    <main>
        <section>
            <img class="h-[783px] max-h-[783px] min-h-[783px] w-full object-cover absolute" src="../../public\Images\pexels-pixabay-358528-1.webp" alt="montagne nuit">
            <div class="relative z-40 text-center pt-[185px] text-white">
                <h1 class="font-lato font-medium text-2xl pb-8">Spread Night </h1>
                <div class="font-montserrat font-normal text-base">
                    <p>Festival de nuit dans les alpes </p>
                    <p>Du 22 octobre au 29 octobre 2023</p>
                </div>
                <div class="flex justify-center mt-7">
                    <BoutonAction class="w-60"
                    titre="Réserver des places"
                    lien="./contact"/>
                </div>
                <div class="flex justify-center mt-[245px]">
                    <button class="motion-safe:scroll-smooth">
                        <a href="#down">
                            <DropDown class="motion-safe:animate-bounce"/>
                        </a>
                    </button>
                </div>
            </div>
        </section>
        <section>
            <div >
                <div >
                    <div class="flex justify-center">
                    <p class="relative z-[49] pt-40 font-lato text-2xl font-medium text-white"> Les artistes à l’affiche </p>
                    </div>
                    <VagueAccueil class=" max-h-[1065px] min-h-[1065px] w-full object-cover relative z-40 -mt-44 lg:hidden"/>
                    <VagueAccueil class=" max-h-[675px] min-h-[675px] w-full object-cover relative z-40 -mt-44 hidden lg:flex"/>
                </div>
                
            </div>
            <div >
                <!-- <ComposantArtiste/> -->
            </div>

            <div class="flex flex-row justify-center relative z-[49] -mt-28 pb-28 ">
                <RouterLink to="/artistes" class="bg-gray-100 rounded-xl py-[6px] px-32 font-lato font-medium text-violet-900 text-2xl text-center">
                            Voir tout les artistes
                </RouterLink> 
            </div>

        </section>
    </main>

</template>

<script>

import BoutonAction from '../components/BoutonAction.vue'
import DropDown from '../components/Icons/DropDown.vue'
import VagueAccueil from '../components/Icons/VagueAccueil.vue'
import ComposantArtiste from '../components/ComposantArtiste.vue'

export default {
  name: "Accueil",
  components: {BoutonAction, DropDown, VagueAccueil, ComposantArtiste,},
}
</script>