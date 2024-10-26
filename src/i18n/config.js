import en from './translations/en';
import es from './translations/es';

export const defaultLanguage = 'en';

export const languages = {
  en: 'En',
  es: 'Es'
};

export const translations = {
  en,
  es
};

// Helper function similar to i18next's t function
export const translate = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];

  for (const k of keys) {
    if (!value?.[k]) return key;
    value = value[k];
  }

  return value;
};