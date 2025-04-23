import { House, LogOut, Menu, X } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import avatar from "./../assets/black-woman-smiling-portrait-vector-600nw-2281497689 1.png"
import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsopen] = useState(false)
    function HandleMenuChange() {
        if (isOpen) {
            gsap.to(".openMenu", {
                y: -140
            })
        } else {
            gsap.to(".openMenu", {
                y: 0
            })
        }
    }

    return (
        <div className=' w-full z-50 '>
            <header className='h-24 bg-black text-white w-full flex flex-row justify-around items-center  '>

                <div className="flex flex-row items-center p-2 ">
                    <p className='font-bold text-2xl '>SamasCasas</p>
                    <House className='font-extrabold ml-1' size={30} />

                </div>
                <nav className='w-7/12 flex items-center justify-end hidden  xl:flex'>

                    <ul className='text-xl flex flex-row w-1/2   justify-between  '>
                        <li className=' cursor-pointer hover:border-b-red-900'>Home</li>
                        <li>Sobre Nós</li>
                        <li>Contactos</li>
                    </ul>

                    <div className='flex items-center justify-end w-5/12  '>
                        <div className='w-1/4 flex justify- '>
                            <button className='bg-white text-black p-2 ml-5 rounded-sm cursor-pointer w-'>
                        
                                <p className='hidden xl:block'>
                                Anuncie 
                                </p>
                            </button>
                        </div>
                        <div className='flex  items-center ml-7 '>
                            <div className='bg-white rounded-full text-black w-16 h-14 flex flex-row justify-center items-center'>
                              <img src={avatar} 
                              alt='avatar'
                              />
                            </div>
                            <div className='text-sm ml-2 hidden lg:block'>
                                Olá Daniel Samassumba!
                            </div>
                        </div>
                        <div className='ml-5 '>
                            <LogOut size={30} className='cursor-pointer' />
                        </div>
                    </div>
                </nav>
                <nav className='xl:hidden'>
                    {
                        isOpen ?
                            <X className=''
                                size={35}
                                onClick={
                                    () => {
                                        HandleMenuChange()
                                        setIsopen(false)
                                    }
                                }
                            />
                            : <Menu className=''
                                size={35}
                                onClick={
                                    () => {
                                        HandleMenuChange()
                                        setIsopen(true)
                                    }
                                }
                            />

                    }
                </nav>
            </header>
            <div className=' overflow-hidden absolute z-50 w-full'>
                <div className='-translate-y-40 bg-black text-white p-2  openMenu xl:hidden'>
                    <ul className='text-xl flex flex-col w-5/12   justify-between  '>
                        <li className=' border-b-red-600'>Home</li>
                        <li>Sobre Nós</li>
                        <li>Contactos</li>
                    </ul>
                    <div>
                        <button className='bg-white text-black p-2  rounded-sm cursor-pointer'>Anuncie o seu Imovel +</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
