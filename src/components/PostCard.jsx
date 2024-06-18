import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({ $id, title, featuredImage}) {
    return (
        <Link to = {`/post/${$id}`}>
            <div className='w-full h-[400px] bg-zinc-800 text-white rounded-xl p-4 hover:outline outline-4 outline-gray-500'>
                <div className='w-full  justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className=' rounded-xl h-[300px] rounded-t-lg w-full aspect-video object-center object-cover' />
                </div>
                <h2 className=' text-xl font-bold'>{title.toUpperCase()}</h2>
            </div>
        </Link>
    )
}

export default PostCard
