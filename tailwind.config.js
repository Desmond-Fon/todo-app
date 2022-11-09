/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'brightBlue': 'hsl(220, 98%, 61%)',
        'veryLightGrayLT': 'hsl(0, 0%, 98%)',
        'veryLightGrayishBlueLT': 'hsl(236, 33%, 92%)',
        'lightGrayishBlueLT': 'hsl(233, 11%, 84%)',
        'darkGrayishBlueLT': 'hsl(236, 9%, 61%)',
        'veryDarkGrayishBlueLT': 'hsl(235, 19%, 35%)',
        'veryDarkBlueDM': 'hsl(235, 21%, 11%)',
        'veryDarkSaturatedBlueDM': 'hsl(235, 24%, 19%)',
        'lightGrayishBlueDM': 'hsl(234, 39%, 85%)',
        'lightGrayishBlueHoverDM': 'hsl(236, 33%, 92%)',
        'darkGrayishBlueDm': 'hsl(234, 11%, 52%)',
        'veryDarkGrayishBlueDM': 'hsl(233, 14%, 35%)',
        'varyDarkGrayishBlueeDM': 'hsl(237, 14%, 26%)',
        'linearGradientFrom': 'hsl(192, 100%, 67%)',
        'linearGradientTo': 'hsl(280, 87%, 65%)'
      }
    },
  },
  plugins: [],
}
