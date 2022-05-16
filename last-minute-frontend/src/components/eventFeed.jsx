import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadEvents } from "../store/Actions/eventActions";
import "../styles/feed.css";
const mapStateToProps = ({ eventState }) => {
  return { eventState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(LoadEvents()),
  };
};

const EventFeed = (props) => {
  let { id } = useParams();
  id = parseInt(id);
  let navigate = useNavigate();

  useEffect(() => {
    props.fetchEvents();
  }, []);
  const navigateToEvent = (event) => {
    console.log(`${event.id}`);
    navigate(`/events/${event.id}`);
  };
  return (
    <main className="allEvents">
      <div>
        {props.eventState.allEvents.map((event) => (
          <div onClick={() => navigateToEvent(event)}>
            {event.searching === false ? null : (
              <>
                <div className="singleEvent">
                  <h2>{event.eventName}</h2>
                  <p>{event.date}</p>
                  <img className="eventPicture" src={event.image} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);
