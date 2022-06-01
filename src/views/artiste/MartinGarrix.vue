<template>
    <main>
        <div>
            <img class="h-[746px] max-h-[746px] min-h-[746px] w-full object-cover " src="/public/Images/medias_2019_07_martin-garrix_5d2319d26058b.webp" alt="Martin Garrix">
            <div class="font-lato text-2xl font-medium text-center text-white -mt-[160px] mb-[130px]">
                <p>Martin Garrix</p>
                
            </div>
            <div class="flex justify-center -mt-[120px] motion-safe:animate-bounce">
                <DropDown/>
            </div>
        </div>

        <div class="mt-8 ml-5">
            <p class="font-lato text-3xl font-medium">Biographie:</p>

            <p class="mt-9 mb-9">
            - Née le 14 mai 1996 à Amstelveen <br/>
            - Meilleur DJ du monde en 2016 <br/>
            - Il connait un grand succès dès l’âge de 17 ans avec la sortie d' <a href="https://youtu.be/gCYcHz2k5x0"><span class="underline">Animals</span></a> qui comporte plus d’un milliard de vue et plus de 10 millions de likes ! <br/>
            - Aujourd’hui c’est un grand DJ qui est connu par beaucoup de musiques. <br/>
            </p>

            <p class="font-lato text-3xl font-medium">Ses plus grands succcès: </p>
            
        </div>
        <div class="my-16 ml-1 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:ml-5 ">

            <a href="https://youtu.be/gCYcHz2k5x0">
            <div class="flex flex-row">
                <img class="max-h-40" src="/Images/AnyConv.com__image2.webp" alt="">
                <div class="w-[150px] flex-col pl-2 bg-[#E2E8F0]">
                    <p class="font-lato text-2xl mb-3">1</p> <br/>
                    <p class="-mt-10 font-lato font-semibold">Animals</p> <br/>
                    <p class=" font-montserrat text-black -mt-4 text-xs w-[145px]">
                    - Plus d’1 milliard de vues <br/>
                    - 4 millions de ventes de disque aux États Unis et plus de 400 000 en France
                    </p>
                </div>
            </div>
            </a>

            <a href="https://www.youtube.com/watch?v=nJSdYlAFKqA">
            <div class="flex flex-row">
                <img class="max-h-40" src="/Images/AnyConv.com__image3.webp" alt="">
                <div class="w-[150px] flex-col pl-2 bg-[#E2E8F0]">
                    <p class="font-lato text-2xl mb-3">2</p> <br/>
                    <p class="-mt-10 font-lato font-semibold">Don’t Look Down</p> <br/>
                    <p class=" font-montserrat text-black -mt-4 text-xs w-[145px]">
                    - Plus de 250 millions d’écoutes sur les plateformes de streeming  <br/>
                    - A obtenu le disque d’or dans plusieurs pays
                    </p>
                </div>
            </div>
            </a>

            <a href="https://www.youtube.com/watch?v=RnBT9uUYb1w">
            <div class="flex flex-row">
                <img class="max-h-40" src="/public/Images/AnyConv.com__image4.webp" alt="">
                <div class="w-[150px] flex-col pl-2 bg-[#E2E8F0]">
                    <p class="font-lato text-2xl mb-3">3</p> <br/>
                    <p class="-mt-10 font-lato font-semibold">In the name of love</p> <br/>
                    <p class=" font-montserrat text-black -mt-4 text-xs w-[145px]">
                    - Plus d’1 milliard de vues  <br/>
                    - Cette chanson a obtenu le disque de diamant en France
                    </p>
                </div>
            </div>
            </a>
        </div>


    </main>
</template>

<script>
import DropDown from '../../components/icons/DropDown.vue'

export default {
  name: "Accueil",
  components: {DropDown,},
}
</script>
