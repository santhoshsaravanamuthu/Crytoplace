import React, { useState } from 'react'
import "./Login.css"
import { toast } from 'sonner';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User LoggedIn Successfully!!", {
        position: "top-right",
      });
      window.location.href = "/";
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      })
    }
  }

  return (
    <div className='login'>
      <div className='login-form'>
        <form onSubmit={handleLogin}>
          <h3>Login Page</h3>
          <label htmlFor="">Email Address</label>
          <input type="email"
            placeholder='Enter your Email Id ...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="">Password</label>
          <input type="password"
            placeholder='Enter your Password ...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button class="button">Login</button><br />
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login