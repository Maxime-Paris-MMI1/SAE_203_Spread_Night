<template>
<RouterLink :to="lien">
<div
  class="flex justify-center items-center relative  px-3.5 py-1.5 rounded-[13px] bg-violet-900" 
  style="box-shadow: 0px 0px 4px 3px rgba(76,29,149,0.4);"
>
  <p class="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-white font-lato">
    {{titre}}
  </p>
</div>
</Routerlink>
</template>

<script>


export default {
    props: {
        titre: String,
        lien:{
            type: String,
            default:"/"
        }
    },
}
</script>
