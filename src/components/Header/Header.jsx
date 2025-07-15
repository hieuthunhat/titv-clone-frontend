import logo from '../../assets/logo.png';
import AccountBox from '../AccountBox/AccountBox';

const Header = () => {
  return (
    <div style={{border: "1px solid black"}}>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <AccountBox></AccountBox>
    </div>
  )
}

export default Header