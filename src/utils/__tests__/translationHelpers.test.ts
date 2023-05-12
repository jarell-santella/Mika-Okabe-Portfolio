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
  it("Valid English translation key", () => {
    expect(getTranslatedText("hello world", enCommonLocales)).toBe(
      "hello world in english"
    )
  })

  it("Valid Japanese translation key", () => {
    expect(getTranslatedText("hello world", jpCommonLocales)).toBe(
      "hello world in japanese"
    )
  })

  it("Invalid translation key", () => {
    expect(getTranslatedText("lorem ipsum", enCommonLocales)).toBe(
      "lorem ipsum"
    )
  })

  it("Empty translation key", () => {
    expect(getTranslatedText("", enCommonLocales)).toBe("")
  })
})

describe(getTranslation, () => {
  it("Valid English translation key", () => {
    expect(getTranslation(enCommonLocales)("hello world")).toBe(
      "hello world in english"
    )
  })

  it("Valid Japanese translation key", () => {
    expect(getTranslation(jpCommonLocales)("hello world")).toBe(
      "hello world in japanese"
    )
  })

  it("Invalid translation key", () => {
    expect(getTranslation(enCommonLocales)("lorem ipsum")).toBe("lorem ipsum")
  })

  it("Empty translation key", () => {
    expect(getTranslation(enCommonLocales)("")).toBe("")
  })
})
