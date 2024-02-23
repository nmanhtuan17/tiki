import {useAppSelector} from "../../store";
import BookItem from "../../components/BookItem";
import FilterSection from "../../components/Filter";
import {useMemo, useState} from "react";

const Home = () => {
  const {books, query} = useAppSelector(state => state.app);
  const [cate, setCate] = useState();
  const [seller, setSeller] = useState([])
  const [rate, setRate] = useState<number>();

  const filterBooks = useMemo(() => books.filter((item) => {
    return (
      (!cate || item.categories.id === cate) &&
      (seller.length === 0 || seller.includes(item?.current_seller?.id)) &&
      (!rate || item.rating_average >= rate) &&
      (item.name.toUpperCase().includes(query.toUpperCase()))
    );
  }),[cate, seller, rate, books, query]);




  return (
    <div className='row justify-content-center'>
      <div className='col-lg-3 col-md-3'>
        <FilterSection cate={cate} rate={rate} setCate={setCate} setSeller={setSeller} setRate={setRate} />
      </div>
      <div className='text-white row col-lg-8 col-md-8'>
        {filterBooks.map((item) => <BookItem key={item.id} image={item.images} book={item} />)}
      </div>
    </div>
  )
}

export default Home;
