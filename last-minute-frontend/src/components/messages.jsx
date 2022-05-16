import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  UploadNewMessage,
  LoadAllMessages,
} from "../store/Actions/messageActions";
const mapStateToProps = ({ messageState }) => {
  return { messageState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (matchId) => dispatch(LoadAllMessages(matchId)),
  };
};

const Messages = (props) => {
  let { matchId } = useParams();
  matchId = parseInt(matchId);
  let navigate = useNavigate();

  useEffect(() => {
    // props.fetchMessages(matchId);
  }, []);
  return (
    <main>
      <div>
        {props.messageState.messages.map((message) => (
          <div>
            <p>{message.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
