export type StoreType = {
  name: string
  location: string
  storeStock: number
  comment: string
  imagePath: string
}

export default function GetStoreData(): StoreType[] {
  
  const storeData: StoreType[] = [
      {
        name: "Store 1",
        location: "Location 1",
        storeStock: 2,
        comment: "This is store 1",
        imagePath: "/path/to/store1/image",
      },
      {
        name: "Store 2",
        location: "Location 2",
        storeStock: 0,
        comment: "This is store 2",
        imagePath: "/path/to/store2/image",
      },
      {
        name: "Store 3",
        location: "Location 3",
        storeStock: 0,
        comment: "This is store 3",
        imagePath: "/path/to/store3/image",
      },
      {
        name: "Store 4",
        location: "Location 4",
        storeStock: 1,
        comment: "This is store 4",
        imagePath: "/path/to/store4/image",
      },
      {
        name: "Store 5",
        location: "Location 5",
        storeStock: 0,
        comment: "This is store 5",
        imagePath: "/path/to/store5/image",
      },
      {
        name: "Store 6",
        location: "Location 6",
        storeStock: 1,
        comment: "This is store 6",
        imagePath: "/path/to/store6/image",
      },
      {
        name: "Store 7",
        location: "Location 7",
        storeStock: 2,
        comment: "This is store 7",
        imagePath: "/path/to/store7/image",
      },
      {
        name: "Store 8",
        location: "Location 8",
        storeStock: 0,
        comment: "This is store 8",
        imagePath: "/path/to/store8/image",
      },
      {
        name: "Store 9",
        location: "Location 9",
        storeStock: 0,
        comment: "This is store 9",
        imagePath: "/path/to/store9/image",
      },
      {
        name: "Store 10",
        location: "Location 10",
        storeStock: 1,
        comment: "This is store 10",
        imagePath: "/path/to/store10/image",
      },
  ];
  return storeData;
}