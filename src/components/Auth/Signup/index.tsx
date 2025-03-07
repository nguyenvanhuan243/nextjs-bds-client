"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const formatEmail = email.trim();
    const formatPassword = password.trim();
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/create-new-user`, {
      email: formatEmail,
      password: formatPassword,
    }).then((res) => {
      if (res.status === 201) {
        toast.success("User created successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        window.location.replace("/signin");
      } else {
        toast.error("User creation failed", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    }).catch((err) => {
      toast.error(err.response.data.message[0], {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    });
  };

  return (
    <>
      <Breadcrumb title={"Signup"} pages={["Signup"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
                Create an Account
              </h2>
              <p>Enter your detail below</p>
            </div>

            <span className="relative z-1 block font-medium text-center mt-4.5">
              <span className="block absolute -z-1 left-0 top-1/2 h-px w-full bg-gray-3"></span>
              <span className="inline-block px-3 bg-white">Or</span>
            </span>

            <div className="mt-5.5">
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5">
                  Email Address <span className="text-red">*</span>
                </label>

                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5">
                  Password <span className="text-red">*</span>
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
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
                onClick={handleSignup}
                className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5"
              >
                Create Account
              </button>

              <p className="text-center mt-6">
                Already have an account?
                <Link
                  href="/signin"
                  className="text-dark ease-out duration-200 hover:text-blue pl-2"
                >
                  Sign in Now
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

export default Signup;
