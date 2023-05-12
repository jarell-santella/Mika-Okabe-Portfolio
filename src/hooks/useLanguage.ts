import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  siteUrl: string
}

interface SiteData {
  site: {
    siteMetadata: SiteMetadata
  }
}

export const useLanguage = (hrefCurrent: string | undefined): string => {
  const data = useStaticQuery<SiteData>(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  const { siteUrl } = data.site.siteMetadata
  const currentUrl = typeof hrefCurrent !== "undefined" ? hrefCurrent : siteUrl

  const regex = new RegExp(`^${siteUrl}/jp/.*$`, "gi")
  const httpsCurrentUrl = currentUrl.replace(/^http:\/\//, "https://")
  return regex.test(httpsCurrentUrl) ? "jp" : "en"
}
