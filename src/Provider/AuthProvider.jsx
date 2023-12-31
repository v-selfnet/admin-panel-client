import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../Firebase/firebase.config";
import useAxiosBaseUrl from "../Hooks/useAxiosBaseUrl";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const [axiosBaseUrl] = useAxiosBaseUrl()

    // create new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo})
    }

    // signin
    const signIn = (email, password) => {
        setLoading(true);
        // console.log('signin', auth)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // delete user
    const removeUser = () => {
        setLoading(true);
        console.log(auth)
        return deleteUser(auth.currentUser)
    }

    // auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                axiosBaseUrl.post('/jwt', {email: currentUser.email, gid:currentUser.uid})
                .then(res => {
                    console.log(res)
                    localStorage.setItem('access-token', res.data.token)
                })
            }
            localStorage.removeItem('access-token')
            setLoading(false)
        });
        return () => unsubscribe;
    }, [axiosBaseUrl])


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        googleLogin,
        logOut,
        removeUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;