import logo from '../../assets/logo.png';
import AccountBox from './AccountBox/AccountBox';
import '../../assets/Header/header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt="logo" className='header-logo' />

      <nav class="header-navbar">
        <div class="dropdown">
          <button className='header-button'>DỊCH VỤ</button>
          <ul>
            <li>XÂY DỰNG WEBSITE</li>
            <li>PHẦN MỀM</li>
          </ul>
        </div>
        <div class="dropdown">
          <button className='header-button'>KHOÁ HỌC</button>
          <ul>
            <li>LỘ TRÌNH TỰ HỌC</li>
          </ul>
        </div>
        <div className='header-button'><p>LIÊN HỆ</p></div>
      </nav>

      <AccountBox></AccountBox>
    </div>
  )
}

export default Header