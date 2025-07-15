import { MdAccountCircle } from "react-icons/md";
import '../../../assets/Header/header.css'

const AccountBox = () => {
  return (
    <div className="auth-container">
        <MdAccountCircle className="auth-logo"/>
        <div className="auth-box">
            LOGIN/SIGN UP
        </div>
    </div>
  )
}

export default AccountBox