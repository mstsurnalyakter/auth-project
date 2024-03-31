import PropTypes from 'prop-types'
import { createContext, useState } from "react"
import auth from '../firebase/firebase.config';
import {createUserWithEmailAndPassword } from "firebase/auth";


export const AuhContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = { user,createUser }


  return <AuhContext.Provider value={authInfo}>
    {children}
    </AuhContext.Provider>;
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
