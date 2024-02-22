import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {colors} from "../../../contants/theme/colors.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IBook} from "../../../store/slices/app.slice.ts";
import {Rate} from "antd";
import {currencyFormat} from "../../../utils";
import parse from 'html-react-parser';

interface Props {
  book: IBook
}
const DescriptionSection:React.FC<Props> = ({book}) => {
  const specifications = book?.specifications[0]?.attributes;
  console.log(book)
  return (
    <div className='mx-2'>
      <div>
        <div className='bg-white p-3 rounded'>
          <div className='d-flex align-items-center gap-2'>
            <div className='d-flex bg-primary-subtle border-primary px-1 align-items-center'>
              <FontAwesomeIcon className='' icon={faCircleCheck} color={colors.blue2} />
              <span className='text-primary fw-bold ms-1'>Chính hãng</span>
            </div>

            <div className=''>
              {book.authors && <span className='text-black-50'> Tác giả: <span
                className='text-black'>{book.authors.map((item : any) => item.name)}</span></span>}
            </div>
          </div>
          <div className='text-black fw-medium fs-5 mt-2'>
            {book.name}
          </div>

          <div className='mt-1'>
            {book.rating_average ? <Rate value={book.rating_average} style={{fontSize: 14}}/> : <div></div>}
            <span className='ms-1' style={{fontSize: 14, color: colors.grey}}>{book?.quantity_sold?.text}</span>
          </div>

          <div className='mt-2 fw-medium fs-4 text-black'>
            {currencyFormat(book.original_price)}đ
          </div>


          <div className='mt-5'>
            <p className='text-black fw-medium fs-6'>Thông tin chi tiết</p>
            {specifications.map((item : any, index : number) =>
              <div key={item.code}>
                <div  className={`row p-2 ${(index < specifications.length -1) && 'border-bottom border-1 border-opacity-10'}`}>
                  <span className='col text-black-50'>{item.name}</span>
                  <span className='col text-black'>{item.value}</span>
                </div>
              </div>
            )}
          </div>
        </div>


        <div className='bg-white mt-3 text-black p-3 rounded'>
          <div className='fw-medium fs-6 mb-3'> Mô tả sản phẩm </div>
          <div>
            <img src={book?.images[book.images.length-1].base_url} alt="" width={'100%'}/>
          </div>
          <div className='mt-3'>
            {parse(book?.description)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionSection
