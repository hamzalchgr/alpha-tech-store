import { Link } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import clsx from "clsx";

const AuthPage = () => {
  const [joined, setJoined] = useState(true);

  return (
    <div className="px-4 py-20 max-w-[460px] mx-auto flex flex-col gap-4">
      <Link to="/" className="font-black tracking-wider uppercase text-base">
        ALPHA
      </Link>

      <h1 className="font-medium text-2xl">
        Now let's make you an ALPHA Member.
      </h1>

      <div className="font-medium flex ">
        <button
          type="button"
          aria-label="login form"
          className={clsx(
            "cursor-pointer uppercase w-full h-10 transition-all duration-200 hover:bg-surface text-xs font-semibold",
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
            "cursor-pointer uppercase w-full h-10 transition-all duration-200 hover:bg-surface text-xs font-semibold",
            !joined && "border-b-2 border-primary",
          )}
          onClick={() => setJoined(false)}
        >
          Join us
        </button>
      </div>

      {joined ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default AuthPage;
