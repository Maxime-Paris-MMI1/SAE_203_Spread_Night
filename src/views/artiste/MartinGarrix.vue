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


    </main>
</template>

<script>
import DropDown from '../../components/icons/DropDown.vue'

export default {
  name: "Accueil",
  components: {DropDown,},
}
</script>
