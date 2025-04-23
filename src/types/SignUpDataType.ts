import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required("este campo é obrigatorio"),
    email: yup.string().email().required("este campo é obrigatorio").email("email invalido"),
    password: yup.string().required("este campo é obrigatorio"),
    confpassword:yup.string().required("este campo é obrigatorio"),
})

export { schema }