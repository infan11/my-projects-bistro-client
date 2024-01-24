import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../../../Firebase/firebase.congiq";
const auth = getAuth(app)
const googeleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user , setUser] = useState([]);
const {loading , setLoading} = useState(true);

const createUser = (email , password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email ,password);

}
const signInUser = (email , password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password);
}
const logout = (email , password) =>{
    setLoading(true);
    return signOut(auth);
}
const googleAuth = (email, password)=>{
    setLoading(true);
    return signInWithPopup(auth , googeleProvider)
}
const githubAuth = (email , password) =>{
    setLoading(true);
    return signInWithPopup(auth , githubProvider);
}

const updateUserProfile = (name , photo) =>{
    return updateProfile(auth.currentUser, {
        displayName : name , photoURL: photo
    } ) 
} 
useEffect( () => {
  const unSubsCribe = onAuthStateChanged(auth , currentUser => {
    setLoading(false)
    setUser(currentUser)
   
  }) 
  return() =>{
    return unSubsCribe
  } 
} ,[])
  const authInfo = { 
    createUser,
    user , 
    logout,
    signInUser,
    googleAuth,
    githubAuth,
    loading,
   updateUserProfile,
    
  }  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;