import BookItem from "./BookItem";


export default async function page() {


  return (
    <main className='p-3 pt-12'>
      <h1 className=' text-3xl font-bold text-gray-950 text-center p-4' >Books Shop</h1>

      <BookItem />

      <div className=' fixed flex bottom-0 end-0 start-0 justify-end p-5'>
        <button className=' bg-blue-500  rounded text-4xl text-white p-1'>+</button>
      </div>
    </main>
  )
}

;


