import React, { useReducer } from "react";
import MessagesContext from "./messagesContext";
import { v4 as uuid } from "uuid";
import messagesReducer from "./messagesReducer";
import {
  GET_MESSAGES,
  SET_LOADING,
  MESSAGES_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../types";

const MessagesState = props => {
  const initialState = {
    messages: [],
    current: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(messagesReducer, initialState);

  const getMessages = () => {
    try {
      setLoading();

      dispatch({
        type: GET_MESSAGES
      });
    } catch (err) {
      dispatch({
        type: MESSAGES_ERROR,
        payload: err.message
      });
    }
  };

  //   Add new message
  const addMessage = message => {
    setLoading();
    message.id = uuid();
    dispatch({
      type: ADD_MESSAGE,
      payload: message
    });
  };

  //delete message from server

  const deleteMessage = id => {
    try {
      setLoading();
      dispatch({
        type: DELETE_MESSAGE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: MESSAGES_ERROR,
        payload: err.message
      });
    }
  };

  //update message on server

  const updateMessage = message => {
    try {
      setLoading();
      console.log(message);
      dispatch({
        type: UPDATE_MESSAGE,
        payload: message
      });
    } catch (err) {
      dispatch({
        type: MESSAGES_ERROR,
        payload: err.message
      });
    }
  };

  // Set current message
  const setCurrent = message => {
    dispatch({
      type: SET_CURRENT,
      payload: message
    });
  };

  // Clear current message
  const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };

  // Set Loading to true

  const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };

  return (
    <MessagesContext.Provider
      value={{
        messages: state.messages,
        current: state.current,
        getMessages,
        addMessage,
        deleteMessage,
        updateMessage,
        setCurrent,
        setLoading,
        clearCurrent
      }}
    >
      {props.children}
    </MessagesContext.Provider>
  );
};
export default MessagesState;
