const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Last Minute Events</h1>
      </div>
      <div>
        <EventFeed />
      </div>
    </div>
  );
};

export default SignUp;
