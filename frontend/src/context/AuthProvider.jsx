import React, { createContext } from 'react'
import { useContext } from 'react';
import { useState } from 'react';

export const AuthContext =createContext();
export default function AuthProvider({children}) {
  const initialAuthUser  = localStorage.getItem("yahapekuchbhiname");
  const [authUser,setAuthUser]=useState(
    initialAuthUser ?  JSON.parse(initialAuthUser) : undefined
  );
  return(
    <AuthContext.Provider value = {[authUser,setAuthUser]}>
        {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () =>useContext(AuthContext); 