<template>
    <main>
        <div>
            <RectanglePresentation
            titre="À propos du festival"
            couleur="#4C1D95"/>
        </div>


        <section class="flex flex-row justify-center mt-14 lg:hidden">
            <div>
                <HautTriangle/>
                <p class="w-[343px] pb-6 font-montserrat font-normal text-xs"> Spread Night est un festival de musique exclusivement réservé au genre Drum and Bass.
                </p>
                <p class="w-[343px] pb-6 font-montserrat font-normal text-xs">
                    Il se déroulera durant 7 jours pendant les vacances de la Toussaint 2023. C’est un moment parfait pour ne pas avoir des températures extrêmes.
                </p>
                <p class="w-[343px] font-montserrat font-normal text-xs"> Avec Spread Night vous serez embarqué dans un autre monde puisque nous possédons des décors éblouissants qui vous permettront pendant un moment de vous échapper de la réalité et de profiter à 200% du concert. 
                </p>
                <div class="flex flex-row justify-center">
                    <BasTriangle/>
                </div>
            </div>
        </section>
        <section class=" flex-row justify-center mt-14 hidden lg:flex">
            <div>
                <HautTriangle class="w-[443px]"/>
                <p class="w-[500px] pb-6 font-montserrat font-normal text-lg"> Spread Night est un festival de musique exclusivement réservé au genre Drum and Bass. 
                </p>
                <p class="w-[500px] pb-6 font-montserrat font-normal text-lg">
                    Il se déroulera durant 7 jours pendant les vacances de la Toussaint 2023. C’est un moment parfait pour ne pas avoir des températures extrêmes.
                </p>
                <p class="w-[500px] font-montserrat font-normal text-lg">
                    Avec Spread Night vous serez embarqué dans un autre monde puisque nous possédons des décors éblouissants qui vous permettront pendant un moment de vous échapper de la réalité et de profiter à 200% du concert. 
                </p>
                <div class="flex flex-row justify-center">
                    <BasTriangle class="w-[97px]"/>
                </div>
            </div>
        </section>
        <section class="flex flex-col justify-center">
            <h2 class="font-lato text-lg font-semibold text-center mt-14 lg:hidden">Mais où se situe exactement le festival ?</h2>
            <h2 class="font-lato text-2xl font-semibold justify-center mt-14 hidden lg:flex">Mais où se situe exactement le festival ?</h2>
            <div class="flex flex-row justify-center mt-12 mx-9 lg:hidden">
                <p class="font-montserrat font-normal text-xs w-[724px]">Rien de plus simple, notre festival est situé sur le point ci-dessous. Plus précisément, il se situe à 2km de chamonix ! C’est donc bien au pied des alpes que ce festival grandiose aura lieu.</p>
            </div>
            <div class="flex-row justify-center mt-12 mx-9 hidden lg:flex">
                <p class="font-montserrat font-normal text-xl w-[724px]">Rien de plus simple, notre festival est situé sur le point ci-dessous. Plus précisément, il se situe à 2km de chamonix ! C’est donc bien au pied des alpes que ce festival grandiose aura lieu.</p>
            </div>
            <div class="flex flex-row justify-center mt-16 lg:hidden">
                <img src="../../public/Images/AnyConv.com__Group 9.webp" alt="Carte de France">
            </div>
            <div class=" hidden flex-row justify-center mt-16 lg:flex">
                <img class="w-[400px]" src="../../public/Images/AnyConv.com__Group 9.webp" alt="Carte de France">
            </div>
            <div class="justify-center flex mb-[86px]">
                <BoutonAction
                titre="Voir la map"
                lien="/contact"/>
            </div>
        </section>
        <section class="mb-24">
            <RectanglePresentation
            titre="Galerie photos"
            couleur="#4C1D95"/>

            <p class="font-montserrat font-normal text-xs mt-16 mb-8 ml-5 lg:hidden">Voici quelques photos du festival de quoi passer des moments magiques !</p>
            <p class="font-montserrat font-normal text-base mt-16 mb-8 ml-5 hidden lg:flex">Voici quelques photos du festival de quoi passer des moments magiques !</p>
            
            <div class="mb-[160px] w-full flex gap-5 snap-x overflow-x-auto lg:hidden">
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <img src="../../public/Images/AnyConv.com__image 6.webp" alt="">
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <img src="../../public/Images/AnyConv.com__image 8.webp" alt="">
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <img src="../../public/Images/AnyConv.com__image 12.webp" alt="">
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <img src="../../public/Images/image+10.png.webp" alt="">
                </div>
                <div class="snap-center shrink-0 first:pl-5 last:pr-5">
                    <img src="../../public/Images/AnyConv.com__image 11.webp" alt="">
                </div>
            </div>

            <div id="carouselExampleControls" class="carousel slide relative hidden lg:flex" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden pl-[30%]">
                    <div class="carousel-item active relative float-left w-full">
                        <img class="block w-[565px]" src="../../public/Images/AnyConv.com__image 6.webp" alt="">
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img class="block w-[565px]" src="../../public/Images/AnyConv.com__image 8.webp" alt="">
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img class="block w-[565px]" src="../../public/Images/AnyConv.com__image 12.webp" alt="">
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img class="block w-[565px]" src="../../public/Images/image+10.png.webp" alt="">
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img class="block w-[565px]" src="../../public/Images/AnyConv.com__image 11.webp" alt="">
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <ChevronLeftIcon class="text-[#0C4A6E] w-16" aria-hidden="true"/>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <ChevronRightIcon class="text-[#0C4A6E] w-16" aria-hidden="true"/>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </main>
</template>

<script>
import RectanglePresentation from '../components/RectanglePresentation.vue'
import HautTriangle from '../components/Icons/HautTriangle.vue'
import BasTriangle from '../components/Icons/BasTriangle.vue'
import BoutonAction from '../components/BoutonAction.vue'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/solid'

export default {
    name:"Accueil",
    components:{RectanglePresentation, HautTriangle, BasTriangle, BoutonAction, ChevronLeftIcon, ChevronRightIcon}

}
</script>
