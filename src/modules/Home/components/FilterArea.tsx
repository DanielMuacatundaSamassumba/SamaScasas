import { House } from 'lucide-react'
import React from 'react'
import Card from './Card'

export default function FilterArea() {
    return (
        <div className='w-full flex justify-center h-full xl:w-1/3 xl:justify-end '>

            <div className=' bg-white  w-11/12 h-3/9  rounded-sm p-4 mt-2 md:w-8/12'>
                <div className="flex flex-row items-center p-2 justify-center ">
                    <p className='font-bold text-2xl text-center'>SamasCasas</p>
                    <House className='font-extrabold ml-1' size={26} />
                </div>

                <div className=''>
                    <p className='font-semibold text-zinc-500'>Filter a  sua pesquisa</p>
                </div>

                <form className='flex flex-col justify-center items-center  '>

                    <div className='w-full flex justify-center'>
                        <select className=' outline-none border p-3 text-zinc-500 border-zinc-300 mt-2 rounded-sm w-11/12'>
                            <option value="">Tipo de Imovel</option>
                            <option value="">1</option>
                            <option value="">1</option>
                        </select>
                    </div>

                    <div className='w-full flex justify-center mt-4'>
                        <select className='border outline-none text-zinc-500 border-zinc-300 p-3 rounded-sm w-11/12'>
                            <option value="">Tipologia</option>
                            <option value="">1</option>
                            <option value="">1</option>
                        </select>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button className='bg-black text-white p-3 mt-3 rounded-sm w-11/12'>Pesquisar</button>
                    </div>

                </form>

            </div>

        </div>
    )
}
