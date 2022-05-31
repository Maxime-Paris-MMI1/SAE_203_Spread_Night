module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
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
        },
        barmenu:{
          '0%':{
            display: 'none',
            transform: 'opacity(0)',
            transform: 'translateX(-50px)',

          },

          '1%':{
            display: 'block',
            opacity: 0
            
          },

          '100%':{
            display: 'block',
            transform: 'opacity(1)', 
            transform: 'translateX(0px)',

          },

          'from':{
            transform: 'rotate(0deg)',
          },
          'to' :{
            transform: 'rotate(359deg)',
          }
        }
      },

    },

  },
  plugins: [require('tw-elements/dist/plugin')],
}
