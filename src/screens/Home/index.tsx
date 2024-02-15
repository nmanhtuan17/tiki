import {useAppSelector} from "../../store";
import BookItem from "../../components/BookItem";
import FilterSection from "../../components/Filter";

const Home = () => {
  const {books} = useAppSelector(state => state.app);

  return (
    <div className='row justify-content-center'>
      <div className='col-lg-2 col-md-3'>
        <FilterSection />
      </div>
      <div className='text-white row align-items-center col-lg-8 col-md-8'>
        {books.map((item) => <BookItem key={item.id} image={item.images} book={item} />)}
      </div>
    </div>
  )
}

export default Home;
