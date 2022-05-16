import { RegisterUser } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/signup.css";

const SignUp = () => {
  let navigate = useNavigate();
  const [registerValues, setRegisterValues] = useState({
    firstName: "",
    sex: "",
    userName: "",
    about: "",
    email: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      firstName: registerValues.firstName,
      sex: registerValues.sex,
      userName: registerValues.userName,
      about: registerValues.about,
      city: registerValues.city,
      state: registerValues.state,
      email: registerValues.email,
      password: registerValues.password,
    });
    setRegisterValues({
      firstName: "",
      sex: "",
      userName: "",
      about: "",
      city: "",
      state: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/sign-in");
  };

  return (
    <div className="body">
      <h2 className="register">Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="firstName"
          placeholder="first name"
          value={registerValues.firstName}
          required
        />
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="sex"
          placeholder="last name"
          value={registerValues.sex}
          required
        />
        <input
          className="formInput"
          type="username"
          onChange={handleChange}
          name="userName"
          placeholder="username"
          value={registerValues.userName}
          required
        />
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="city"
          placeholder="city"
          value={registerValues.city}
          required
        />
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="state"
          placeholder="state"
          value={registerValues.state}
          required
        />
        <input
          className="about-you formInput"
          type="text"
          onChange={handleChange}
          name="about"
          placeholder="about you!"
          value={registerValues.about}
          required
        />
        <input
          className="formInput"
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="your email"
          value={registerValues.email}
          required
        />
        <input
          className="formInput"
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
          value={registerValues.password}
          required
        />
        <input
          className="formInput"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          placeholder="confirm password"
          value={registerValues.confirmPassword}
          required
        />
        <button
          className="button"
          disabled={
            !registerValues.email ||
            (!registerValues.password &&
              registerValues.confirmPassword === registerValues.password)
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
