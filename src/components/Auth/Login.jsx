import React from "react";
import { Input, Button } from "../index.js";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-quaternary">
        <div className="w-full max-w-md px-8 py-10 bg-white rounded-xl shadow-lg border border-slate-100">
          <h1 className="text-3xl font-extrabold text-primary text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-tertiary text-sm text-center mb-8">
            Please enter your details to sign in.
          </p>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <Input
                placeholder="Email"
                className="p-3 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg outline-none transition-all"
                type="text"
                labelName="Email:"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Input
                placeholder="Password"
                className="p-3 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg outline-none transition-all"
                type="password"
                labelName="Password:"
              />
            </div>

            <Button
              className="mt-4 bg-primary text-white font-medium py-3 rounded-lg shadow-sm hover:bg-secondary transition-colors duration-200"
              type="submit"
              btnName="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
