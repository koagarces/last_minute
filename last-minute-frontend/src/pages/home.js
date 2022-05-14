import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Last Minute</h1>
        <p>Find your plus 1 to your social outings!</p>
      </div>
      <Link to="/sign-up">
        <button className="register-btn" type="submit">
          Sign Up!
        </button>
      </Link>
      <Link to="/sign-in">
        <button className="login-btn" type="submit">
          Log In
        </button>
      </Link>
    </div>
  );
};

export default Home;
