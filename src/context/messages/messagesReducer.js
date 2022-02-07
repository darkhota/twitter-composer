import {
  GET_MESSAGES,
  SET_LOADING,
  MESSAGES_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_MESSAGES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages],
        loading: false
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          message => message.id !== action.payload
        ),
        loading: false
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === action.payload.id ? action.payload : message
        )
      };
    case SEARCH_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case MESSAGES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
