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
          <div class="font-lato text-lg font-semibold -ml-32 mr-[13px] mt-8 text-white relative ">
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
                  Dimanche 23/10 
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
          <div class="font-lato text-lg font-semibold -ml-32 mr-[10px] mt-10 text-white relative ">
              Lundi 24/10
          </div>
        </RouterLink>
        
        <RouterLink :to="lien3">
          <div class="mt-[90px]">
              <div class="mt-2 ml-3">
                  <svg
                width="153"
                height="96"
                viewBox="0 0 153 96"
                :fill="couleur3"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
                  stroke="none"
                ></path>
              </svg>

              </div>

              <div class="font-lato text-lg font-semibold ml-7 -mt-[65px] text-white relative ">
                  Mardi 25/10
              </div>
          </div>
        </RouterLink>
        
        <RouterLink :to="lien4">
          <div class="-ml-12 mt-4">
              <svg
            width="153"
            height="96"
            viewBox="0 0 153 96"
            :fill="couleur4"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path
              d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
              stroke="none"
            ></path>
          </svg>
          </div>
          <div class="font-lato text-lg font-semibold -ml-[140px] mr-[10px] mt-12 text-white relative ">
              Mercredi 26/10
          </div>
        </RouterLink>
        
        <RouterLink :to="lien5">
          <div class="mt-[110px]">
              <svg
                width="153"
                height="96"
                viewBox="0 0 153 96"
                :fill="couleur5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
                  stroke="none"
                ></path>
              </svg>
              <div class="font-lato text-lg font-semibold ml-7 -mt-[65px] text-white relative ">
                  jeudi 27/10
              </div>
          </div>
        </RouterLink>


        <RouterLink :to="lien6">
          <div class="-ml-12 mt-6">
              <svg
            width="153"
            height="96"
            viewBox="0 0 153 96"
            :fill="couleur6"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
              stroke="none"
            ></path>
          </svg>
          <div class="font-lato text-lg font-semibold -mt-16 ml-3 text-white relative ">
              Vendredi 28/10
          </div>

          </div>
        </RouterLink>


        <RouterLink :to="lien7">
          <div class="mt-[114px] mr-1">
          <svg
            width="153"
            height="96"
            viewBox="0 0 153 96"
            :fill="couleur7"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
              stroke="none"
            ></path>
          </svg>
          <div class="font-lato text-lg font-semibold ml-7 -mt-[65px] text-white relative ">
              Samedi 29/10
          </div>
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

        couleur3:{
            type: String,
            default: '#0369A1'
        },

        couleur4:{
            type: String,
            default: '#0369A1'
        },

        couleur5:{
            type: String,
            default: '#0369A1'
        },

        couleur6:{
            type: String,
            default: '#0369A1'
        },

        couleur7:{
            type: String,
            default: '#0369A1'
        },

        lien:{
            type: String,
            default: '/programmation'
        },
        
        lien1:{
            type: String,
            default: '/programmation'
        },

        lien2:{
            type: String,
            default: '/programmation'
        },

        lien3:{
            type: String,
            default: '/programmation'
        },

        lien4:{
            type: String,
            default: '/programmation'
        },

        lien5:{
            type: String,
            default: '/programmation'
        },

        lien6:{
            type: String,
            default: '/programmation'
        },

        lien7:{
            type: String,
            default: '/programmation'
        },
    },
}
</script>
