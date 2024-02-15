import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faFaceSmileWink, faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Divider, Input} from "antd";
import {colors} from "../../contants/theme/colors.ts";

const Header = () => {
  return (
    <div className='d-flex'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary flex-fill">
        <div className="container">
          <img
            style={{width: '72px'}}
            className="navbar-brand me-5"
            src='https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png'
            alt='img'/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between gap-3" id="navbarSupportedContent">
            <div className="d-flex flex-fill gap-3" role="search">
              <Input
                placeholder=''
                prefix={<FontAwesomeIcon icon={faMagnifyingGlass} color={colors.grey}/>}
                suffix={
                  <div>
                    <Divider type="vertical"/>
                    <span className='text-primary'>Tìm kiếm</span>
                  </div>
                }
              />
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  <FontAwesomeIcon icon={faHome}/>
                  <span className='ms-1'>Trang chủ</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <FontAwesomeIcon icon={faFaceSmileWink}/>
                  <span className='ms-1'>Tài khoản</span>
                </Link>
              </li>
            </ul>
            <Divider type="vertical"/>
            <FontAwesomeIcon icon={faShoppingCart} className='text-primary'/>
          </div>
        </div>
      </nav>

    </div>
  )
}
export default Header