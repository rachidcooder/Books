"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function Button_Buy({ id }) {
  const route = useRouter();

  const onBay = () => {
    route.push(`/books/${id}`);

  }
  return (
    <div className=' space-x-3'>
      <button className=' text-xl xl:text-2xl  border p-1 px-6 rounded-lg hover:scale-105 duration-300 bg-orange-700
        hover:bg-orange-900 text-white hover:text-2xl '
        onClick={() => onBay()}
      >Buy</button>

    </div>
  )
}

export default Button_Buy
