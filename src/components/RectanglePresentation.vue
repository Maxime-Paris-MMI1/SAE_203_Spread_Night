<template>
<div class="mt-14">
    <p class=" text-2xl font-medium text-center text-white relative z-40 mt-10 font-lato">{{titre}}</p>
    <svg
      width="375"
      height="88"
      viewBox="0 0 375 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-[87.5px] relative -mt-14 z-30"
      preserveAspectRatio="none"
    >
      <rect width="375" height="87" :fill="couleur"></rect>
      <path d="M278 44.5L316 87H337L278 44.5Z" fill="white"></path>
      <path d="M76 45L38 87.5H17L76 45Z" fill="white"></path>
      <path d="M37 42.5L75 0H96L37 42.5Z" fill="white"></path>
      <path d="M337 42.5L299 0H278L337 42.5Z" fill="white"></path>
    </svg>
</div>

</template>

<script>

export default {
    props: {
        titre: String,
        couleur: String,
    },
}
</script>
