import React from 'react'
import { Form } from 'semantic-ui-react'
import { Formik, useFormik } from 'formik'
import { initialValues, validationSchema } from './LoginForm.Form'



export  function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema : validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log(formValue) 
            } catch (error) {
                console.log(error)
            }
        }

            
    })

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input name='email' placeholder= "correo electronico" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email} />
        <Form.Input type='password' name='password' placeholder= "contraseña" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password}/>

        <Form.Button type='submit' primary fluid loading = {Formik.isSubmitting}>Entrar</Form.Button>
    </Form>
  )
}
