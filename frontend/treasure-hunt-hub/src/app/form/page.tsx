import { FormEvent } from 'react'
import GetStoreData from '@/testData/store';

type FormWrapProps = {
  label: string;
  labelText: string;
  required?: boolean;
  children?: React.ReactNode;
};

function FormWrap({label, labelText, required = false, children}: FormWrapProps) {
  return (
    <div className="w-full my-2 mx-auto place-content-center">
      <label className="label pr-4">
        <span className="label-text">{labelText}</span>
      </label >
      {children}
      <span className='text-red-500 text-xs mt-2 pl-4'>{required ? "This field is required" : ''}</span>
  </div >
  )
}

type FormTextProps = {
  placeholder: string;
};

function FormText({ placeholder }: FormTextProps) {
  return (
    <input type="text" placeholder={placeholder} className="border-2 border-solid border-red-500 my-2" />
  )
}

type FormSelectProps = {
  label: string;
  first: string;
  content: any[];
  cprop: string;
}
function FormSelect({ label, first, content, cprop}: FormSelectProps) {
  return (
    <select name={label} id={`${label}-select`}>
      <option value="">{first}</option>
      {content.map((data, index) => (
        <option key={index} value={index}>{data[cprop]}</option>
      ))}
    </select>
  )
}


export default function Home() {
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })
 
  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }
    let storeData = GetStoreData();
    return (
      <main>
        <h1 className='w-fit mx-auto text-4xl'>form page</h1>
        {/* <form  onSubmit={onSubmit}> */}
        <div className='py-4 border-4 bg-blue-300 mx-auto max-w-screen-md'>
          <form className='flex flex-col items-center'>
            <div></div>
            <FormWrap label='store' labelText='店舗名'>
              <FormSelect label='store' first='店舗名を選択' content={storeData} cprop='name' />
            </FormWrap>
            <FormWrap label='item' labelText='商品情報' required={true}>
              <FormText placeholder='商品情報を入力'></FormText>
            </FormWrap>
            <FormWrap label='stock' labelText='在庫情報'>
              <FormSelect label='stock' first='在庫情報を選択' content={storeData} cprop='storeStock' />
            </FormWrap>
            <FormWrap label='comment' labelText='コメント'>
              <FormText placeholder='コメント入力'></FormText>
            </FormWrap>
            <input type="file" name="photo" placeholder='写真を選択' className='my-2'/>
            <button type="submit" className='border-4 w-min my-2 bg-gray-400 text-yellow-500 py-1 px-6'>Submit</button>
          </form>
        </div>
      </main>
    );
  }
