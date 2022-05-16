import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/home.css";

const Home = (props) => {
  useEffect(() => {
    props.toggleAuthenticated(false);
  }, []);

  return (
    <div className="homeApp">
      <div className="info">
        <img className="logo" src="/Artboard_1.png"></img>
      </div>
      <div className="buttons">
        <Link to="/sign-up">
          <button className="btn" type="submit">
            Sign Up!
          </button>
        </Link>
        <Link to="/sign-in">
          <button className="btn" type="submit">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
