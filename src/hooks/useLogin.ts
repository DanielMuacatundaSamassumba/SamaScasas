import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../types/LoginDatatype"
import { yupResolver } from "@hookform/resolvers/yup";
export default function useLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const Onsubmit = (data: any) => {
        console.log(data)
    }

    return {
        register,
        handleSubmit,
        errors,
        Onsubmit
    }
}