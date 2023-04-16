import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mika's Portfolio`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget diam id sapien interdum posuere. Maecenas
                  vitae sem sed nulla malesuada aliquet in quis ligula. Sed
                  commodo ornare magna libero.`,
    author: `Mika Okabe`,
    creator: `Jarell Santella`,
    type: `website`,
    siteUrl: `https://mikaokabe.com`,
    keywords: `artist, art, storyboard, animation, portfolio, panels, tv,
               television, commission, freelance, film, beats, illustration`,
    openGraphImage: `/images/1200x630placeholder.png`,
    twitterImage: `/images/1200x600placeholder.png`,
    twitterUsername: `@wishterias`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon1000.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}

export default config
