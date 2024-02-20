import {IBook} from "../../store/slices/app.slice.ts";
import {Rate} from "antd";
import {colors} from "../../contants/theme/colors.ts";
import {currencyFormat} from "../../utils";
import {useNavigate} from "react-router-dom";

interface Image {
  base_url: string
}

interface IBookProps {
  image: Image[],
  book: IBook
}

const BookItem: React.FC<IBookProps> = ({image, book}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/details/${book.id}`)
  }
  const base_url = image[0]?.base_url
  return (
    <div onClick={onClick} className='col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-3'>
      <div className="card border-0" style={{ height: '300px'}}>
        <img src={base_url} className="card-img-top object-fit-cover" alt="..." height={120}/>
        <div className="row card-body align-content-between">
          <p className="" style={{fontSize: 12, fontWeight: '500'}}>{book.name.substring(0, 40)}...</p>
          <div className='row gap-2 flex-fill'>
            {book.rating_average ? <Rate value={book.rating_average} style={{fontSize: 10}}/> : <div></div>}
            <span  style={{fontSize: 12, color: colors.grey}}>{book?.quantity_sold?.text}</span>
          </div>
          <h6 className="">{currencyFormat(book.original_price)}đ</h6>
        </div>
      </div>
    </div>
  )
}

export default BookItem
