/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        'break':'700px',
      },

      height:{
        'grid1h':'400px',
        'grid2h':'260px',
        'grid4h':'240px',
        'grid3h':'300px',
        'cardpic':'78%'
        
      },

      width:{
        'navwidth':'900px',
        'grid1w':'500px',
        'grid2w':'300px',
        'grid3w':'250px',
      },

      colors:{
        olivegreen:'rgba(66,90,72,1)',
        snow:'rgb(255,250,250)',
        darkb:'#003366',
        deepgreen:'#006400',
        charcoal:'#333333',
        richp:'#800080',
        rustic:'#8B0000',
        navy:'#000080',
        slateb:'#708090',
        ocean:'#008080'
      },
     
    },
  },
  plugins: [],
}
