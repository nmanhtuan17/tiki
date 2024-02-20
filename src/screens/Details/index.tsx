import {useParams} from "react-router-dom";
import {useAppSelector} from "../../store";
import MainSection from "./MainSection";
import DescriptionSection from "./DescriptionSection";
import PriceSection from "./PriceSection";

const Details = () => {
  const {id } = useParams();
  const {books} = useAppSelector(state => state.app);
  const book  = books.find((item) => item.id === id );

  return (
    <div className='row justify-content-center mb-5'>
      <div className='col-lg-4 col-md-4'>
        <MainSection images={book?.images} />
      </div>
      <div className='text-white row align-items-center col-lg-5 col-md-5'>
        <DescriptionSection />
      </div>
      <div className='align-items-center col-lg-3 col-md-3'>
        <PriceSection />
      </div>
    </div>
  )
}

export default Details
