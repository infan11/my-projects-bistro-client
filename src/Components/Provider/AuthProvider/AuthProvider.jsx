import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const auth = getAuth(app)
const googeleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
 export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user , setUser] = useState([]);

const [loading , setLoading]= useState(false);
const axiosPublic =  useAxiosPublic();
const createUser = (email , password ,) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email ,password );

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

const updateUserProfile  = (name, photo) =>{
    return updateProfile(auth.currentUser ,{
        displayName: name,photoURL:photo
    })

}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        if(currentUser){
            // get token  and  store client
            const userInfo = { email : currentUser.email}
           axiosPublic.post("/jwt" ,  userInfo)
           .then(res => {
             if(res.data.token){
                localStorage.setItem("Access-token" , res.data.token)
             }
             
           })
        }
        else{
            // TODO: remove token (if token stored in the client side: LcalStorage , cashing in  memory)
            localStorage.removeItem("Access-token")
        }
         setLoading(false)  
    })
    return() =>{
        return unSubscribe()
    }
},[axiosPublic])
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