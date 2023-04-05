
import { createContext, useContext, useEffect, useState} from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth"
import { auth } from "../firebase";


const userAuthContext = createContext();


export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState(null);

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    async function login (email, password){
        const userResponse = await signInWithEmailAndPassword(auth, email, password);
        setUser(userResponse)
    }
    async function logOut () {
        await signOut(auth)
        setUser(null)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider) 
    }
    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, {url:'http://localhost:3000/login'})
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])
    return<userAuthContext.Provider value={{user, signUp, login, logOut, googleSignIn, forgotPassword }} >{children}</userAuthContext.Provider>
}
export function useUserAuth(){
    return useContext(userAuthContext);
}
