module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pri: '#bd3738',
        sec: '#151515',
        hov: '#842628',
        after: '#f3f1f2',
        side: '#f9f9f9',
        gridColor: 'rgba(255,255,255,.5)',
        btBg: 'rgba(255,255,255,.8)',
        heroBg: '#ede9ea',
        btnHover: 'rgba(189,55,57,.8)',
        gradeBorder: '#f3f1f2',
        arrow: '#a8a8a8'
      },
      rotate: {
        m45: '-45deg'
      },
      translate: {
        200: '200%'
      },
      fontSize: {
        mid: '1.75rem',
        fifty: '3.125rem'
      },
      margin: {
        two: '-3.6rem',
        three: '-7.2rem',
        four: '-10.8rem'
      },
      height: {
        half: '70vh'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
