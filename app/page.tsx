"use client";
import Signin from "@/components/siginin";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Component() {
  const [sigin, setSignin] = useState(true);
  const handleLogin = async () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/oneBox";
  };

  return (
    <div className="min-h-screen   bg-black flex flex-col w-full ">
      <header className="flex items-center justify-center h-16 px-4  shadow-md  border-b border-[#25262B]">
        <div className="flex items-center">
          <Link
            href="#"
            className="text-black font-bold text-lg"
            prefetch={false}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAGtbGL6Qv8LYLcjFORlUynJtjloBlZEZRMYe~3gB-FSwEbFBapCOuWb45F8~HcfobaWIJyLjsOKcWlqCnMTdgT00yCX5w6S5G7ZMODDm4ogvUVejfQnNJZlgvWtBuRqU2dDV9z4hXpuyCo4IcBuMk6AK9aNpk9h25B9l8V7Y3TcNfTdL-PlHZX6u~PsYeZi-6bJnM43Vue4OoSkv9ezBMlhNGvWo5yrP3lfc0KEckHhtC8XVn5G1EoZh8IEdWNPnRkriFembYNOvH45RLtkRRCfSh8jjZtarC~NUZRU91IhEWVfcSCCVtx4eM~A2Q7ppwMAy8dtg6RBkI9~VTcVoQ__"
              width={200}
              alt=""
            />
          </Link>
        </div>
      </header>
      {sigin ? (
        <div className="flex  justify-center items-center my-auto p-6 ">
          <div className="w-full max-w-md md:p-8 p-6 space-y-6  rounded-lg shadow-lg  border-[#343A40] border bg-gradient-to-r from-[#111214]  to-[#121212] ">
            <h2 className="text-xl md:text-2xl font-bold text-center text-white ">
              Create a new account
            </h2>
            <Button
              type="button"
              onClick={handleLogin}
              className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium bg-inherit border border-[#707172] rounded-md  text-[#CCCCCC] hover:bg-[#1A1C1F]"
            >
              <img
                src={
                  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                }
                width={30}
                height={30}
                alt="Google"
              />
              <span>Sign Up with Google</span>
            </Button>
            <div className="flex items-center justify-center">
              <Button
                type="button"
                onClick={handleLogin}
                className="text-white bg-gradient-to-r from-[#4B63DD]  to-[#0524BF] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Create an Account
              </Button>
            </div>
            <p className="text-sm text-center text-[#909296]">
              Already have an account?{" "}
              <a
                href="#"
                className="text-[#C1C2C5] hover:underline"
                onClick={() => setSignin(!sigin)}
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      ) : (
        <Signin sigin={sigin} setSignin={setSignin} />
      )}

      <div className="text-white bg-[#121212] flex justify-center p-2">
        <h1 className="text-[#5C5F66] text-[12px]">
          © 2023 Reachinbox. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
