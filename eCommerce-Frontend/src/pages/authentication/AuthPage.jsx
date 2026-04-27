import { Link } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import clsx from "clsx";

const AuthPage = () => {
  const [joined, setJoined] = useState(true);

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-15 w-full flex items-center padding-x">
        <Link to="/" className="font-black tracking-wider uppercase text-base">
          ALPHA
        </Link>
      </div>
      
      <div className="px-4 py-20 max-w-[500px] mx-auto flex flex-col gap-4">
        <h1 className="font-medium text-2xl">
          Now let's make you an ALPHA Member.
        </h1>

        <div className="font-medium flex ">
          <button
            type="button"
            aria-label="login form"
            className={clsx(
              "cursor-pointer uppercase w-full h-10 transition-all duration-200 hover:bg-surface-glass text-xs font-semibold",
              joined && "border-b-2 border-primary",
            )}
            onClick={() => setJoined(true)}
          >
            Login
          </button>
          <button
            type="button"
            aria-label="registering form"
            className={clsx(
              "cursor-pointer uppercase w-full h-10 transition-all duration-200 hover:bg-surface-glass text-xs font-semibold",
              !joined && "border-b-2 border-primary",
            )}
            onClick={() => setJoined(false)}
          >
            Join us
          </button>
        </div>

        {joined ? <LoginForm /> : <RegisterForm />}
      </div>

      <div className="py-5 w-full flex items-center padding-x">
        <div className="flex flex-col gap-1 text-secondary">
          <p className="font-black tracking-wider text-base">
          ALPHA account
        </p>
        <p className="text-xs">Copyright © 1995-2026 Samsung. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
