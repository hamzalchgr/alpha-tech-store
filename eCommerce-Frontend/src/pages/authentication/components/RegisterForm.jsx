import { Link } from "react-router-dom";
import { useState } from "react";
import Checkbox from "../../../components/ui/Checkbox";

const RegisterForm = () => {
  const [checked, setChecked] = useState(true);

  return (
    <form action="" className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
        <label
          className="flex flex-col gap-1 text-xs font-medium"
          htmlFor="first-name"
        >
          First name (Required)
          <input
            className="form-input"
            type="text"
            id="first-name"
            label="First name (Required)"
          />
        </label>

        <label
          className="flex flex-col gap-1 text-xs font-medium"
          htmlFor="last-name"
        >
          Last name (Required)
          <input
            className="form-input"
            type="text"
            id="last-name"
            label="last name (Required)"
          />
        </label>
      </div>

      <label
        className="flex flex-col gap-1 text-xs font-medium"
        htmlFor="email"
      >
        eMail (Required)
        <input
          className="form-input"
          type="email"
          id="email"
          label="email (Required)"
        />
      </label>

      <label
        className="flex flex-col gap-1 text-xs font-medium"
        htmlFor="password"
      >
        Password (Required)
        <input
          className="form-input"
          type="password"
          id="password"
          label="Password (Required)"
        />
      </label>

      <Checkbox
        checked={checked}
        setChecked={setChecked}
        label="Add me to the ALPHA mailing list"
      />

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

      <button className="btn-primary">create accounte</button>
    </form>
  );
};

export default RegisterForm;
