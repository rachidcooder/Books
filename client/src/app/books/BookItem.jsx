
// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   cover: string | null;
//   price: number | null;
// }


const getData = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/books', {
      next: {
        revalidate: 3
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



async function BookItem() {
  const data = await getData();

  return (
    <div className=' grid md:grid-cols-3 gap-6  grid-cols-2 py-2'>
      {data && data.map((book, i) => {
        return (
          <div key={i} className='flex  bg-gray-50 flex-col  rounded-sm p-2  shadow-lg items-center 
            text-center'>
            <img src='https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=300'
              alt='#' className='h-[200px] w-[150px] pt-3' />
            <h1 className='text-xl font-bold text-gray-950 text-center py-2'>{book.title}</h1>
            <p className=' text-gray-700 p-4 '>{book.description}
            </p>

            <h1 className=' text-center font-bold text-gray-950 p-2'>99.98$</h1>
            <div className=' space-x-3'>
              <button className=' text-red-500 text-xl  border p-1 px-3 rounded-lg hover:bg-gray-100'>delete</button>
              <button className=' text-gray-800 text-xl  border p-1 px-3 rounded-lg hover:bg-gray-100 ' >update</button>
            </div>
          </div>
        )
      })
      }



    </div>
  )
}

export default BookItem
