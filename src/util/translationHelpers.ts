export interface TranslationNamespace {
  [key: string]: string | undefined
}

export const getTranslation = (
  translationKey: string,
  namespace: TranslationNamespace
): string | undefined => {
  return namespace[translationKey]
}

export const getTranslatedText = (
  text: string,
  language: string,
  namespace: TranslationNamespace
): string => {
  const translation = language === "jp" ? getTranslation(text, namespace) : text
  return typeof translation === "undefined" ? text : translation
}
