import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styles from "../styles/Login.module.css";
import Card from "react-bootstrap/Card";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";
import { useState } from "react";
import {useRouter} from 'next/router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { update, remove } from "../redux/userSlice";
import axios from "axios";
import { getAuth} from "firebase/auth";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  RedirectToSignUp
} from "@clerk/nextjs";

export default function login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(auth.currentUser)

  const handleLogin = async (e) => {
    e.preventDefault();
    // signInWithEmailAndPassword (auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user, "signed in user");
    //     dispatch(update({ email }));
    //     if(user) {
    //       setTimeout(() => {
    //         router.push('/');
    //       }, 1000);
    //     }
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //     // ..
    //   });
    dispatch(update({ email }));
    try {
      const res = await axios.post("http://localhost:3000/api/login",{email: "admin@admin.com"});
      dispatch(update({ email }));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    
  };
  return (
    // <container className={styles.container}>
    //   <Card className={styles.content}>
    //     <form onSubmit={handleLogin}>
    //       <Card.Title>Sign In</Card.Title>
    //       <div>
    //         <input
    //           type="email"
    //           className="form-control"
    //           placeholder="Email address"
    //           onChange={e => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <input
    //           type="password"
    //           className="form-control"
    //           placeholder="Password"
    //           onChange={e => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <button type="submit">Login</button>
    //       </div>
    //       <h6>
    //         <a className={styles.text} href="#">
    //           Forgot password?
    //         </a>
    //       </h6>
    //       <h6>
    //         Don't have an account?{" "}
    //         <Link className={styles.text} href="/signup">
    //           Sign Up
    //         </Link>
    //       </h6>
    //     </form>
    //     {error && <h2>Wrong</h2>}
    //   </Card>
    // </container>
    <RedirectToSignIn />
  );
}
