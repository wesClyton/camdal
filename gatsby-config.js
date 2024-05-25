module.exports = {
  siteMetadata: {
    siteUrl: 'https://camdal.com.br/',
    title: 'Camdal Locadora de Veiculos',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Camdal',
        short_name: 'Camdal',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/logo-favicon.png',
        crossOrigin: 'use-credentials',
      },
    },
  ],
};
