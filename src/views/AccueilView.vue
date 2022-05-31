<template>
    <main>
        <section>
            <img class="h-[783px] max-h-[783px] min-h-[783px] w-full object-cover absolute" src="../../public/Images/pexels-pixabay-358528-1.webp" alt="montagne nuit">
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
                    <!-- <button class="motion-safe:scroll-smooth">
                        <a href="#down">
                            <DropDown class="motion-safe:animate-bounce"/>
                        </a>
                    </button> -->
                </div>
            </div>
        </section>
        <section>
            <div >
                <div >
                    <div class=" justify-center hidden lg:flex">
                    <p class="relative z-[49] pt-40 font-lato text-2xl font-medium text-white"> Les artistes à l’affiche </p>
                    </div>
                    <div class="relative z-[49] justify-around mt-14 hidden lg:flex" >
                        <ComposantArtiste
                        titre="Martin Garrix"
                        image="../../public/Images/Rectangle-2-1.webp"/>

                        <ComposantArtiste
                        titre="Netsky"
                        image="../../public/Images/Rectangle2.png.webp"/>

                        <ComposantArtiste
                        titre="Sub Focus"
                        image="../../public/Images/Rectangle-2-2.webp"/>
                    </div>

                    <div class=" justify-center  lg:hidden">
                    <p class="relative z-[49] pt-40 font-lato text-2xl font-medium text-white text-center"> Les artistes à l’affiche </p>
                    </div>
                    <div class="relative z-[49] flex flex-col gap-14 items-center mt-14 lg:hidden">
                        <ComposantArtiste
                        titre="Martin Garrix"
                        image="../../public/Images/Rectangle-2-1.webp"/>

                        <ComposantArtiste
                        titre="Netsky"
                        image="../../public/Images/Rectangle2.png.webp"/>

                        <ComposantArtiste
                        titre="Sub Focus"
                        image="../../public/Images/Rectangle-2-2.webp"/>
                    </div>


                    <VagueAccueil class=" max-h-[1065px] min-h-[1065px] w-full object-cover relative z-40 -mt-[880px] lg:hidden"/>
                    <VagueAccueil class=" max-h-[675px] min-h-[675px] w-full object-cover relative z-40 -mt-[420px] hidden lg:flex"/>
                </div>
                
            </div>


            <div class="flex flex-row justify-center relative z-[49] -mt-28 pb-28 ">
                <RouterLink to="/artistes" class="bg-gray-100 rounded-xl py-[6px] px-32 font-lato font-medium text-violet-900 text-2xl text-center hidden lg:flex">
                            Voir tout les artistes
                </RouterLink> 
                <RouterLink to="/artistes" class="bg-gray-100 rounded-xl py-[6px] px-16 font-lato font-medium text-violet-900 text-base text-center  lg:hidden">
                            Voir tout les artistes
                </RouterLink> 
            </div>
        </section>
        <section class="flex flex-row justify-center -mt-10 lg:hidden">
            <div>
                <HautTriangle/>
                <p class="w-[343px] pb-6 font-montserrat font-normal text-xs"> Bienvenue sur le site du festival Spread Night !
                    Ce festival aura lieu pendant 7 jours au coeur des montagnes des alpes pas loin de chamonix !
                </p>
                <p class="w-[343px] pb-6 font-montserrat font-normal text-xs">De nombreux artistes seront présents comme Martin Garrix ou encore Netsky. Il y a tout pour passer de bonnes soirées en compagnies de vos amis ou encore de votre famille de quoi créer des moments inoubliables.</p>
                <p class="w-[343px] font-montserrat font-normal text-xs">Alors n’attendez plus, réservez vos tickets !</p>
                <div class="flex flex-row justify-center">
                    <BasTriangle/>
                </div>
            </div>
        </section>
        <section class=" flex-row justify-center -mt-10 hidden lg:flex">
            <div>
                <HautTriangle class="w-[443px]"/>
                <p class="w-[440px] pb-6 font-montserrat font-normal text-lg"> Bienvenue sur le site du festival Spread Night !
                    Ce festival aura lieu pendant 7 jours au coeur des montagnes des alpes pas loin de chamonix !
                </p>
                <p class="w-[440px] pb-6 font-montserrat font-normal text-lg">De nombreux artistes seront présents comme Martin Garrix ou encore Netsky. Il y a tout pour passer de bonnes soirées en compagnies de vos amis ou encore de votre famille de quoi créer des moments inoubliables.</p>
                <p class="w-[440px] font-montserrat font-normal text-lg">Alors n’attendez plus, réservez vos tickets !</p>
                <div class="flex flex-row justify-center">
                    <BasTriangle class="w-[97px]"/>
                </div>
            </div>
        </section>
        <div class="flex justify-center">
            <BoutonAction class="w-80 mt-9 mb-[100px]"
            titre="En savoir plus sur le festival"
            lien="./festival"/>
        </div>
    </main>

</template>

<script>

import BoutonAction from '../components/BoutonAction.vue'
// import DropDown from '../components/Icons/DropDown.vue'
import VagueAccueil from '../components/Icons/VagueAccueil.vue'
import ComposantArtiste from '../components/ComposantArtiste.vue'
import HautTriangle from '../components/Icons/HautTriangle.vue'
import BasTriangle from '../components/Icons/BasTriangle.vue'

export default {
  name: "Accueil",
  components: {BoutonAction, VagueAccueil, ComposantArtiste, HautTriangle, BasTriangle},
}
</script>