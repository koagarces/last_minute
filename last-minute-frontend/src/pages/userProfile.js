import { connect } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadAllUserEvents } from "../store/Actions/eventActions";
const mapStateToProps = ({ eventState }) => {
  return { eventState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: (userId) => dispatch(LoadAllUserEvents(userId)),
  };
};

const UserProfile = (props) => {
  let { userId } = useParams();
  userId = parseInt(userId);

  useEffect(() => {
    props.fetchEvents(userId);
  }, []);
  return (
    <main>
      <div>
        {props.eventState.events.map((event) => (
          <div>
            {event.searching === false ? null : (
              <>
                <h2>{event.eventName}</h2>
                <p>{event.date}</p>
                <Link to={`/user/event/${event.id}`}> Update </Link>
                <img className="eventPicture" src={event.image} />
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
