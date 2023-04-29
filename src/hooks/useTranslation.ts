import { useLanguage } from "./useLanguage"
import {
  TranslationNamespace,
  getTranslatedText,
} from "../util/translationHelpers"

export const useTranslation = (
  namespace: TranslationNamespace
): ((text: string) => string) => {
  const language = useLanguage()

  return (text: string) => getTranslatedText(text, language, namespace)
}
