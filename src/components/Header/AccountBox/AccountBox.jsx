import { MdAccountCircle } from "react-icons/md";
import '../../../assets/Header/header.css'

const AccountBox = () => {
  return (
    <a href="/user-account" className="auth-container">
      <MdAccountCircle className="auth-logo" />
      <div className="auth-box">
        LOGIN/SIGN UP
      </div>
    </a>
  )
}

export default AccountBox