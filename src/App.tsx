import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { UnitConverter } from "./components/UnitConverter/UnitConverter";
import { History } from "./pages/History";
import { useThemeStore } from "./store/themeStore";
import { useLanguageStore } from "./store/languageStore";
import { useEffect } from "react";

function App() {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          language === "fa" ? "font-vazir" : "font-sans"
        }`}
        dir={language === "fa" ? "rtl" : "ltr"}
      >
        <Header />
        <div dir={language === "fa" ? "rtl" : "ltr"}>
          <Routes>
            <Route path="/" element={<UnitConverter />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
