import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateMessage } from "../services/messageServices";
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
    makeMessage: (matchId, userId) =>
      dispatch(UploadNewMessage(matchId, userId)),
  };
};

const Messages = (props) => {
  let { matchId } = useParams();
  matchId = parseInt(matchId);
  let userId = props.user.id;
  let navigate = useNavigate();

  const [messageValue, setMessageValue] = useState({
    description: "",
  });

  const handleChange = (e) => {
    setMessageValue({ ...messageValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateMessage(userId, matchId, {
      description: messageValue.description,
    });
    setMessageValue({
      description: "",
    });
    props.fetchMessages(matchId);
  };

  useEffect(() => {
    props.fetchMessages(matchId);
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
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="formInput"
            type="text"
            onChange={handleChange}
            name="description"
            placeholder="send message"
            value={messageValue.description}
            required
          />
          <button className="button">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
