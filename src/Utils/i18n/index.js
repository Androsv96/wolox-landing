import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
// import backend from "i18next-xhr-backend";
import translationES from "../../locale/es/translation.json";
import translationEN from "../../locale/en/translation.json";

i18n
    .use(detector)
    // .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            es: {
                translation: translationES
            }
        },
        fallbackLng: "en",
        lng: "en",
        debug: false,
        keySeparator: false, // we do not use keys in form messages.welcome


        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            useSuspense: true
        }
    });

export default i18n;