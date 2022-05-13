import { RegisterUser } from "../services/userServices";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      name: formValues.name,
      userName: formValues.userName,
      password: formValues.password,
    });
    setFormValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      <div>
        <h1>Last Minute Events</h1>
      </div>
      <div></div>
    </div>
  );
};

export default SignUp;
