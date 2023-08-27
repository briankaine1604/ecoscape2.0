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

      height:{
        'navhead':'1rem'
      },

      width:{
        'navwidth':'900px'
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
