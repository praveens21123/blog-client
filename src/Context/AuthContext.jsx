import React, {createContext, useEffect, useReducer } from 'react'

const initialValue = {
  user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
  token: localStorage.getItem("token") ||  null,
  role: localStorage.getItem("role") || null,
  loading:false,
  error:null
}

export const AuthContext = createContext(initialValue)

const authReducer = (state, action) => {
  switch(action.type){
    case "LOGIN_SUCCESS": 
      return {
        user: action.payload,
        token: action.token,
        role: action.role
      }
    case "LOGOUT_SUCCESS":
      return {
        user: null,
        token: null,
        role: null,
      }
    default : return state
  }
}

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialValue)
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
    localStorage.setItem("token", state.token)
    localStorage.setItem("role", state.role)
  }, [state])
  
  return(
    <AuthContext.Provider value={{
      user:state.user,
      error:state.error,
      loading:state.loading,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )

}