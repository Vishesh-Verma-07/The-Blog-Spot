import React, {useEffect, useState} from 'react'
import { Container, PostCard, Button } from '../components'
import appwriteService from '../appwrite/config'
import authService from '../appwrite/auth'
import { set } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts)
            }
        })
    }, []) 

    const [path, setPath] = useState("/login")
    useEffect(()=>{
        if(posts.length > 0){
            setPath("/")
        }
    }, [])


    if(posts.length === 0){
        return (
            <div className=' w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap '>
                        <div className=' p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'> Login to read posts </h1>
                        </div>
                    </div>
                </Container>
            </div> 
        )
    }
    return (
        <div className=' w-full py-8'>
            <Container>
                <div className=' text-white flex h-[32rem] h-max-[32rem] border-2 border-red-500 '>
                    <div className='border-2 border-red-500 flex flex-col  m-8 p-4 '>
                        <h1 className='text-5xl font-bold text-left drop-shadow-3xl  '>Where Words Come Alive: Dive into a World of Stories, Insights, and Inspiration.</h1>
                        <p className='text-left text-xl m-8 ml-0 border-2 border-red-500'>At Blog Spot, we believe in the transformative power of words. Each article, story, and post is crafted to ignite your imagination, spark your curiosity, and inspire your journey. Whether you're here to explore new ideas, gain fresh insights, or simply enjoy a good read, our blog offers a diverse collection of content designed to captivate and enlighten.</p>
                        <p className='text-left text-xl m-8 ml-0 mt-0 border-2 border-red-500'>Join us as we delve into a myriad of topics, from personal growth and lifestyle tips to the latest trends and thought-provoking narratives. Our goal is to create a vibrant community where every reader can find something that resonates with them, sparking conversations and fostering connections.</p>
                        <Link to={path} className=' items-end '>
                        <Button className='inline-block px-6 py-2 mb-2  mx-2 duration-200 bg-slate-50 hover:bg-gray-500 hover:text-slate-50 rounded-lg'> Explore  </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home
