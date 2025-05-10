import * as yup from 'yup';
const schemaForgetPassword = yup.object({
     email:yup.string().email().required("este campo é obrigatorio").email("email invalido"),
})
export { schemaForgetPassword }