import type { GatsbyConfig } from "gatsby"

let siteUrl: string

if (process.env.NODE_ENV === "development") {
  siteUrl = `https://localhost:8000`
} else if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "test"
) {
  siteUrl = `https://mikaokabe.com`
} else {
  throw new Error("Invalid NODE_ENV")
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mika's Portfolio`,
    description: `Thank you for visiting Mika Okabe's story portfolio! You can 
                  find my storyboards, sketches, personal work, and take a look
                  at my interests and art style here.`,
    author: `Mika Okabe`,
    creator: `Jarell Santella`,
    type: `website`,
    siteUrl: siteUrl,
    keywords: `artist, art, storyboard, animation, portfolio, panels, tv,
               television, commission, freelance, film, beats, illustration`,
    locales: [`en_US`, `ja_JP`],
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
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locales",
        path: `${__dirname}/locales/`,
      },
      __key: "locales",
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locales",
        languages: ["en", "jp"],
        defaultLanguage: "en",
        siteUrl: siteUrl,
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
}

export default config
