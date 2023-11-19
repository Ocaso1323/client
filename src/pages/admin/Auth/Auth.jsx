import React from 'react'
import { Tab } from 'semantic-ui-react'
import { iconLogo } from "../../../assets"
import "./Auth.scss"

export function Auth() {
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
          <h2>REGISTER FORM</h2>
        </Tab.Pane>
      )
    }
  ]

  return (
    <div className='auth'>
      <img src={iconLogo} className='logo' alt="Logo" />
      <Tab panes={panes} className="auth_forms" />
    </div>
  )
}