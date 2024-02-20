import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {colors} from "../../../contants/theme/colors.ts";
import {Divider} from "antd";

interface IProps {
  images: any
}

const MainSection: React.FC<IProps> = ({images}) => {
  return (
    <div className='row bg-white align-items-center justify-content-center p-3 gap-3'>
      <div className='d-flex justify-content-center'>
        <img src={images[0]?.base_url} alt="" width={300} height={300} className='object-fit-contain rounded py-1'/>
      </div>
      <div className='p-0 row'>
        {images.map((item: any, index: number) => (
          <img key={index} src={item?.base_url} alt="" width={50} height={50}
               className='col-sm-2 object-fit-contain p-1 border border-1 rounded me-1 my-1'/>
        ))}
      </div>
      <div className='p-0 fw-bold'>
        Đặc điểm nổi bật
        <div className='row align-items-center mt-2'>
          <FontAwesomeIcon className='col flex-grow-0' icon={faCircleCheck} color={colors.blue2} />
          <p className='col fw-light flex-grow-1 m-0 p-0'>
            Kích thước lớn và bìa cứng, tạo cảm giác sang trọng
            và bền bỉ.
          </p>
        </div>
        <div className='row align-items-center mt-2'>
          <FontAwesomeIcon className='col flex-grow-0' icon={faCircleCheck} color={colors.blue2} />
          <p className='col fw-light flex-grow-1 m-0 p-0'>
            Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút
            sự chú ý của trẻ em.
          </p>
        </div>
        <div className='row align-items-center mt-2'>
          <FontAwesomeIcon className='col flex-grow-0' icon={faCircleCheck} color={colors.blue2} />
          <p className='col fw-light flex-grow-1 m-0 p-0'>
            Cung cấp thông tin tổng quát về diện tích, dân số
            và ngôn ngữ của các quốc gia.
          </p>
        </div>
      </div>

      <Divider />
      <div className='row'>
        <div className='col flex-grow-1'>
          <span className='me-1 opacity-50'>Xem thêm</span>
          <span>
            Tóm tắt nội dung sách
          </span>
        </div>
        <FontAwesomeIcon className='col flex-grow-0 opacity-50' icon={faChevronRight} size={"sm"} />
      </div>
    </div>
  )
}

export default MainSection
