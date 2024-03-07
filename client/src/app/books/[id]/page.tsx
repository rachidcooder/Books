
import Address from "./Address"
import { Db_books } from "../../data/datap"




// const getBook = async (id: Number) => {
//   try {
//     console.log("id : ", id)
//     const res = await fetch(`http://localhost:5000/api/book/${id}`);
//     const resData = await res.json();
//     //const booksData = resData.data;
//     return resData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }
interface PageProps {
  params: {
    id: number;
  };
}

export default function page({ params }: PageProps) {
  const data = Db_books.filter((item: any) => item.id == params.id);

  return (
    <main>
      <Address data={data} />
    </main>
  );
}