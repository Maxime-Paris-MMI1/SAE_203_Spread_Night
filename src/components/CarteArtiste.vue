<template>
    <div class="flex flex-col justify-center items-center w-[237px] h-[259px] relative">
        <div class="flex-grow-0 flex-shrink-0 w-[280.12px] h-[291.34px]">
            <div class="w-[300px] h-[147.75px]">
                <img
                  :src="imageartiste"
                  class="h-[156.64px] absolute object-cover rounded-tl-lg rounded-tr-lg ml-10"
                />
            </div>
            <svg
              width="240"
              height="202"
              viewBox="0 0 240 202"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[238.56px] h-[201.08px] ml-10 -mt-12 relative z-40"
              preserveAspectRatio="none">   
              <path 
              d="M157.849 19.5341L0.497543 6.20316V57.8607L157.849 19.5341Z" fill="#F1F5F9" fill-opacity="0.2">
              </path>
              <path
                d="M0.497543 20.0896V57.3052H238.499L0.497543 20.0896Z"
                fill="#E2E8F0"
                fill-opacity="0.2">
              </path>
              <path d="M0.497498 57.3053L239.062 0.0932007V201.169H0.497498V57.3053Z" fill="#CBD5E1"></path>
            </svg>
            <div
              class="flex flex-col justify-center items-center w-[238.56px] h-[81.1px] absolute left-[20px] top-[150px] gap-[9px]"
            >
                <div class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative z-[45] gap-[9px]">
                  <p class="flex-grow-0 flex-shrink-0 w-[201px] h-8 text-2xl font-semibold text-center text-black font-lato">
                    {{artiste}}
                  </p>
                  <p class="flex-grow-0 flex-shrink-0 w-[146px] h-8 text-xs text-center text-black">
                    <span class="flex-grow-0 flex-shrink-0 w-[146px] h-8 text-xs text-center text-black font-montserrat font-normal">
                        Musique la plus connue:</span>
                        <br />
                        <span class="flex-grow-0 flex-shrink-0 w-[146px] h-8 text-xs font-medium text-center text-black font-montserrat ">
                            {{chansonconnue}}
                        </span
                    >
                  </p>
                </div>
                <RouterLink :to="lien">
                    <div
                      class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[107.76px] h-[26.31px] relative  px-3 py-[7px] rounded-[8.46px] bg-violet-900 z-[45]"
                      style="box-shadow: 0px 0px 2.602142333984375px 1.9516067504882812px rgba(76,29,149,0.4);">

                      <p class="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-white">
                        {{titrebouton}}
                      </p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titrebouton: String,
        lien:{
            type: String,
            default:"/"
        },
        chansonconnue: String,
        artiste: String,
        imageartiste: String,
    },
}
</script>
