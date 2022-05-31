<template>
<div class="flex-grow-0 flex-shrink-0 w-[280px] h-[174.36px]">
  <div class="w-[280px] h-[174px] rounded-tl-[50px] rounded-br-[50px] bg-gray-100 absolute z-30"></div>
  <img :src="image" alt="Image artiste"
    class="w-[107px] h-[174px] object-none relative z-40"/>

    <div class="flex flex-col justify-start items-center w-[155px] ml-28 -mt-36 relative z-40 gap-10">
      <p class="flex-grow-0 flex-shrink-0 w-[280px] h-[33.65px] text-2xl font-medium text-center text-black font-lato">

        {{titre}}

      </p>
      <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-1.5 rounded-[13px] bg-violet-900"
        style="box-shadow: 0px 0px 2.8px 2.1px rgba(76,29,149,0.4);">

        <RouterLink class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-white motion-safe:animate-pulse" :to="lien">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-white">
            Plus d’infos
          </p>
        </RouterLink>
      
      </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        titre: String,
        lien:{
            type: String,
            default:"/"
        },
        image: String,
    },
}
</script>
