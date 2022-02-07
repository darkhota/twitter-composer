import React, { useContext, useEffect } from "react";
import Lottie from "react-lottie";
import MessageItem from "./MessageItem";
import Preloader from "../layout/Preloader";
import MessagesContext from "../../context/messages/messagesContext";
import { StyledMessages } from "../../styles/Messages.styled";

const Messages = ({ animationPath }) => {
  const messagesContext = useContext(MessagesContext);
  const { messages, loading, getMessages } = messagesContext;

  useEffect(() => {
    getMessages();
    //eslint-disable-next-line
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: "/create-list.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const sortedMessages = (a, b) => {
    return (a, b) => {
      if (a.postingDate === b.postingDate) {
        return a.postingTime > b.postingTime ? 1 : -1;
      }
      return a.postingDate > b.postingDate ? 1 : -1;
    };
  };

  // if (loading || messages === null) {
  //   return <Preloader />;
  // }

  return (
    <StyledMessages>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Upcoming Messages</h4>
        </li>
        {messages && messages.length === 0 ? (
          <div>
            <p className="center">No messages to show...</p>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        ) : (
          messages
            .sort(sortedMessages())
            .map((message, index) => (
              <MessageItem message={message} key={index} />
            ))
        )}
      </ul>
    </StyledMessages>
  );
};

export default Messages;
