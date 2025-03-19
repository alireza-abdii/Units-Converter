import { Header } from "./components/Header/Header";
import { UnitConverter } from "./components/UnitConverter/UnitConverter";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <UnitConverter />
      </main>
    </div>
  );
}

export default App;
