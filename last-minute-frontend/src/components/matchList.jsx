import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LoadMatchesByEvent,
  LoadMatchesByUser,
} from "../store/Actions/matchActions";
import { LoadAllUserEvents } from "../store/Actions/eventActions";
const mapStateToProps = ({ eventState, matchState }) => {
  return { eventState, matchState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchesByUser: (userId) => dispatch(LoadMatchesByUser(userId)),
    fetchMatchesByEvent: (eventId) => dispatch(LoadMatchesByEvent(eventId)),
    fetchUserEvents: (userId) => dispatch(LoadAllUserEvents(userId)),
  };
};

const MatchesList = (props) => {
  const [eventId, setEventId] = useState(Number);

  let { userId } = useParams();
  userId = parseInt(userId);

  const selectedEvent = (event) => {
    setEventId(event.id);
    props.fetchMatchesByEvent(eventId);
  };

  console.log(eventId);
  useEffect(() => {
    props.fetchMatchesByUser(`${userId}`);
    props.fetchUserEvents(`${userId}`);
  }, []);

  return (
    <main>
      <div>
        {props.matchState.userMatches.map((match) => (
          <div>
            <h2>{match.eventId}</h2>
          </div>
        ))}
      </div>
      <div>
        {props.eventState.events.map((event) => (
          <div onClick={() => selectedEvent(event)}>
            <h2>{event.eventName}</h2>
          </div>
        ))}
      </div>
      <div>
        {props.matchState.eventMatches.map((match) => (
          <div>
            <h2>{match.eventId}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchesList);
