import React, { useState, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import MessagesContext from "../../context/messages/messagesContext";

const AddmessageModal = () => {
  const [message, setMessage] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [postingTime, setPostingTime] = useState("");

  const messagesContext = useContext(MessagesContext);
  const { addMessage } = messagesContext;

  const onSubmit = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const hh = today.getHours();
    const mmm = today.getMinutes();
    const thisDay = yyyy + "-" + mm + "-" + dd;
    const thisTime = hh + ":" + mmm;
    if (message === "" || postingDate === "" || postingTime === "") {
      M.toast({ html: "Please enter a message and date/time" });
    } else if (postingDate === thisDay && postingTime <= thisTime) {
      M.toast({ html: "Please enter a future time" });
    } else {
      const newMessage = {
        message,
        postingDate,
        postingTime,
        date: new Date()
      };
      addMessage(newMessage);
      M.toast({ html: `message added` });
      //Clear Fields
      setMessage("");
      setPostingDate("");
      setPostingTime("");
    }
  };

  const disablePrevDates = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const disablePrevTimes = () => {
    const today = new Date();
    const hh = String(today.getHours());
    const mmm = String(today.getMinutes() - 1);
    return mmm + ":" + hh;
  };

  return (
    <div id="add-message-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Create Scheduled message</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Message
            </label>
          </div>
        </div>

        <div className="row">
          <p>Date to be posted</p>
          <div className="input-field">
            <input
              type="date"
              name="postingDate"
              value={postingDate}
              onChange={e => setPostingDate(e.target.value)}
              min={disablePrevDates()}
            />
          </div>
        </div>
        <div className="row">
          <p>Time to be posted</p>
          <div className="input-field">
            <input
              type="time"
              name="postingTime"
              value={postingTime}
              onChange={e => setPostingTime(e.target.value)}
              min="14:00"
              max="20:00"
              required
            />
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddmessageModal;
