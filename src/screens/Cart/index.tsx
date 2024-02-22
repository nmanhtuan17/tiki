import {useAppDispatch, useAppSelector} from "../../store";
import {Button, List} from "antd";
import {currencyFormat} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {removeFromCart} from "../../store/slices/cart.slice.ts";

const Cart = () => {
  const {cart} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart)

  return (
    <List
      itemLayout="horizontal"
      dataSource={cart}
      renderItem={(item, index) => (
        <div className='row justify-content-between bg-white p-4 mb-3 rounded'>
          <div className='col d-flex align-items-center'>
            <img src={item?.item?.images[0]?.base_url} alt="" width={100}/>
            <div className='ms-4'>
              <div className='fs-6 fw-medium'>
                {item?.item?.name}
              </div>
              <div className='fs-6 fw-medium'>
                {currencyFormat(item?.item?.original_price)}đ
              </div>
            </div>
          </div>
          <div className='col col-lg-3 row justify-content-end position-relative px-3'>
            <div className='d-flex align-items-center justify-content-end gap-2 mt-2' style={{fontSize: 12}}>
              <FontAwesomeIcon onClick={() => {}} className={`border p-1 rounded ${item.qty === 1 && 'opacity-50'}`} icon={faMinus} size={'sm'}/>
              <div className='border px-2 rounded fs-6'>
                {item.qty}
              </div>
              <FontAwesomeIcon onClick={() => {}} className='border p-1 rounded' icon={faPlus} size={'sm'}/>
            </div>
            <div className='text-end'>
              Thành tiền: <span className='fw-medium fs-6'>{currencyFormat(item?.item?.original_price * item.qty)}đ</span>
            </div>
            <Button className='w-50'>
              Thanh toán
            </Button>

            <div className='text-end position-absolute' style={{top: -10, right: -10}}>
              <FontAwesomeIcon onClick={() => dispatch(removeFromCart(item.item.id))} icon={faXmark} />
            </div>
          </div>

          {/*<div className='col col-lg-1'>*/}

          {/*</div>*/}
        </div>
      )}
    />
  )
}

export default Cart
