import * as React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  keywords?: string
  children?: React.ReactNode
}

export const SEO = ({ title, description, pathname, keywords, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    creator,
    type,
    siteUrl,
    keywords: defaultKeywords,
    openGraphImage,
    twitterImage,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: (description || defaultDescription).replace(/\s+/g, " "),
    author: author,
    creator: creator,
    type,
    url: `${siteUrl}${pathname || ``}`,
    keywords: (keywords
      ? `${defaultKeywords}, ${keywords}`
      : defaultKeywords
    ).replace(/\s+/g, " "),
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
