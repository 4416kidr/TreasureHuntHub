import Store from "@/components/store";
import GetStoreData from '@/testData/store';

export default function Home() {
  const storeData = GetStoreData();
  return (
    <main>
      <h1 className="w-fit mx-auto text-4xl">stores page</h1>
      <ul className="flex flex-wrap pl-8">
        {Object.values(storeData).map((store) => (
          <li key={store.name} className="w-60 m-2 border border-red-500">
            <Store {...store}/>
          </li>
        ))}
      </ul>
    </main>
  );
}
