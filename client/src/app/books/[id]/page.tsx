import React from 'react'
import Address from "./Address"
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';


interface Prams {
  id: Number
}


const getBook = async (id: Number) => {
  try {
    console.log("id : ", id)
    const res = await fetch(`http://localhost:5000/api/book/${id}`);
    const resData = await res.json();
    //const booksData = resData.data;
    return resData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}


async function page({ params }: Params) {
  const data = await getBook(params.id);

  console.log(" book : ", data);
  return (
    <main>
      <Address data={data} />
    </main>
  )
}

export default page