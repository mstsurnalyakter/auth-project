import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react"
import auth from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut = () =>{
      return  signOut(auth)
    }

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser);
    console.log('object',currentUser);

    })
    return ()=>{
        unSubscribe();
    }
},[])

    const authInfo = { user, createUser, singInUser, logOut };


  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
}


AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;

/**
 * 1. create context and export it
 * 2.set provider with value
 * 3.use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it the middle of the Provider
 */
