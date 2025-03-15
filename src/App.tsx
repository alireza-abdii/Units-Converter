import { UnitConverter } from "./components/UnitConverter/UnitConverter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          تبدیل واحدها
        </h1>
        <UnitConverter />
      </div>
    </div>
  );
}

export default App;
