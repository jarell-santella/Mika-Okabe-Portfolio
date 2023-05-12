import * as Gatsby from "gatsby"
import { useLanguage } from "../useLanguage"

jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
  site: { siteMetadata: { siteUrl: "https://example.com" } },
})

describe(useLanguage, () => {
  it("English HTTP URL", () => {
    expect(useLanguage("http://example.com")).toBe("en")
  })

  it("English HTTPS URL", () => {
    expect(useLanguage("https://example.com")).toBe("en")
  })

  it("Japanese HTTP URL", () => {
    expect(useLanguage("http://example.com/jp/")).toBe("jp")
  })

  it("Japanese HTTPS URL", () => {
    expect(useLanguage("https://example.com/jp/")).toBe("jp")
  })

  it("undefined URL", () => {
    expect(useLanguage(undefined)).toBe("en")
  })
})
