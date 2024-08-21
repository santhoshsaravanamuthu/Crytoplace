import React, { useState } from 'react'
import "./SignUp.css"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../Firebase/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'sonner';


const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          Email: user.email,
          Firstname: fname,
          LastName: lname
        })
      }
      toast.success("User SingedUp Successfully !!", {
        position: "top-right",
      });
      setEmail("");
      setPassword("");
      setFname("");
      setLname("");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  }

  return (
    <div className='Signup'>
      <div className='Signup-form'>
        <form onSubmit={handlesignup}>
          <h3>SignUp Page</h3>
          <label>First Name</label>
          <input type="text"
            placeholder='Enter your First Name ...'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <label>Last Name</label>
          <input type="text"
            placeholder='Enter your Last Name ...'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <label>Email Address</label>
          <input type="email"
            placeholder='Enter your Email Id ...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Create Password</label>
          <input type="password"
            placeholder='Enter your Password ... '
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button class="button">Signup</button>
          <p>Already have an account? <a href="/login">Login now</a></p>
        </form>
      </div>
    </div>
  )
}

export default Signup