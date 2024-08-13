import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
type Props = {
  sigin: boolean;
  setSignin: (value: boolean) => void;
};

const Signin = ({ sigin, setSignin }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-black bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 dark:bg-black rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center dark:text-white text-black">
          SignIn to account
        </h2>
        <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium dark:text-gray-900 bg-white dark:bg-black border  border-gray-300 rounded-md hover:bg-gray-100">
          <img
            src={
              "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            }
            width={30}
            height={30}
            alt="Google"
          />
          <span>SignIn with Google</span>
        </button>
        <div className="flex items-center justify-center">
          <Button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            SignIn
          </Button>
        </div>
        <p className="text-sm text-center text-gray-400">
          Create account?
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={() => setSignin(!sigin)}
          >
            SignUp
          </a>
        </p>
      </div>
      <div className="absolute right-4 bottom-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="A" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Signin;
