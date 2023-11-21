import React,{ useState} from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { initiaValues } from './RegisterForm.form'
import "./RegisterForm.scss"




export function RegisterForm() {
  const [error, setError] = useState("")

  const formik = useFormik({
    initialValues: initiaValues(),
    onSubmit: async (formValue) => {
      try {
        console.log(formValue)
      } catch (error) {
        console.log(error)

      }
    }

  })




  return (
   <Form className='register-form' onSubmit={formik.handleSubmit}>
    <Form.Input name="email"placeholder="correo electronico" onChange={formik.handleChange} value= {formik.values.email}/>
    <Form.Input name="password" type = "password"placeholder="contraseña"/>
    <Form.Input name="repeatPassword" type = "password"placeholder=" repetir contraseña"/>
    <Form.Checkbox name="conditionsAccepted" label = "he leido y acepto las politicas de privacidad."/>
    <Form.Button type='submit' primary fluid>Crear cuenta</Form.Button>

    <p className='register-form_error'>{error}</p>

   </Form>
  )
}