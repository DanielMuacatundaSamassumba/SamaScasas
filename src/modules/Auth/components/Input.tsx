import React, { useState } from 'react'
import InputElementsType from '../types/InputElementsType'
import { EyeOff } from 'lucide-react'
export default function Input({ placeholder, Icon, type, name, textLabel, register }: InputElementsType) {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <div className='flex flex-col items-center w-11/12 '>
            <div className='w-full'>
                <label className='text-sm'>{textLabel}</label>
            </div>
            <div className='w-full flex flex-row-reverse items-center mt-2 border border-border-color p-1 rounded-sm '>
                <div className=''>
                    {Icon && type != "password" &&
                        <Icon color='#cccccc' />
                    }

                    {Icon && type === "password" && (
                        showPassword ? (
                            <Icon
                                color="#cccccc"
                                className="cursor-pointer"
                                onClick={() => {
                                    type = "text"
                                    setShowPassword(false)
                                }}
                            />
                        ) : (
                            <EyeOff
                                color="#cccccc"
                                className="cursor-pointer"
                                onClick={() => setShowPassword(true)}
                            />
                        )
                    )}


                </div>
                <input
                    type={type === "password" && showPassword ? "password" : "text"}
                    name={name}
                    placeholder={placeholder}
                    className='w-full p-2  rounded-sm outline-none'
                    {...register(name)}
                />
            </div>
        </div>
    )
}
