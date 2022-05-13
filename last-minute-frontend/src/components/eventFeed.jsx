import { connect } from "react-redux";
import { useEffect } from "react";
import { LoadEvents } from "../store/Actions/eventActions";
import { UploadNewMatch } from "../store/Actions/matchActions";
const mapStateToProps = ({ eventState, matchState }) => {
  return { eventState, matchState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(LoadEvents()),
    makeMatch: () => dispatch(UploadNewMatch()),
  };
};


const EventFeed = (props) => {
  useEffect(() => {
    props.fetchEvents();
  }, []);
  let active = props.eventState.events.searching === true;
  return (
    <main>
      <div>this works</div>
      <div>
        {props.eventState.events.map((event) => (
          <div>
            {active ? null : (
              <>
                <h1>{event.eventName}</h1>
                <img className="eventPicture" src={event.image} />
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);
