import React from 'react'
import { useForm } from 'react-hook-form'
import { schema } from '../types/SignUpDataType'
import { yupResolver } from '@hookform/resolvers/yup'
export default function useSign() {
    const { handleSubmit, register, formState:{ errors }}  = useForm({
         resolver:yupResolver(schema)
    })
    function Onsubmit(data:any){
        console.log(data)
    }
    return {
        Onsubmit,
        register,
        handleSubmit,
        errors
    }
}
