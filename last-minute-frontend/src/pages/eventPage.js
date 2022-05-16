import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadSingleEvent } from "../store/Actions/eventActions";
import { UploadNewMatch } from "../store/Actions/matchActions";
import "../styles/eventpage.css";

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
    <div className="wholeEvent">
      <h2 className="eventTitle">{props.eventState.event.eventName}</h2>
      <p>{props.eventState.event.date}</p>
      <div>
        <img className="eventImg" src={props.eventState.event.image} />
      </div>
      <p>{props.eventState.event.description}</p>
      <button className="eventbutton" onClick={() => addAndTravelToMatches()}>
        Match
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
