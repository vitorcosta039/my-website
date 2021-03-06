module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#5480f2',
      'primary-dark': '#2961ef',
      'primary-light': '#7ea0f8',
      'black': '#545353',
      'black-2': '#424242',
      'gray-100': '#f9f9f9',
      'gray-200': '#f0f0f0',
      'gray-300': '#e5e5e5',
      'gray-400': '#d3d3d3',
      'gray-500': '#b3b3b3',
      'gray-600': '#777777',
      'white': '#ffffff',
      'white-2': '#f4f4f4',
      'additional-1': '#b658ff',
      'success': '#2FCB5A',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '2rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  }
};
