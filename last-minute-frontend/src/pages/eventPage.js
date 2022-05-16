import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadSingleEvent } from "../store/Actions/eventActions";
import { UploadNewMatch } from "../store/Actions/matchActions";

const mapStateToProps = ({ eventState, matchState }) => {
  return { eventState, matchState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (id) => dispatch(LoadSingleEvent(id)),
    makeMatch: (userId, eventId) => dispatch(UploadNewMatch(userId, eventId)),
  };
};

const EventPage = (props) => {
  let { id } = useParams();
  id = parseInt(id);
  let eventId = `${props.eventState.event.id}`;
  let userId = props.user.id;
  console.log(userId);
  // let navigate=useNavigate()
  useEffect(() => {
    props.fetchEvent(`${id}`);
  }, []);

  const addAndTravelToMatches = () => {
    return props.makeMatch(userId, eventId);
  };

  return (
    <div>
      <h1>{props.eventState.event.eventName}</h1>
      <h2>{props.eventState.event.date}</h2>
      <div>
        <img src={props.eventState.event.image} />
      </div>
      <p>{props.eventState.event.description}</p>
      <button className="match-button" onClick={() => addAndTravelToMatches()}>
        Match
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
