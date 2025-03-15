import { nutritionInformation } from '@/data/dummy/nutrition-information';

export default function NutritionInformation() {
  return (
    <div className="w-full p-4 bg-light-blue rounded-3xl">
      <h2 className="text-xl font-semibold mb-4">Nutrition Information</h2>

      <ul className="flex flex-col">
        {nutritionInformation.map((info) => (
          <li
            key={info.name}
            className="flex justify-between text-md py-3 border-b-2"
          >
            <p className="text-black/60">{info.name}</p>
            <p className="font-semibold">{info.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
