import React from 'react'
import Input from '../components/Input'
import { Mail, Eye } from 'lucide-react'
import useSign from '../../../hooks/useSign'
import { Link } from 'react-router-dom'
export default function SignUp() {
    const { handleSubmit, register, Onsubmit, errors } = useSign()
    return (
        <div className='bg-background w-full h-svh flex  justify-center items-center'>
            <div className='bg-white w-11/12  p-10 md:w-1/2 md:h-3/6'>
                <h1 className='text-2xl font-bold text-center'>
                    Cadastramento
                </h1>
                <form className=' h-full flex flex-col justify-center ' onSubmit={handleSubmit(Onsubmit)}>
                    <div className=' flex flex-col md:flex md:flex-row md:justify-evenly  '>
                        <div className='md:w-1/2'>

                            <Input
                                placeholder='Nome Completo'
                                name='name'
                                textLabel='Nome Completo'
                                type='text'
                                register={register}
                            />
                            <p className='text-red-600 text-sm'>
                                {
                                    errors.name ? errors.name.message : ""
                                }
                            </p>
                        </div>
                        <div className='mt-3 md:mt-0 md:w-1/2 md:ml-2'>

                            <Input
                                type="email"
                                placeholder='exemplo@gmail.com'
                                name='email'
                                textLabel='Email'
                                Icon={Mail}
                                register={register}
                            />
                            <p className='text-red-600 text-sm'>
                                {
                                    errors.email ? errors.email.message : ""
                                }
                            </p>
                        </div>
                    </div>

                    <div className=' flex flex-col md:flex md:flex-row md:justify-evenly '>

                        <div className='mt-3 md:mt-0 md:w-1/2'>

                            <Input
                                type="password"
                                placeholder='Palavra-passe'
                                name='password'
                                textLabel='Palavra-passe'
                                Icon={Eye}
                                register={register}
                            />
                            <p className='text-red-600 text-sm'>
                                {
                                    errors.password ? errors.password.message : ""
                                }
                            </p>

                        </div>
                        <div className='mt-3 md:mt-0 md:w-1/2 md:ml-2'>

                            <Input
                                type="password"
                                placeholder='Confirme a sua Palavra-passe'
                                name='confpassword'
                                textLabel='Confirme a sua Palavra-passe'
                                Icon={Eye}
                                register={register}
                            />
                            <p className='text-red-600 text-sm'>
                                {
                                    errors.confpassword ? errors.confpassword.message : ""
                                }
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-3'>
                        <button className='text-white cursor-pointer bg-black rounded-sm p-3 w-11/12 md:w-1/2'>
                            Criar conta
                        </button>
                    </div>
                    <div className='w-11/12 text-end'>
                        <p className='text-center text-sm   cursor-pointer mt-3'>
                            Já Possui uma Conta? <Link to={"/login"} ><span className='font-semibold'>Login</span></Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
