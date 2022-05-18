import EventFeed from "../components/eventFeed";
import "../styles/feedPage.css";
import Nav from "../components/nav";

const FeedPage = (props) => {
  return (
    <div>
      <div>
        <Nav user={props.user} />
      </div>
      <div>
        <h1 className="title">Event Feed</h1>
      </div>
      <div className="anEvent">
        <EventFeed />
      </div>
    </div>
  );
};

export default FeedPage;
