import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LoadMatchesByEvent,
  LoadMatchesByUser,
} from "../store/Actions/matchActions";

import { LoadAllUserEvents, LoadEvents } from "../store/Actions/eventActions";
import { LoadAllUsers } from "../store/Actions/userActions";
const mapStateToProps = ({ eventState, matchState, userState }) => {
  return { eventState, matchState, userState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchesByUser: (userId) => dispatch(LoadMatchesByUser(userId)),
    fetchMatchesByEvent: (eventId) => dispatch(LoadMatchesByEvent(eventId)),
    fetchUserEvents: (userId) => dispatch(LoadAllUserEvents(userId)),
    fechAllEvents: () => dispatch(LoadEvents()),
    fetchAllUsers: () => dispatch(LoadAllUsers()),
  };
};

const MatchesList = (props) => {
  const [eventId, setEventId] = useState(Number);
  const navigate = useNavigate();

  let { userId } = useParams();
  userId = parseInt(userId);

  const selectedEvent = (event) => {
    setEventId(event.id);
    props.fetchMatchesByEvent(eventId);
  };

  const navToMessages = (match) => {
    navigate(`/messages/${match.id}`);
  };
  console.log(eventId);
  useEffect(() => {
    props.fetchMatchesByUser(`${userId}`);
    props.fetchUserEvents(`${userId}`);
    props.fechAllEvents();
    props.fetchAllUsers();
    // selectedUser();
  }, []);

  return (
    <main>
      <div>
        <h1>Match requests</h1>
        {props.matchState.userMatches.map((match) => (
          <div>
            {props.eventState.allEvents.map((event) =>
              event.id === match.eventId ? null : (
                <>
                  <h2 onClick={() => navToMessages(match)}>
                    {event.eventName}
                  </h2>
                </>
              )
            )}
          </div>
        ))}
      </div>
      <div>
        <h1>Your Event Matches</h1>
        {props.eventState.events.map((event) => (
          <div onClick={() => selectedEvent(event)}>
            <button>{event.eventName}</button>
          </div>
        ))}
      </div>
      <div>
        {props.matchState.eventMatches.map((match) => (
          <div>
            {props.userState.users.map((user) =>
              user.id === match.userId ? null : (
                <>
                  <div onClick={() => navToMessages(match)}>
                    {user.firstName}
                  </div>
                </>
              )
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchesList);
