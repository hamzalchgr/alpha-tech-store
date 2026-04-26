import { Link } from "react-router-dom";
import { useState } from "react";
import Checkbox from "../../../components/ui/Checkbox";

const LoginForm = () => {
  const [checked, setChecked] = useState(false);

  return (
    <form action="" className="flex flex-col gap-5">
      <label className="flex flex-col gap-1 text-xs font-medium" htmlFor="email">eMail (Required)
      <input className="form-input" type="email" id="email" label="Email (Required)" />
      </label>
<label className="flex flex-col gap-1 text-xs font-medium" htmlFor="password">Password (Required)
      <input className="form-input" type="password" id="password" label="Password (Required)" /></label>

      <Checkbox
        checked={checked}
        setChecked={setChecked}
        label="Remember me on this computer"
      />

      <button className="btn-primary" type="submit">
        login
      </button>

      <p className="text-xs">
        By continuing, I confirm that I have read and accept the{" "}
        <Link className="underline" to="/terms">
          Terms and Conditions
        </Link>
        . and the{" "}
        <Link className="underline" to="/policy">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

export default LoginForm;
