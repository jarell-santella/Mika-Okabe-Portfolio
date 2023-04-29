import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          creator
          type
          siteUrl
          keywords
          locales
          openGraphImage
          twitterImage
          twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}
