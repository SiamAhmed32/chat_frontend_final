import React from "react";
import RegisterHeader from "./RegisterHeader";
import RegisterForm from "./RegisterForm";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-700">
      <div className= "bg-white py-4 lg:py-6 px-6 lg:px-12  border border-2xl rounded-2xl">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
