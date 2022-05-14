import { UpdateEvent } from "../services/eventServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdatePage = () => {
  let navigate = useNavigate();
  const [eventValues, setEventValues] = useState({
    eventName: "",
    date: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setEventValues({ ...eventValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateEvent({
      eventName: eventValues.eventName,
      date: eventValues.date,
      description: eventValues.description,
      image: eventValues.image,
    });
    setEventValues({
      eventName: "",
      date: "",
      description: "",
      image: "",
    });
    navigate("/events");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="eventName"
          placeholder="Event Name"
          value={eventValues.eventName}
          required
        />
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="date"
          placeholder="date"
          value={eventValues.date}
          required
        />
        <input
          className="formInput"
          type="description"
          onChange={handleChange}
          name="description"
          placeholder="description"
          value={eventValues.description}
          required
        />
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="image"
          value={eventValues.image}
          required
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default UpdatePage;
