import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { darkTheme, lightTheme } from "./utils/theme/theme";
import { GlobalStyles } from "./utils/theme/global";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
import { Button } from "react-bootstrap";
function App() {
  // i18n
  //   .use(initReactI18next) // passes i18n down to react-i18next
  //   .init({
  //     // the translations
  //     // (tip move them in a JSON file and import them,
  //     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  //     resources: {
  //       en: {
  //         translation: {
  //           Login: "Login",
  //         },
  //       },
  //       br: {
  //         translation: {
  //           Login: "Entrar",
  //         },
  //       },
  //     },
  //     lng: "en", // if you're using a language detector, do not define the lng option
  //     fallbackLng: "en",

  //     interpolation: {
  //       escapeValue: false,
  //     },
  //   });

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      {/* <Button onClick={toggleTheme}>Trocar tema</Button> */}
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
