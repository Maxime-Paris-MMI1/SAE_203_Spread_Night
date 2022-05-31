<template>
    <div class="flex-row flex gap-0 mt-10 mb-32">
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
        <div class="font-lato text-lg font-semibold -ml-32 mr-[13px] mt-8 text-white relative z-50">
            Samedi 22/10 
        </div>

        
        <div class="mt-[90px]">
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
            <div class="font-lato text-lg font-semibold  mr-[10px] -mt-[60px] ml-3 text-white relative z-50">
                Dimanche 23/10 
            </div>
        </div>
        
        <div class="-ml-12 mt-2">
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
        </div>
        <div class="font-lato text-lg font-semibold -ml-32 mr-[10px] mt-10 text-white relative z-50">
            Lundi 24/10
        </div>


        
        
        
        <div class="mt-[90px]">
            <div class="mt-2 ml-3">
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

            </div>
            
            <div class="font-lato text-lg font-semibold ml-7 -mt-[65px] text-white relative z-50">
                Mardi 25/10
            </div>
        </div>
        
        
        <div class="-ml-12 mt-4">
            <svg
          width="153"
          height="96"
          viewBox="0 0 153 96"
          :fill="couleur"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path
            d="M47 95H152.5V48.5C145.7 11.3 118.333 1.33333 105.5 1H1V50.5C4.6 82.5 33.1667 93.5 47 95Z"
            stroke="none"
          ></path>
        </svg>
        </div>
        <div class="font-lato text-lg font-semibold -ml-[140px] mr-[10px] mt-12 text-white relative z-50">
            Mercredi 26/10
        </div>
        
        
        
        <div class="mt-[110px]">
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
            <div class="font-lato text-lg font-semibold ml-7 -mt-[65px] text-white relative z-50">
                jeudi 27/10
            </div>
        </div>
        
        <div class="-ml-12 mt-6">
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
        <div class="font-lato text-lg font-semibold -mt-16 ml-3 text-white relative z-50">
            Vendredi 28/10
        </div>

        </div>

        <div class="mt-[114px] mr-1">
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
        <div class="font-lato text-lg font-semibold ml-7 -mt-[65px] text-white relative z-50">
            Samedi 29/10
        </div>
        </div>
        
    </div>
</template>


<script>

export default {
    props: {
        couleur:{
            type: String,
            default: '#0369A1'
        },
        
    },
}
</script>
