import BookItem from "./BookItem";
import BackImg from "../data/backimg.png"
import Image, { StaticImageData } from 'next/image';

// Assuming you have an image object of type StaticImageData
const image: StaticImageData = BackImg; // Get the image somehow

// Get the URL from the image object
const imageUrl: string = image.src;

const getData = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/books', {
      next: {
        revalidate: 5
      }
    });
    const resData = await res.json();
    const booksData = resData.data;
    return booksData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


export default async function page() {
  const data = await getData();

  return (
    <main className='px-3'>
      <div className='max-h-[500px] relative'>
        <div className='h-full w-full absolute justify-center flex flex-col max-h-[500px] px-4'>
          <h1 className=' text-orange-900 text-4xl font-bold lg:text-7xl sm:text-5xl'> Books  <span className='text-orange-400'> Shop</span></h1>
        </div>
        <img className='w-full max-h-[500px] object-cover rounded-md'
          src={imageUrl} alt='/' />

      </div>
      <BookItem data={data} />

      {/* <button className=' fixed  bottom-0 end-0 m-5  bg-orange-900  hover:bg-orange-800
          rounded text-4xl text-white p-1'>+</button> */}

    </main>
  )
}

;


