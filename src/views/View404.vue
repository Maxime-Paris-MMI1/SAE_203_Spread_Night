<template>
    <body>
        <div
          class="
            items-center
            justify-center
            w-screen
            h-screen
            bg-gradient-to-r
            from-violet-900
            to-violet-600
            hidden lg:flex
          "
        >
          <div class="px-40 py-20 bg-white rounded-md shadow-xl ">
            <div class="flex flex-col items-center">
              <h1 class="font-bold text-blue-600 text-9xl">404</h1>

              <h6 class="mb-2 text-2xl font-bold text-center text-violet-900 md:text-3xl">
                <span class="text-violet-900">Oups!</span> Page non trouvé
              </h6>

              <p class="mb-8 text-center text-gray-500 md:text-lg">
                la page que vous cherchez n'existe pas
              </p>

              <a
                href="/"
                class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                >retour à l'accueil</a
              >
            </div>
              </div>
        </div>



        <div
          class="
            items-center
            justify-center
            bg-gradient-to-r
            from-indigo-600
            to-blue-400
            lg:hidden
          "
        >
            <div class="px-20 py-20 bg-white rounded-md shadow-xl ">
            <div class="flex flex-col items-center">
              <h1 class="font-bold text-blue-600 text-7xl">404</h1>

              <h6 class="mb-2 mt-5 text-sm font-bold text-left text-violet-900 md:text-3xl">
                <span class="text-violet-900">Oups!</span> Page non trouvée
              </h6>

              <p class="mb-8 mt-5 text-left text-gray-500 text-xs md:text-lg">
                la page que vous cherchez n'existe pas
              </p>

              <a
                href="/"
                class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                >retour à l'accueil</a
              >
            </div>
              </div>
        </div>
    </body>
</template>