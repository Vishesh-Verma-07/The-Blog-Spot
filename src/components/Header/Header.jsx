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
        <>
        <header className=' py-3 shadow bg-gray-500  '>
            <Container>
                <nav className='flex'>
                    <div className=' mr-4'>
                        <Link to= '/'>
                        <Logo width='50px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    onClick={ () => navigate(item.slug)}
                                    className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
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

		{/* {sticky top-0 z-10 backdrop-filter backdrop-blur-lg border-b-0 dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 flex justify-between h-16 w-full shrink-0 items-center px-4 md:px-8" */} 

        <header className=' py-3 sticky top-0 shadow backdrop-filter backdrop-blur-sm bg-green/30   '>
                <Container>
                <nav className='flex'>
                    <div className=' mr-4'>
                        <Link to= '/'>
                        <Logo width='50px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    onClick={ () => navigate(item.slug)}
                                    className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
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

        </>
        
    )
}

export default Header
