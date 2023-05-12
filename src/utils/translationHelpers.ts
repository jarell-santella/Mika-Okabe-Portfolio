export interface TranslationNamespace {
  [key: string]: string | undefined
}

export const getTranslatedText = (
  text: string,
  namespace: TranslationNamespace
): string => {
  const translation = namespace[text]
  return typeof translation === "undefined" ? text : translation
}

export const getTranslation = (
  namespace: TranslationNamespace
): ((text: string) => string) => {
  return (text: string) => getTranslatedText(text, namespace)
}
