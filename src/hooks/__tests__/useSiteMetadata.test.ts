import * as Gatsby from "gatsby"
import { useSiteMetadata } from "../useSiteMetadata"

const metadata = {
  title: "title",
  description: "description",
  author: "author",
  creator: "creator",
  type: "type",
  siteUrl: "siteUrl",
  keywords: "keywords",
  locales: ["locale 1", "locale 2"],
  openGraphImage: "openGraphImage",
  twitterImage: "twitterImage",
  twitterUsername: "twitterUsername",
}

const returnValue = {
  site: {
    siteMetadata: metadata,
  },
}

jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue(returnValue)

describe(useSiteMetadata, () => {
  it("Returns site metadata", () => {
    expect(useSiteMetadata()).toBe(metadata)
  })
})
