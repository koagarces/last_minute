import { Link } from "react-router-dom";

const Nav = (props) => {
  const userId = props.user;
  console.log(userId.id);

  return (
    <div>
      <Link to={`/user/${userId.id}`}>Profile</Link>
      <Link to={`/user/event/create`}>New Event</Link>
      <Link to={`/matches/${userId.id}`}>Matches</Link>
      <Link to={`/`}>Sign Out</Link>
    </div>
  );
};

export default Nav;
