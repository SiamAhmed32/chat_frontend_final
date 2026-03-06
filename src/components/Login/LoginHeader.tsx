import React from 'react'

type Props = {}

const LoginHeader = (props: Props) => {
    return (
        <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-600">Login to your account</p>
        </div>
    )
}

export default LoginHeader