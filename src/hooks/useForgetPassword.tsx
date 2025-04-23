import React from 'react'
import { useForm } from 'react-hook-form'
import { schemaForgetPassword } from '../types/ForgetPasswordDatatype'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
export default function useForgetPassword() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schemaForgetPassword)
    })
    const navegate = useNavigate()
    function Onsubmit(data: any) {
        console.log(data)
        navegate('/forget-password/otp')
    }
    return {
        handleSubmit,
        Onsubmit,
        register,
        errors
    }
}
