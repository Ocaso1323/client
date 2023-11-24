import React from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { Auth } from '../../../../api'
import { initialValues, validationSchema } from './LoginForm.Form'


const authController = new Auth()

export function LoginForm() {
    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
          const response = await authController.login(formValue);
          if (response) {
            console.log(response);
          } else {
            console.log("Response is undefined or null");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input name='email' placeholder= "correo electronico" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email} />
        <Form.Input type='password' name='password' placeholder= "contraseña" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password}/>

        <Form.Button type='submit' primary fluid loading = {formik.isSubmitting}>Entrar</Form.Button>
    </Form>
  )
}
