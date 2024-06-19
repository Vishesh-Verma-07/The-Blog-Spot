import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from './index'
import authservice from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError('')
        try {
            const userData = await authservice.createAccount(data)
            if(userData){
                const userData = await authservice.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center bg-slate-50 py-12 '>
            <div className={`mx-auto w-full max-w-lg bg-zinc-200 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' className='' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'> Sign up to create account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp;
                    <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Sign in
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label='Full Name: '
                        placeholder='Enter your full name'
                        {...register('name', {
                            required: true,
                        })}
                        />
                        <Input
                        label = "Email: "
                        type = "email"
                        placeholder = "Enter your email"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email addres must be valid'
                            }
                        })}
                        />
                        <Input
                        label = "Password: "
                        type = "password"
                        placeholder = "Enter your password"
                        {...register('password', {
                            required: true,
                            minLength: 8
                        })}
                        />

                        <Button 
                        type="submit"
                        className="w-full"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup
