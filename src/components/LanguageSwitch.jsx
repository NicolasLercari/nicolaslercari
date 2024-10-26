import { useLanguage } from '@/context/LanguageContext';
import { languages } from '@/i18n/config';

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
      <button
          onClick={toggleLanguage}
          className="flex items-center space-x-1 px-3 py-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
      >
        <span className="text-sm font-medium">{languages[language]}</span>
      </button>
  );
}