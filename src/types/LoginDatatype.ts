import * as yup from 'yup';

const schema = yup.object({
     email:yup.string().email().required("este campo é obrigatorio").email("email invalido"),
     password:yup.string().required("este campo é obrigatorio")
})
export  { schema }