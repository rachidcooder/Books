"use client"
import { useEffect, useState } from "react"
import ButtBuy from "./Button_Buy.jsx"
import { CiSearch } from "react-icons/ci";
import { Db_books } from "../data/datap"

// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   cover: string | null;
//   price: number | null;
// };






function BookItem() {
  const [books, setBooks] = useState(Db_books);
  const [ctg, setCatregory] = useState("all");
  const [ishighPrice, setisHighPrice] = useState(0);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    if (ctg != "all")
      setBooks(Db_books.filter((book, i) => { return book.category === ctg }));
    else setBooks(Db_books);
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

  useEffect(() => {

    if (textSearch !== null && textSearch) {
      const allBooks = [...books];
      setBooks(
        allBooks.filter((book) => {
          return book.title.toLowerCase().startsWith(textSearch.toLowerCase());
        })
      );
    } else {
      setTextSearch("");
      setBooks(Db_books);
    }


  }, [textSearch]);


  return (
    <div className="p-2">
      <h1 className=" text-center text-orange-700 text-2xl md:text-3xl xl:text-5xl p-2 font-semibold">Best Books</h1>
      <div className=" flex  w-full justify-end ">
        <div className="flex border rounded-md items-center sm:px-5">
          <CiSearch size={20} className=" font-bold" />
          <input placeholder="search for book "
            className=" outline-none sm:p-2 rounded-lg hover:bg-gray-50 sm:text-xl "
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </div>

      </div>
      <div className=" sm:flex sm:justify-between p-1 sm:p-3">

        <div>
          <h1 className=" text-orange-700 text-xl sm:text-2xl xl:text-3xl font-bold sm:p-1" >Categories</h1>
          <div className="flex sm:space-x-2 space-x-1 ps-1 sm:text-xl xl:text-2xl text-center
           text-gray-900 ">

            <h1 className=" p-1 sm:px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("all")}
            >All</h1>
            <h1 className=" p-1 sm:px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("Science")}
            >Science</h1>
            <h1 className=" p-1 sm:px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("History")}
            >History</h1>
            <h1 className=" p-1  sm:px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("Religion")}
            >Religion</h1>
            <h1 className=" p-1 sm:px-2  border rounded-xl cursor-pointer
            hover:bg-orange-700 hover:text-gray-100"
              onClick={() => setCatregory("Philosophy")}
            >Philosophy</h1>
          </div>
        </div>

        <div>
          <h1 className=" text-orange-700 sm:text-2xl xl:text-3x text-xl font-bold sm:p-1" >Filter Price</h1>
          <div className="flex space-x-2 sm:text-xl xl:text-2xl text-gray-900">
            <h1 className=" p-1 sm:px-2  border rounded-xl hover:bg-orange-700 cursor-pointer 
              hover:text-gray-100"
              onClick={() => setisHighPrice(1)}
            >Highest</h1>
            <h1 className=" p-1 sm:px-2  border rounded-xl cursor-pointer
             hover:bg-orange-700  hover:text-gray-100"
              onClick={() => setisHighPrice(2)}
            >Lowest</h1>
          </div>
        </div>

      </div>
      <div className=' grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6  grid-cols-1 py-2'>
        {
          Db_books && books.map((book, i) => {
            return (
              <div key={i} className='flex  flex-col  rounded-sm p-2  shadow-sm items-center 
            text-center'>
                <img src={book.image}
                  alt='#' className='h-[200px] w-[150px] pt-3 rounded-lg bg-transparent' />
                <h1 className='text-xl font-bold text-gray-950 text-center py-2'>{book.title}</h1>
                <p className=' text-gray-700 sm:p-4 '>{book.description}
                </p>

                <div className="flex flex-col justify-end h-full bottom-0 start-0 ">
                  <h1 className=' text-xl xl:text-2xl text-center font-bold text-orange-800 p-2'>{book.price}$</h1>
                  <ButtBuy id={book.id} />
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
