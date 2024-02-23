"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function buttonDelet_Update({ id }) {
  const route = useRouter();

  const ondelete = () => {
    console.log("delete book with id :", id);
    route.push("/books/address");

  }
  return (
    <div className=' space-x-3'>
      <button className=' text-xl  border p-1 px-3 rounded-lg hover:scale-105 duration-300 bg-orange-800
        hover:bg-orange-700 text-white  '
        onClick={() => ondelete()}
      >Buy</button>

    </div>
  )
}

export default buttonDelet_Update
