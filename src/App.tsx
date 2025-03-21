import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { UnitConverter } from "./components/UnitConverter/UnitConverter";
import { History } from "./pages/History";
import { useThemeStore } from "./store/themeStore";
import { useLanguageStore } from "./store/languageStore";

function App() {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();

  return (
    <Router>
      <div
        className={`min-h-screen ${theme === "dark" ? "dark" : ""} ${
          language === "fa" ? "font-vazir" : "font-sans"
        }`}
        dir={language === "fa" ? "rtl" : "ltr"}
      >
        <Header />
        <Routes>
          <Route path="/" element={<UnitConverter />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
