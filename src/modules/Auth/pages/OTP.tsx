import React, { useState } from 'react'
import { House } from 'lucide-react'
export default function OTP() {
    const [inputs, setInputs] = useState(new Array(5).fill(''))
    const [isEmpty, setIsEmpty] = useState(false)
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        setInputs([
            ...inputs.map((input, i) => i == index ? e.target.value : input)
        ])
        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }
    }
    function handleInpuBackspace(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        e.key === 'Backspace' && index !== 0 && index < inputs.length ? e.target.previousSibling?.focus() : null
        setInputs([
            ...inputs.map((input, i) => i == 4 ? e.target.value : input)
        ])
        if (e.target.value) {
            e.target.value = ''
        }
    }

    function handleVerifyOTP() {
        console.log(inputs)
        const FiedsIsEmpty = inputs.filter((input) => input != '')
        if (FiedsIsEmpty.length == 5) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }

    }
    return (
        <div className='h-svh bg-background flex justify-center items-center'>
            <div className='bg-white p-3 h-3/7 rounded-sm w-11/12 md:w-1/2 lg:w-1/3'>
                <div>
                    <div className='flex flex-row items-center p-2 '>
                        <p className='font-bold text-lg'>SamasCasas</p>
                        <House className='ml-2' size={24} />
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-bold text-center'>Insere o Codigo OTP</h1>
                    <p className='text-sm text-zinc-400 text-center mt-2'>
                        Abra o seu email,   Enviamos uma senha no seu email
                    </p>
                </div>

                <form action="">
                    <div className='flex flex-row justify-evenly mt-5'>
                        {
                            inputs.map((input, index) => (
                                <input type="text"
                                    required
                                    placeholder='0'
                                    maxLength={1}
                                    onChange={(e) => handleInputChange(e, index)}
                                    onKeyDown={(e) => handleInpuBackspace(e, index)}
                                    key={index}
                                    className={isEmpty ?`border border-red-600 h-14 w-14 rounded text-center`: `border border-zinc-600 h-14 w-14 rounded text-center`}
                                />

                            ))
                        }
                    </div>
                    <div className='flex justify-center w-full mt-4'>
                        <button className='text-white bg-black w-10/12 p-3 rounded-sm mt-4 cursor-pointer'
                            onClick={handleVerifyOTP}
                            type='button'
                        >
                            Verificar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
