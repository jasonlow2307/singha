import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import cn from "../locales/cn.json";
import en from "../locales/en.json";

const resources = {
  en: { translation: en },
  cn: { translation: cn },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "cn", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
