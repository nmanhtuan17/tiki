import {IBook} from "../../store/slices/app.slice.ts";

interface Image {
  base_url: string
}
interface IBookProps {
  image: Image[],
  book: IBook
}
const BookItem : React.FC<IBookProps> = ({image, book}) => {
  const base_url = image[0]?.base_url
  return (
    <div className="card" style={{width: "200px"}}>
      <img src={base_url} className="card-img-top object-fit-contain" alt="..." height={170} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h6 className="">{book.original_price}đ</h6>
        </div>
    </div>
  )
}

export default BookItem
