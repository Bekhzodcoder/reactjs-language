import { useTranslation } from "react-i18next";
import "./App.css";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";

const language = [
  {
    code: "fr",
    name: "fransuzcha",
    country_code: "fr",
  },
  {
    code: "en",
    name: "english",
    country_code: "gb",
  },
];

function App() {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title=t('app_title')
  }, [currentLanguage,t]);

  return (
    <>
      <ul>
        <li>{t('language')}</li>
        {language.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button
              onClick={() => i18next.changeLanguage(code)}
              disabled={code === currentLanguageCode}>
              {name}
            </button>
          </li>
        ))}
      </ul>
      <div>{t("welcome_to_react")}</div>
    </>
  );
}

export default App;
