import { useLanguage } from '@/context/LanguageContext';
import { translate } from '@/i18n/config';

export function useTranslation() {
  const { language } = useLanguage();
  
  // t function similar to i18next
  const t = (key) => translate(language, key);
  
  return { t, language };
}