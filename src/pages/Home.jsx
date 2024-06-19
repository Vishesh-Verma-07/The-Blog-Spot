import React, {useEffect, useState} from 'react'
import { Container, PostCard, Button } from '../components'
import appwriteService from '../appwrite/config'
import authService from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { set } from 'react-hook-form'


function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts)
            }
        })
    }, []) 

    const [isLogedIn, setIslogdIn] = useState(false)
    useEffect(()=>{
        authService.getCurrentUser().then((user) => {
            if(user){
                setIslogdIn(true)
            }
            else{
                setIslogdIn(false)
            }
        })
    }, [])

    // const guestUser = async () => { 
    //         const activerUser = await authService.getCurrentUser()
    //         if(!activerUser){
    //             await authService.login({
    //                 email: "guest@gmail.com",
    //                 password: "guest123"
    //             })
    //             navigate('/all-posts')
    //         }
    //         else{
    //             navigate('/')
    //         }
            
    // }

    const guestLogin = async ()=>{
        const activateUser = await authService.getCurrentUser()
        if(!activateUser){
            authService.login({
                email: "guest@gmail.com",
                password: "guest123"
            })
            navigate('/all-posts')

        }
    }


    
    return (
        <div className=' w-full py-8 '>
            <Container>
                <div className=' text-white flex  '>
                    <div className='flex flex-col  m-8 p-4 '>
                        <h1 className='text-5xl font-bold text-left drop-shadow-3xl  '>Where Words Come Alive: Dive into a World of Stories, Insights, and Inspiration.</h1>

                        <p className='text-left text-xl m-8 ml-0 '>At Blog Spot, we believe in the transformative power of words. Each article, story, and post is crafted to ignite your imagination, spark your curiosity, and inspire your journey. Whether you're here to explore new ideas, gain fresh insights, or simply enjoy a good read, our blog offers a diverse collection of content designed to captivate and enlighten.</p>
                        <p className='text-left text-xl m-8 ml-0 mt-0'>Join us as we delve into a myriad of topics, from personal growth and lifestyle tips to the latest trends and thought-provoking narratives. Our goal is to create a vibrant community where every reader can find something that resonates with them, sparking conversations and fostering connections.</p>

                        <Button className='inline-block px-6 py-2 mb-2  mx-2 duration-200 bg-slate-50 hover:bg-gray-500 hover:text-slate-50 rounded-lg'>
                            <div >
                             Explore Now
                            </div>
                        </Button>
                        
                        <div className='flex flex-col items-start '>
                            <h2 className='text-lg font-bold' >Guest Login Credentials</h2>
                            <p>Email: guest@gmail.com</p>
                            <p>Password: guest123</p>
                        </div>
                        
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home
