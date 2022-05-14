import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInUser } from "../services/userServices";

const SignIn = (props) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ userName: "", password: "" });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate("/feed");
  };

  return (
    <div>
      <h2 className="login-register">Login</h2>
      <form className="form" onSubmit={submitData}>
        <input
          className="formInput"
          type="userName"
          value={formValues.userName}
          onChange={handleChange}
          name="userName"
          placeholder="userName"
          required
        />
        <input
          className="formInput"
          type="text-area"
          value={formValues.password}
          onChange={handleChange}
          name={"password"}
          placeholder={"password"}
          required
        />
        <button
          className="button"
          disabled={!formValues.userName || !formValues.password}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
