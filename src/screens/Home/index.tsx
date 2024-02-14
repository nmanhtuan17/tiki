import {useAppSelector} from "../../store";
import BookItem from "../../components/BookItem";

const Home = () => {
  const {books} = useAppSelector(state => state.app);
  console.log(books)

  return (
    <div className='text-white row gap-2 align-items-center justify-content-center'>
      {books.map((item, index) => <BookItem key={item.id} image={item.images} book={item} />)}
    </div>
  )
}

export default Home;
