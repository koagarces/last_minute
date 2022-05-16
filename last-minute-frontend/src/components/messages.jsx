import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadEvents } from "../store/Actions/eventActions";
const mapStateToProps = ({ eventState }) => {
  return { eventState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: (userId) => dispatch(LoadEvents(userId)),
  };
};

const Messages = (props) => {
  let { userId } = useParams();
  userId = parseInt(userId);
  let navigate = useNavigate();

  useEffect(() => {
    // props.fetchEvents(userId);
  }, []);
  const navigateToEvent = (event) => {
    console.log(`${event.id}`);
    navigate(`/events/${event.id}`);
  };
  return (
    <main>
      {/* <div>
        {props.eventState.events.map((event) => (
          <div onClick={() => navigateToEvent(event)}>
            {event.searching === false ? null : (
              <>
                <h2>{event.eventName}</h2>
                <p>{event.date}</p>
                <img className="eventPicture" src={event.image} />
              </>
            )}
          </div>
        ))}
      </div> */}
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
