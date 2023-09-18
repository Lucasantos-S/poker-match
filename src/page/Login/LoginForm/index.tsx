import React from "react";
import InputEmail from "../../../components/Input/InputEmail";
import InputPassword from "../../../components/Input/InputPassword";
import PrimaryButton from "@/components/PrimaryButton";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.png";

export type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const { email, password } = watch();

  const buttonIsDisabled = !email || !password;


  const navigate = useNavigate();

  const userEmail = "teste@teste.com";
  const userPassword = "teste";

  const onSubmit = (data: FormValues) => {
    if (data.email === userEmail && data.password === userPassword)
      navigate("/home");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full w-full bg-transparent flex items-center justify-center"
    >
      <section className="w-3/5 h-3/4 bg- bg-gray-50 flex flex-col items-center justify-center gap-10 rounded-3xl shadow-2xl z-50 animate-form">
        <header className="w-32">
          <img src={Logo} alt="" />
        </header>
        <main className="flex flex-col w-[350px] gap-2 ">
          <div className="flex flex-col gap-10">
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputEmail
                  value={value}
                  onChange={onChange}
                  hasError={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputPassword
                  value={value}
                  onChange={onChange}
                  hasError={!!errors.password}
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </div>
          <span className="ml-2 text-base text-primary font-bold hover:underline cursor-pointer ease-in-out transition-all duration-400">
            Esqueci minha senha
          </span>
        </main>
        <footer className="w-[300px] mt-5">
          <PrimaryButton disabled={buttonIsDisabled}>Fazer Login</PrimaryButton>
        </footer>
      </section>
    </form>
  );
}
