<template>
    <div class="flex-row flex gap-0 mt-10 mb-14">
        <RouterLink :to="lien">
              <svg
            width="153"
            height="96"
            viewBox="0 0 153 96"
            :fill="couleur"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
              stroke="none"
            ></path>
          </svg>
          <div class="font-lato text-lg font-semibold -mt-[60px] ml-5 text-white relative ">
              Samedi 22/10 
          </div>
        </RouterLink>

        <RouterLink :to="lien1">
          <div class="mt-[90px]">
              <svg
                width="153"
                height="96"
                viewBox="0 0 153 96"
                :fill="couleur1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
                  stroke="none"
                ></path>
              </svg>
              <div class="font-lato text-lg font-semibold  mr-[10px] -mt-[60px] ml-3 text-white relative ">
                  Mercredi 26/10 
              </div>
          </div>
        </RouterLink>
        

        <RouterLink :to="lien2">
          <div class="-ml-12 mt-2">
                  <svg
            width="153"
            height="96"
            viewBox="0 0 153 96"
            :fill="couleur2"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
              stroke="none"
            ></path>
          </svg>
          </div>
          <div class="font-lato text-lg font-semibold -mt-[60px] -ml-8 text-white relative ">
              Vendredi 28/10
          </div>
        </RouterLink>
    </div>
</template>

<script>

export default {
    props: {
        couleur:{
            type: String,
            default: '#0369A1'
        },

        couleur1:{
            type: String,
            default: '#0369A1'
        },

        couleur2:{
            type: String,
            default: '#0369A1'
        },

        lien:{
            type: String,
            default: '/concertmartingarrix'
        },
        
        lien1:{
            type: String,
            default: '/concertmartingarrix'
        },

        lien2:{
            type: String,
            default: '/concertmartingarrix'
        },
    },
}
</script>