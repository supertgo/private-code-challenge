export default {
  grid: {
    container: '13.5rem',
    gutter: '3.2rem'
  },
  border: {
    small: '0.4rem',
    medium: '1.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '4rem'
    }
  },
  colors: {
    primary: '#252160',
    secundary: '#3AFFE5',
    white: '#FFFFFF',
    black: '#0C0C0C',
    lightGray: '#F8F8F8',
    gray: '#7B7B7B',
    blue: '#32B5FF',
    orange: '#FF9900',
    gradient: 'linear-gradient(145.09deg, #26E9CF 11.81%, #25CDE1 95.89%)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;
