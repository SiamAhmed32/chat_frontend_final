import React from 'react'
import RegisterHeader from './RegisterHeader'
import RegisterForm from './RegisterForm'

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <RegisterHeader />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage