import React from 'react'
import { House, Mail, Eye } from 'lucide-react'
import ImageAuth from "./../../../assets/SAMASCASAS 1.png"
import Input from '../components/Input'
import { Link, useLocation } from 'react-router-dom'
import useLogin from '../../../hooks/useLogin'

export default function Login() {
  const { handleSubmit, Onsubmit, errors, register } = useLogin()
  return (
    <div className='flex flex-row justify-center w-full h-svh'>
      <div className='flex  flex-col w-full ' >
        <div className='w-full flex  flex-col flex-col-reverse justify-center items-center h-full md:flex-col md:flex-col-reverse md:justify-center  md:w-full lg:flex-row'>

          <form className=' bg-white  w-11/12 h-3/5 border  border-border-color rounded-sm -translate-y-24   md:h-[450px] md:-translate-y-40  md:w-[400px] lg:translate-y-0 lg:translate-x-24 lg:w-1/3 ' onSubmit={handleSubmit(Onsubmit)}>
            <div className="flex flex-row items-center p-2 ">
              <p className='font-bold text-lg'>SamasCasas</p>
              <House className='font-extrabold ml-1' size={16} />
            </div>
            <h1 className='text-center text-3xl font-bold mt-2  '>Seja Benvindo(a)</h1>
            <div className='flex flex-col items-center   w-full'>
              <Input
                type='email'
                name='email'
                placeholder='Email'
                textLabel='Email'
                Icon={Mail}
                register={register}
              />
             <div className='w-11/12'>
              { errors.email && <p className='text-red-500 text-sm text-start mt-2'>{errors.email.message}</p>}
              </div>
            </div>
            <div className='flex flex-col items-center  w-full mt-2'>
              <Input
                type='password'
                name='password'
                placeholder='Palavra-passe'
                textLabel='Palavra-passe'
                Icon={Eye}
                register={register}
              />
              <div className='w-11/12'>
              { errors.password && <p className='text-red-500 text-sm text-start mt-2'>{errors.password.message}</p>}
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <div className='w-11/12 text-end'>
            <Link to={"/forget-password"} >       <p className='text-sm font-semibold mt-2 cursor-pointer'>Esqueceu a sua senha</p></Link>
              </div>
              <button className='bg-black text-white  w-9/12 p-3 rounded-sm mt-3 cursor-pointer'>Entrar</button>
              <div className='w-11/12 text-end'>
                <p className='text-center text-sm   cursor-pointer mt-3'>
                  Ainda  não possui uma conta? <Link to={"/signup"} className='font-semibold'>Cadastre-se</Link>
                </p>
              </div>
            </div>
          </form>

          <div className='flex h-3/5 -translate-y-24 md:h-[800px] md:translate-x-[15%] md:-translate-y-[20%] lg:w-1/2 lg:translate-x-[40%] lg:translate-y-[0%] lg:h-[1000px] '>
            <img
              src={ImageAuth}
              alt="ImageAuth"
              className=' w-[400px]   rotate-90 md:rotate-90 md:w-[70.5%]  lg:rotate-0 lg:w-[80.5%]'
            />
          </div>

        </div>

        <div>

        </div>
      </div>
    </div>
  )
}
