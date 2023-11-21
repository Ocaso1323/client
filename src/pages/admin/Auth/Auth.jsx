import React, { useState } from 'react'
import { Tab, Grid, GridColumn } from 'semantic-ui-react'
import { iconLogo } from "../../../assets"
import "./Auth.scss"
import { RegisterForm } from '../../../components/Admin/Auth/RegisterForm'


export function Auth() {
  const [activeIndex, setActiveIndex] = useState(1) 
  const openLogin = () => setActiveIndex(0)
  const panes = [
    {
      menuItem: "ENTRAR",
      render: () => (
        <Tab.Pane>
          <h2>LOGIN FORM</h2>
        </Tab.Pane>
      )
    },
    {
      menuItem: "NUEVO USUARIO",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin= {openLogin} />
        </Tab.Pane>
      )
    }
  ]

  return (
   <Grid columns={1}>
    <GridColumn mobile={16} tablet={16} computer={16}>
      <div className='auth'>
      <div>
      <img src={iconLogo} className='logo'/>
      </div>
      <Tab panes={panes} className="auth_forms" activeIndex={activeIndex } onTabChange={(_, data) =>  setActiveIndex(data.activeIndex)} />
      </div>
    </GridColumn>
   </Grid>
  )
}



