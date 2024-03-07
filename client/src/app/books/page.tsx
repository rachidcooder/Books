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
    <main className='px-3 scrollbar-thumb-orange-800 scrollbar-thin 
          scrollbar-track-slate-50 h-screen overflow-y-scroll '>
      <div className='max-h-[500px] relative'>
        <div className='h-full w-full absolute hidden  sm:flex flex-col max-h-[500px] md:p-12'>
          <h1 className=' text-gray-200 text-center text-4xl font-bold lg:text-7xl sm:text-5xl md:m-5'
          >Welecom to BookShop</h1>
          <h1 className="text-xl font-medium lg:text-2xl text-center text-orange-950">
            We're here to help you find the perfect book, regardless of your reading taste</h1>
        </div>
        <img className='w-full max-h-[400px] object-cover rounded-md'
          src="https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='/' />

      </div>
      <BookItem data={data} />



    </main>
  )
}

;


