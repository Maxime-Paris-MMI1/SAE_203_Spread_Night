<template>
<header>
  <div class="flex flex-row justify-between bg-gray-100 px-4 py-7
              lg:hidden">
    <img src="../public\Images\Logo (1).webp" alt="logo">
    <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
      <div>
        <MenuHamburger :class="{'hidden' : menuOuvert}" />
      </div>
      <span class="sr-only">Menu</span>
    </button>
  </div>
  <div id="menu" class="z-50 fixed inset-0  translate-x-full bg-[#0369A1] motion-safe:duration-1000 motion-safe:transition-transform h-full lg:hidden" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-end">
          <button class="relative z-50 mr-8 mt-12" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <CroixMenu :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}"/>
          </button>
        </div>
        <nav class="text-white font-lato font-medium text-2xl pt-20">
          <ul class="flex flex-col text-center gap-[70px]">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.05s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Programmation</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.1s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Artistes</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Le Festival</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.3s_cubic-bezier(.5,.5,.5,.5)]' : menuOuvert}" to="/">Contact</RouterLink>
          </ul>
        </nav>

        <div class="absolute bottom-[145px] w-full">
          <DecoFooter class=" max-h-[178px] w-full min-h-[0px]  object-cover relative z-0 -mb-36"/>
          <img class="h-[72px] absolute z-50 mt-9 ml-4" src="../public\Images\Logo (1).webp" alt="logo">
        </div>


        
  </div>
  <div class="hidden lg:flex justify-center gap-[25px] bg-gray-100 pb-4">
    <img class="pt-4" src="../public\Images\Logo (1).webp" alt="logo">
    <p class="pt-6 font-lato font-semibold text-lg">Programmation</p>
    <LigneMenu class="mt-9"/>
    <p class="pt-6 font-lato font-semibold text-lg">Artistes</p>
    <LigneMenu class="mt-9"/>
    <p class="pt-6 font-lato font-semibold text-lg">Le Festival</p>
    <LigneMenu class="mt-9"/>
    <p class="pt-6 font-lato font-semibold text-lg">Contact</p>
  </div>
</header>


<footer>
  <ul class="bg-[#0C4A6E] pb-8 flex flex-col text-center gap-8 pt-6 font-montserrat text-white font-normal text-xs lg:hidden">
    <li><RouterLink to="/"><p>Mentions légales</p></RouterLink></li>
    <li><RouterLink to="/"><p>Nous contacter</p></RouterLink></li>
    <li><RouterLink to="/"><p>Nous suivre sur les réseaux</p></RouterLink></li>
    <div class="flex flex-row justify-center gap-5 h-8 ">
      <img src="../public\Images\PinClipart-1.webp" alt="Logo Facebook">
      <img src="../public\Images\logo-youtube-1.webp" alt="Logo Youtube">
      <img src="../public\Images\logo-instagram-noir-1.webp" alt="logo Instagram">
    </div>
  </ul>

  <ul class="bg-[#0C4A6E] pb-9  flex-row justify-center gap-16 pt-9 font-montserrat text-white font-normal text-xs hidden lg:flex">
    <li class="mt-2"><RouterLink to="/"><p>Mentions légales</p></RouterLink></li>
    <li class="mt-2"><RouterLink to="/"><p>Nous contacter</p></RouterLink></li>
    <div class="flex flex-row justify-center gap-5 h-8 ">
      <img src="../public\Images\PinClipart-1.webp" alt="Logo Facebook">
      <img src="../public\Images\logo-youtube-1.webp" alt="Logo Youtube">
      <img src="../public\Images\logo-instagram-noir-1.webp" alt="logo Instagram">
    </div>
  </ul>
</footer>
 

  <RouterView/>
</template>
<script>
import MenuHamburger from './components/icons/MenuHamburger.vue'
import LigneMenu from './components/icons/LigneMenu.vue'
import CroixMenu from './components/icons/CroixMenu.vue'
import DecoFooter from './components/icons/DecoFooter.vue'

export default {
  name: "Accueil",
  components: {MenuHamburger, LigneMenu, CroixMenu, DecoFooter},

  data() {
    return {
      menuOuvert: false,
    };
  },

}
</script>
