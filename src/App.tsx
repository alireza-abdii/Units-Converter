import { Header } from "./components/Header/Header";
import { UnitConverter } from "./components/UnitConverter/UnitConverter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <UnitConverter />
      </main>
    </div>
  );
}

export default App;
