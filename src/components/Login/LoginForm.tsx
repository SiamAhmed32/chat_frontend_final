"use client";

import { useLoginMutation } from "@/stores/services/userApiSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, PrimaryButton } from "../reusables";
import { setCredentials } from "@/stores/slices/authSlice";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading, error, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  //ALL hanlders
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login(formData).unwrap();
      localStorage.setItem("userToken", result.token);
      dispatch(setCredentials(result));
      // router.push('/chat')
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Input
        name="email"
        value={formData.email}
        label="Email"
        type="email"
        placeholder="name@example.com"
        onChange={handleInputChange}
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
      <PrimaryButton type="submit" isLoading={isLoading} className="mt-2">
        {isLoading ? "Signing in..." : "Sign In"}
      </PrimaryButton>
    </form>
  );
};

export default LoginForm;
