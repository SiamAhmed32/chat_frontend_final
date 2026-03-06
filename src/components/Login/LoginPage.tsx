import React from 'react'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700 gap-5">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage