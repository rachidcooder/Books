"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function buttonDelet_Update({ id }) {
  const route = useRouter();

  const onBay = () => {
    route.push(`/books/${id}`);

  }
  return (
    <div className=' space-x-3'>
      <button className=' text-xl  border p-1 px-3 rounded-lg hover:scale-105 duration-300 bg-orange-800
        hover:bg-orange-700 text-white  '
        onClick={() => onBay()}
      >Buy</button>

    </div>
  )
}

export default buttonDelet_Update
