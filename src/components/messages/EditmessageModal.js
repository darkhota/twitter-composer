import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import MessagesContext from "../../context/messages/messagesContext";

const EditmessageModal = () => {
  const [message, setMessage] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [postingTime, setPostingTime] = useState("");

  const messagesContext = useContext(MessagesContext);
  const { updateMessage, messages, current } = messagesContext;

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setPostingDate(current.postingDate);
      setPostingTime(current.postingTime);
    }
  }, [messagesContext, current, messages]);

  const onSubmit = () => {
    if (message === "" || postingDate === "" || postingTime === "") {
      M.toast({ html: "Please enter a message and date/time " });
    } else {
      const updmessage = {
        id: current.id,
        message,
        postingDate,
        postingTime,
        date: new Date()
      };

      updateMessage(updmessage);
      M.toast({ html: `message updated` });
      console.log(messages);

      //Clear Fields
      setMessage("");
      setPostingDate("");
      setPostingTime("");
    }
  };
  return (
    <div id="edit-message-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System message</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="date"
              name="postingDate"
              value={postingDate}
              onChange={e => setPostingDate(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="time"
              name="postingTime"
              value={postingTime}
              onChange={e => setPostingTime(e.target.value)}
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
EditmessageModal.propTypes = {
  current: PropTypes.object
  // updatemessage: PropTypes.func.isRequired
};

export default EditmessageModal;
