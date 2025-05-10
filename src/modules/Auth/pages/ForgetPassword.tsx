import React from 'react'
import Input from '../components/Input'
import { Mail, House } from 'lucide-react'
import { Link } from 'react-router-dom'
import useForgetPassword from '../../../hooks/useForgetPassword'
export default function ForgetPassword() {
    const { handleSubmit, Onsubmit, errors, register } = useForgetPassword()
    return (
        <div className='bg-background h-svh flex justify-center items-center'>
            <div className='bg-white w-11/12 h-3/8 p-2 md:h-3/7 md:w-1/2 xl:w-1/3 rounded-sm'>
                <div className='flex flex-row items-center p-2 '>
                    <p className='font-bold text-lg'>SamasCasas</p>
                    <House className='ml-2'></House>
                </div>
                <h1 className='font-bold text-xl text-center md:text-2xl '>Recupere a sua Palavra passe</h1>

                <form className='flex flex-col justify-center items-center w-full mt-4  h-1/2' onSubmit={handleSubmit(Onsubmit)}>
                    <div className='w-11/12 '>
                        <label htmlFor="">Email</label>
                        <div className={errors.email ? `border border-red-600 rounded-sm flex flex-row p-3` : `border border-zinc-300 rounded-sm flex flex-row p-3`}>
                            <input type="text"
                                placeholder='Email'
                                className='w-full  outline-none mt-2'
                                {...register("email")}
                            />
                            <Mail color='#ddd' />
                        </div>
                        <p className='text-red-600'>{errors.email && errors.email?.message}</p>
                    </div>

                    <div className='flex justify-center w-full'>
                        <button
                        type='submit'
                            className='text-white bg-black w-10/12 p-2 rounded-sm mt-2 cursor-pointer'
                        >Recuperar
                        </button>
                    </div>

                    <div className='mt-2'>
                        <p className='text-sm'>Lembrou a sua Palavra-passe?  <Link to={"/Login"} className='font-semibold cu'> Faça Login</Link> </p>
                    </div>

                </form>
            </div>
        </div>
    )
}
