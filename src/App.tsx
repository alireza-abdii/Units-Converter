import React from "react";
import { Header } from "./components/Header/Header";
import { UnitConverter } from "./components/UnitConverter/UnitConverter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <UnitConverter />
      </main>
    </div>
  );
}

export default App;
