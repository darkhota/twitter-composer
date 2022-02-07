import React, { useContext } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import MessagesContext from "../../context/messages/messagesContext";
import M from "materialize-css/dist/js/materialize.min.js";

const MessageItem = ({ message }) => {
  const messagesContext = useContext(MessagesContext);
  const { deleteMessage, setCurrent, current, messages } = messagesContext;

  const onDelete = () => {
    deleteMessage(message.id);

    M.toast({ html: "message Deleted" });
  };
  return (
    <li className="collection-item">
      <div className="message-container">
        <div className="message-contents">
          <a
            href="#edit-message-modal"
            className="modal-trigger blue-text"
            onClick={() => {
              setCurrent(message);
              console.log(current);
            }}
          >
            <h5>{message.message}</h5>
          </a>
          <br />
          <div className="black-text">
            Posting-time :{" "}
            <span className="grey-text"> {message.postingTime}</span>
          </div>
          <div className="black-text">
            Posting-date :{" "}
            <span className="grey-text">{message.postingDate}</span>
          </div>
          <div className="grey-text">
            {" "}
            Created on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss:a">{message.date}</Moment>
          </div>
        </div>
        <div className="message-icon">
          <a href="####" onClick={onDelete}>
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
  // serCurrent: PropTypes.func.isRequired
};

export default MessageItem;
