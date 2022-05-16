import { Link } from "react-router-dom";
import "../styles/nav.css";
const Nav = (props) => {
  const userId = props.user;
  console.log(userId.id);

  return (
    <div className="navbar">
      <Link className="links" to={`/user/${userId.id}`}>
        Profile
      </Link>
      <Link className="links" to={`/user/event/create`}>
        New Event
      </Link>
      <Link className="links" to={`/matches/${userId.id}`}>
        Matches
      </Link>
      <Link className="links" to={`/`}>
        Sign Out
      </Link>
    </div>
  );
};

export default Nav;
