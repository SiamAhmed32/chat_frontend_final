"use client";

import { useRegisterMutation } from "@/stores/services/userApiSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input, PrimaryButton } from "../reusables";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [register, { isLoading, error, isError }] = useRegisterMutation();
  const router = useRouter();

  
  //input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    // React.ChangeEvent -> this is car
    //HTMLInputElement -> this is value/brand
    // if we accidently use HTMLButtonElement it will give error and we can't access .value from here which is input

    const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };
    
    //form submission
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        try{
            const result = await register(formData).unwrap()
            localStorage.setItem('userToken', result.token)
            router.push('/chat')
        }catch(err){
            console.error("Registration Failed Please Try Again")
        }
    }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Input
        name="name"
        value={formData.name}
        label="Name"
        type="text"
        placeholder="Enter Your Name"
        onChange={handleInputChange}
        error={isError?(error as any)?.data?.message:""}
        required
      />
      <Input
      name="email"
      value={formData.email}
        label="Email"
        type="email"
        placeholder="name@example.com"
        onChange={handleInputChange}
        required
      />
      <Input
      name="password"
      value={formData.password}
        label="Password"
        type="password"
        placeholder="********"
        onChange={handleInputChange}
        required
      />
      <PrimaryButton
        type="submit"
        isLoading={isLoading}
        className="w-75 mt-2"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </PrimaryButton>
    </form>
  );
};

export default RegisterForm;
