import React, { useState } from 'react'
import { Login } from '../../components/login/Login'
import { ResetPassword } from '../../components/password-reset/PasswordReset'
import './entry.css'

export const Entry = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')

  const handleOnChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        break
    }
  }

const handleOnSubmit = (e) => {
  e.preventDefault()

  if(!email || !password) {
    return alert("All fields are required")
  }
  // Todo - Call api to submit the form
  console.log(email, password);
}

const handleOnResetSubmit = (e) => {
  e.preventDefault()

  if(!email) {
    return alert("Please enter your email!")
  }
  // Todo - Call api to Reset Password
  console.log(email, password);
}

const handleFormSwitch = (formType) => {
  setFormLoad(formType)
}

  return (
    <div className='entry-page bg-info'>

      <div className="jumbotron bg-light form-box">
        <div className="container-fliud">
          {formLoad === 'login' ? 
          <Login handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
            email={email}
            password={password}
            handleFormSwitch={handleFormSwitch}
          />
          :
          <ResetPassword handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          handleFormSwitch={handleFormSwitch}
            email={email}
          />
        }
        </div>
      </div>
    </div>
  )
}
