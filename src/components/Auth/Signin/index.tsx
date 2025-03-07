"use client"; // Render 1. Server side rendering 2. Client side rendering
import Breadcrumb from "@/components/Common/Breadcrumb";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react"; // https://legacy.reactjs.org/docs/hooks-state.html
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    const formatEmail = email.trim();
    const formatPassword = password.trim();
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-in`, {
      email: formatEmail,
      password: formatPassword,
    }).then((res) => {
      console.log(res.data.access_token);
      localStorage.setItem("accessToken", res.data.access_token);
      window.location.replace("/");
    }).catch((err) => {
      toast.error(err.response.data.message[0], {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }
  return (
    <>
      <Breadcrumb title={"Signin"} pages={["Signin"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
                Sign In to Your Account
              </h2>
              <p>Enter your detail below</p>
            </div>

            <div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5">
                  Email
                </label>

                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5">
                  Password
                </label>

                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="on"
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>

              <button
                onClick={handleSignin}
                className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5"
              >
                Sign in to account
              </button>

              <a
                href="#"
                className="block text-center text-dark-4 mt-4.5 ease-out duration-200 hover:text-dark"
              >
                Forget your password?
              </a>

              <span className="relative z-1 block font-medium text-center mt-4.5">
                <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
                <span className="inline-block px-3 bg-white">Or</span>
              </span>

              <p className="text-center mt-6">
                Don&apos;t have an account?
                <Link
                  href="/signup"
                  className="text-dark ease-out duration-200 hover:text-blue pl-2"
                >
                  Sign Up Now!
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Signin;


// https://www.npmjs.com/package/react-toastify