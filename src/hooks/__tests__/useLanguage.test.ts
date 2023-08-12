import * as Gatsby from "gatsby"
import { useLanguage } from "../useLanguage"

jest.spyOn(Gatsby, "useStaticQuery").mockReturnValue({
  site: { siteMetadata: { siteUrl: "https://example.com" } },
})

describe(useLanguage, () => {
  it("Returns English with English HTTP URL", () => {
    expect(useLanguage("http://example.com")).toBe("en")
  })

  it("Returns English with English HTTPS URL", () => {
    expect(useLanguage("https://example.com")).toBe("en")
  })

  it("Returns Japanese with Japanese HTTP URL", () => {
    expect(useLanguage("http://example.com/jp/")).toBe("jp")
  })

  it("Returns Japanese with Japanese HTTPS URL", () => {
    expect(useLanguage("https://example.com/jp/")).toBe("jp")
  })

  it("Returns English with undefined URL", () => {
    expect(useLanguage(undefined)).toBe("en")
  })
})
