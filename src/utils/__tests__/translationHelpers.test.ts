import { getTranslatedText, getTranslation } from "../translationHelpers"
import enCommonLocales from "../../../locales/en/common.json"
import jpCommonLocales from "../../../locales/jp/common.json"

jest.mock("../../../locales/en/common.json", () => ({
  "hello world": "hello world in english",
}))
jest.mock("../../../locales/jp/common.json", () => ({
  "hello world": "hello world in japanese",
}))

describe(getTranslatedText, () => {
  it("Translates key to English", () => {
    expect(getTranslatedText("hello world", enCommonLocales)).toBe(
      "hello world in english"
    )
  })

  it("Translates key to Japanese", () => {
    expect(getTranslatedText("hello world", jpCommonLocales)).toBe(
      "hello world in japanese"
    )
  })

  it("Returns key if invalid", () => {
    expect(getTranslatedText("lorem ipsum", enCommonLocales)).toBe(
      "lorem ipsum"
    )
  })

  it("Returns key if empty", () => {
    expect(getTranslatedText("", enCommonLocales)).toBe("")
  })
})

describe(getTranslation, () => {
  it("Translates key to English", () => {
    expect(getTranslation(enCommonLocales)("hello world")).toBe(
      "hello world in english"
    )
  })

  it("Translates key to Japanese", () => {
    expect(getTranslation(jpCommonLocales)("hello world")).toBe(
      "hello world in japanese"
    )
  })

  it("Returns key if invalid", () => {
    expect(getTranslation(enCommonLocales)("lorem ipsum")).toBe("lorem ipsum")
  })

  it("Returns key if empty", () => {
    expect(getTranslation(enCommonLocales)("")).toBe("")
  })
})
