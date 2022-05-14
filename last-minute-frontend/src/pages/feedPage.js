import EventFeed from "../components/eventFeed";

import Nav from "../components/nav";

const FeedPage = (props) => {
  return (
    <div>
      <div>
        <Nav user={props.user} />
      </div>
      <div>
        <h1>Last Minute Events</h1>
      </div>
      <div>
        <EventFeed />
      </div>
    </div>
  );
};

export default FeedPage;
