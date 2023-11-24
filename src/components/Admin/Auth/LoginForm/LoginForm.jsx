import React from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
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
    <Form>
        <Form.Input className='email'placeholder= "correo electronico"/>
        <Form.Input className='password'placeholder= "conraseña"/>
        <Form.Button type='submit' primary fluid>Entrar</Form.Button>
    </Form>
  )
}
