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
          openGraphImage
          twitterImage
          twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}
