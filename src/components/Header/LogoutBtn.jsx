import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <button className=' inline-block px-6 py-2 ml-2 duration-200  bg-slate-50 hover:bg-gray-500 hover:text-slate-50 rounded-lg' onClick={logoutHandler}>LogoutBtn</button>
    )
}

export default LogoutBtn
