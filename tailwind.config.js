module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        "fontFamily": {
         "lato": "Lato",
         "montserrat": "Montserrat"
        },
      

       keyframes: {
        BackInRight: {
          '0%, 100%': { transform: 'translate(100px)'},
          '100%': { transform: 'translate(0px)'},
        },
        Depart:{
          '0%':{
            transform: 'translateX(1000px)'
          },
          '100%':{
            transform: 'translateX(0px)'
          }
        }
      },

    },

  },
  plugins: [],
}
