import { Link } from "react-router-dom";

const Nav = (props) => {
  const userId = props.user;
  console.log(userId.id);

  return (
    <div>
      <Link to={`/user/${userId.id}`}>Profile</Link>
    </div>
  );
};

export default Nav;
