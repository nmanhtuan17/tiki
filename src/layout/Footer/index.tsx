import {colors} from "../../contants/theme/colors.ts";
import fb from '../../assets/image/fb.png'
import youtube from '../../assets/image/youtube.png'
import zalo from '../../assets/image/zalo.png'

const footerData = [
  {
    title: 'Hỗ trợ khách hàng',
    data: [
      `Hotline: 1900-6035
      (1000 đ/phút, 8-21h kể cả T7, CN)`,
      'Các câu hỏi thường gặp',
      'Gửi yêu cầu hỗ trợ',
      'Hướng dẫn đặt hàng',
      'Phương thức vận chuyển',
      'Chính sách đổi trả',
      'Hướng dẫn trả góp',
      'Chính sách hàng nhập khẩu',
      'Hỗ trợ khách hàng: hotro@tiki.vn',
      'Báo lỗi bảo mật: security@tiki.vn'
    ]
  },
  {
    title: 'Về Tiki',
    data: [
      'Giới thiệu Tiki',
      'Tiki Blog',
      'Tuyển dụng',
      'Chính sách bảo mật thanh toán',
      'Chính sách bảo mật thông tin cá nhân'
    ]
  }
]
const Footer = () => {
  const renderItem = (text: string) => {
    return (
      <div style={{color: colors.grey}}>{text}</div>
    )
  }
  return (
    <div className='bg-white'>
      <div className='row container mx-auto p-3 justify-content-between'>
        {footerData.map(item => {
          return (
            <div className='col col-lg-2'>
              <div className='fw-bold mb-2'>{item.title}</div>
              {item.data.map(text => renderItem(text))}
            </div>
          )
        })}
        <div className='row col col-lg-2'>
          <div>
            <div className='fw-bold mb-2'>Hợp tác và liên kết</div>
            <div style={{color: colors.grey}}>Quy chế hoạt động Sàn GDTMĐT</div>
          </div>
          <div>
            <div className='fw-bold mb-2'> Chứng nhận bởi</div>
            <div style={{color: colors.grey}}>Booj công thương</div>
          </div>
        </div>

        <div className='row col col-lg-2'>
          <div>
            <div className='fw-bold mb-2'>Phương thức thanh toán</div>
          </div>
          <div>
            <div className='fw-bold mb-2'>Dịch vụ giao hàng</div>
          </div>
        </div>

        <div className='row col col-lg-2'>
          <div>
            <div className='fw-bold mb-2'>Kết nối với chúng tôi</div>
            <div className='d-flex'>
              <img src={fb} alt="" width={32}/>
              <img src={youtube} alt="" width={32}/>
              <img src={zalo} alt="" width={32}/>
            </div>
          </div>
          <div>
            <div className='fw-bold mb-2'>Tải ứng dụng trên điện thoại</div>
          </div>
        </div>


        <div className='my-4'>
          <div className='fw-bold mb-2'>Công ty TNHH TIKI</div>
          <div style={{color: colors.grey}}>Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12,
            Quận 10, Thành phố Hồ Chí Minh
          </div>
          <div style={{color: colors.grey}}>Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư
            Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
          </div>
          <div style={{color: colors.grey}}>Hotline: <span style={{color: colors.blue2}}>1900 6035</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
