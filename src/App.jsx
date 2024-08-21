import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import { Toaster } from "sonner"
import { useEffect, useState } from "react"
import { auth } from "./pages/Firebase/Firebase"

const App = () => {

  const [user, setUser] = useState("");
  const location = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  })

  const hideNavbarAndFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app">
      {!hideNavbarAndFooter && <Navbar />}
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  )
}

export default App