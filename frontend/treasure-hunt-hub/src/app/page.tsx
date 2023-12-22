import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className='font-bold'>This is Treasure Hunt Hub root page</h1>
      <div className='flex flex-col items-center py-4'>
        <a href="/stores" className='hover:opacity-50'>to stores</a>
        <a href="/form" className='hover:opacity-50'>to form</a>
      </div>
    </main>
  )
}
