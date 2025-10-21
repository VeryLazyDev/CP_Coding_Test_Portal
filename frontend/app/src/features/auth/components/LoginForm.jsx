import React, { useState } from "react";
import TextInput from "../../../components/common/TextInput";
import PasswordInput from "../../../components/common/PasswordInput";
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { login } from "../../../services/authService";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  setLoading(true);
  try {
    const response = await login(data);

    // If your API wraps the user in data.data
    const userData = response.data; 

    console.log(userData);
    

    if (response.status === 200 && userData?.token) {
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", userData.username);
      localStorage.setItem("role", userData.role);

      if (userData.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("Login failed!");
  } finally {
    setLoading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 p-1.5 rounded-sm
 md:w-2/6 w-4/6
    "
    >
      <div className="text-4xl text-center font-bold text-blue-500">
        City Properties
      </div>

      <TextInput
        placeholder={"Username"}
        {...register("username", { required: true })}
        error={errors.username && "Username is required"}
      />
      <PasswordInput
        {...register("password", { required: true })}
        error={errors.username && "Password is required"}
      />

      <button
        disabled={isLoading}
        type="submit"
        className="w-full cursor-pointer bg-blue-500 rounded-md px-2 py-2 text-white text-xl font-medium"
      >
        {isLoading ? <ClipLoader size={20} color="text-white" /> : "LOGIN"}
      </button>
    </form>
  );
};

export default LoginForm;
