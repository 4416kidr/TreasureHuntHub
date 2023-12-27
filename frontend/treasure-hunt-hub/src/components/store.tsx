import type { StoreType } from '@/testData/store'
  
const stockTranslate = ( storeStock: number ) => {
  switch (storeStock) {
    case 0:
      return 'nothing';
    case 1:
      return 'few';
    case 2:
      return 'full'
    default:
      return 
  }
};

const Store = (storeData: StoreType) => (
  <div className="text-lime-500 place-content-center pl-2 py-2">
    <p>{storeData.name}</p>
    <p>{storeData.location}</p>
    <p>在庫: {stockTranslate(storeData.storeStock)}</p>
    <p>{storeData.comment}</p>
    <p>{storeData.imagePath}</p>
  </div>
);
  
export default Store;
  