"use client"
import { useEffect, useState } from "react"
import ButtDel_Upd from "./buttonDelet_Update"
import { CiSearch } from "react-icons/ci";

// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   cover: string | null;
//   price: number | null;
// }


function BookItem({ data }) {
  const [books, setBooks] = useState(data);
  const [ctg, setCatregory] = useState("all");
  const [ishighPrice, setisHighPrice] = useState(0);

  useEffect(() => {
    if (ctg != "all")
      setBooks(data.filter((book, i) => { return book.category === ctg }));
    else setBooks(data);
  }, [ctg]);

  //
  useEffect(() => {
    if (ishighPrice !== 0) {
      const sortedBooks = [...books];
      if (ishighPrice === 1) {
        sortedBooks.sort((a, b) => b.price - a.price);
      } else {
        sortedBooks.sort((a, b) => a.price - b.price);
      }
      setBooks(sortedBooks);
    }
  }, [ishighPrice]);






  return (
    <div className="p-2">
      <h1 className=" text-center text-orange-900 text-2xl p-2 font-bold">Top Books</h1>
      <div className=" flex  w-full justify-end ">
        <div className="flex border rounded-md items-center px-3">
          <CiSearch size={20} className=" font-bold" />
          <input placeholder="search for book "
            className=" outline-none p-1 rounded-lg hover:bg-gray-50" />
        </div>

      </div>
      <div className=" flex justify-between p-3">
        <div>
          <h1 className=" text-orange-900 text-xl font-bold p-1" >Categories</h1>
          <div className=" md:flex space-x-2">
            <h1 className=" p-1 px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("all")}
            >All</h1>
            <h1 className=" p-1 px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("science")}
            >Science</h1>
            <h1 className=" p-1 px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("history")}
            >History</h1>
            <h1 className=" p-1 px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("religion")}
            >Religion</h1>
            <h1 className=" p-1 px-2  border rounded-xl cursor-pointer
            hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("philosophy")}
            >Philosophy</h1>
          </div>
        </div>

        <div>
          <h1 className=" text-orange-900 text-xl font-bold p-1" >Filter Price</h1>
          <div className=" md:flex space-x-2">
            <h1 className=" p-1 px-2  border rounded-xl hover:bg-orange-700 cursor-pointer 
              hover:text-gray-100"
              onClick={() => setisHighPrice(1)}
            >Highest</h1>
            <h1 className=" p-1 px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700  hover:text-gray-100"
              onClick={() => setisHighPrice(2)}
            >Lowest</h1>
          </div>
        </div>
      </div>
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-6  grid-cols-1 py-2'>
        {data && books.map((book, i) => {
          return (
            <div key={i} className='flex   flex-col  rounded-sm p-2  shadow-sm items-center 
            text-center'>
              <img src={book.cover}
                alt='#' className='h-[200px] w-[150px] pt-3 rounded-lg bg-transparent' />
              <h1 className='text-xl font-bold text-gray-950 text-center py-2'>{book.title}</h1>
              <p className=' text-gray-700 p-4 '>{book.description}
              </p>

              <div className="flex flex-col justify-end h-full bottom-0 start-0 ">
                <h1 className=' text-center font-bold text-gray-950 p-2'>{book.price}$</h1>
                <ButtDel_Upd id={book.id} />
              </div>

            </div>
          )
        })
        }



      </div>
    </div>

  )
}

export default BookItem
