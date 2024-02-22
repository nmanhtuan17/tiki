import {IBook} from "../../../store/slices/app.slice.ts";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import {currencyFormat} from "../../../utils";
import {Button} from "antd";
import {useAppDispatch} from "../../../store";
import {addToCart, deleteCart} from "../../../store/slices/cart.slice.ts";

interface Props {
  book: IBook
}

const PriveSection: React.FC<Props> = ({book}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({item: book, qty: qty}))
    // dispatch(deleteCart())

  }
  return (
    <div className='bg-white mx-2 rounded'>
      <div className='p-3'>
        <div className=''>
          <div className='fw-medium fs-6'>
            Số lượng
          </div>
          <div className='d-flex align-items-center gap-2 mt-2'>
            <FontAwesomeIcon onClick={() => setQty(prev => (prev > 1) ? prev - 1 : 1 )} className={`border p-1 rounded ${qty === 1 && 'opacity-50'}`} icon={faMinus} size={'sm'}/>
            <div className='border px-2 rounded fs-6'>
              {qty}
            </div>
            <FontAwesomeIcon onClick={() => setQty(qty + 1)} className='border p-1 rounded' icon={faPlus} size={'sm'}/>
          </div>
          <div className='fw-medium fs-6 mt-3'>
            Tạm tính
          </div>
          <div className='mt-2 fw-medium fs-4 text-black'>
            {currencyFormat(book.original_price)}đ
          </div>

          <div className='mt-3'>
            <Button type={'primary'} danger block>Mua</Button>
          </div>
          <div className='mt-3'>
            <Button onClick={handleAddToCart} block> Thêm vào giỏ </Button>
          </div>
          <div className='mt-3 text-primary'>
            <Button block>Mua trước chả sau </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriveSection
