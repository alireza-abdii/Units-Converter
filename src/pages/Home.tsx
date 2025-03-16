import { UnitConverter } from "../components/UnitConverter/UnitConverter";

export const Home = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        تبدیل واحدها
      </h1>
      <UnitConverter />
    </div>
  );
};
