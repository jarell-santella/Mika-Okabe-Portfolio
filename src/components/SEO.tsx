import * as React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useLanguage } from "../hooks/useLanguage"
import { useTranslation } from "../hooks/useTranslation"
import jpCommonLocales from "../../locales/jp/common.json"

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  keywords?: string
  children?: React.ReactNode
}

export const SEO = ({
  title,
  description,
  pathname,
  keywords,
  children,
}: SEOProps) => {
  const language = useLanguage()
  const t = useTranslation(jpCommonLocales)

  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    creator,
    type,
    siteUrl,
    keywords: defaultKeywords,
    locales,
    openGraphImage,
    twitterImage,
    twitterUsername,
  } = useSiteMetadata()

  const defaultTransKeywords = t(defaultKeywords.replace(/\s+/g, ""))

  const seo = {
    title: t(title || defaultTitle),
    description: t((description || defaultDescription).replace(/\s+/g, " ")),
    author: t(author),
    creator: creator,
    type,
    url: `${siteUrl}${pathname || ``}`,
    keywords: keywords
      ? `${defaultTransKeywords},${keywords}`
      : defaultTransKeywords,
    locale: language === "en" ? locales[0] : locales[1],
    localeAlternative: language === "en" ? locales[1] : locales[0],
    openGraphImage: `${siteUrl}${openGraphImage}`,
    twitterImage: `${siteUrl}${twitterImage}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="creator" content={seo.creator} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.openGraphImage} />
      <meta
        property="og:image:alt"
        content="Lorem ipsum dolor sit amet, consectetur tincidunt."
      />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:locale:alternative" content={seo.localeAlternative} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:image" content={seo.twitterImage} />
      <meta
        name="twitter:image:alt"
        content="Lorem ipsum dolor sit amet, consectetur tincidunt."
      />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  )
}
