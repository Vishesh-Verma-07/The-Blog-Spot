import React from 'react'
import { Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from '../container/Container.jsx'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]


    return (
        
        <header className=' p-3 sticky top-0  shadow bg-black invisible sm:visible  '>
            <Container>
                <nav className='flex'>
                    <div className='flex justify-center items-center rounded-xl text-white hover:text-zinc-300 '>
                        <Link to= '/' className='flex justify-center items-center p-2  '>
                        <Logo width="30px" className = "hover:text-white" />
                        <h1 className=' text-xl font-bold pl-4 '>THE BLOG SPOT</h1>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    onClick={ () => navigate(item.slug)}
                                    className=' inline-block px-6 py-2   mx-2 duration-200 bg-slate-50 hover:bg-gray-500 hover:text-slate-50 rounded-lg'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
         </Container>
        </header>
        
    )
}

export default Header
