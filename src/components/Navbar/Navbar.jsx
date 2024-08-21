import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { CoinContext } from '../../context/Coincontext'
import { auth } from '../../pages/Firebase/Firebase'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { setCurrency } = useContext(CoinContext);

  const handlelogout = async () => {
    try {
      await auth.signOut();
      window.location.href = '/login'
    } catch (error) {

    }
  }

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      } case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }

  }


  return (
    <div className='navbar'>
      <Link to={"/"}><img src={logo} alt="" className='logo' /></Link>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button onClick={handlelogout}>Logout <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bw_ZVmxcQKX_9b1vekdRW68SHDMrXx3fZK0Ui1GKjBm9RFfhORJCOGQlP-gKEUDHSVc&usqp=CAUhttps://cdn-icons-png.flaticon.com/512/17/17367.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar
