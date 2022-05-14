import { connect } from "react-redux";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  LoadAllUserEvents,
  DeleteAnEvent,
} from "../store/Actions/eventActions";
const mapStateToProps = ({ eventState }) => {
  return { eventState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: (userId) => dispatch(LoadAllUserEvents(userId)),
    endEvent: (id) => dispatch(DeleteAnEvent(id)),
  };
};
const UserProfile = (props) => {
  const navigate = useNavigate();

  let { userId } = useParams();
  userId = parseInt(userId);

  const deleteEvent = async (event) => {
    await props.endEvent(event.id);
    props.fetchEvents(userId);
  };

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
                <button onClick={() => navigate(`/user/event/${event.id}`)}>
                  Update
                </button>
                <button onClick={() => deleteEvent(event)}>Delete</button>
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
