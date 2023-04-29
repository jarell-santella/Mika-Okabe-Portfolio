import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  author: string
  creator: string
  type: string
  siteUrl: string
  keywords: string
  locales: string[]
  openGraphImage: string
  twitterImage: string
  twitterUsername: string
}

interface SiteData {
  site: {
    siteMetadata: SiteMetadata
  }
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteData>(graphql`
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
