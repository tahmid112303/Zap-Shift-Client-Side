import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from './firebase'

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const registerUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const verifyEmail = (emailUser) => {
        return sendEmailVerification(emailUser)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        registerUser,
        loginUser,
        loginWithGoogle,
        user,
        loading,
        logOut,
        profileUpdate,
        verifyEmail,
        resetPassword
    }

  return (
     <AuthContext value={authInfo}>
        {children}
     </AuthContext>
  )
}

export default AuthProvider