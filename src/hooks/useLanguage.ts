import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  siteUrl: string
}

interface SiteData {
  site: {
    siteMetadata: SiteMetadata
  }
}

export const useLanguage = (): string => {
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
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : siteUrl

  const regex = new RegExp(`^${siteUrl}/jp/.*$`, "gi")
  const httpsCurrentUrl = currentUrl.replace(/^http:\/\//, "https://")
  return regex.test(httpsCurrentUrl) ? "jp" : "en"
}
