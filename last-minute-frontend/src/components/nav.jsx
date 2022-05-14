import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Nav = (props) => {
  const userId = parseInt(props.user);
  console.log(userId);

  return (
    <div>
      <Link to={`/user/${userId}`}>Profile</Link>
    </div>
  );
};

export default Nav;
