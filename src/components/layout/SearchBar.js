import React from "react";
import { StyledNav } from "../../styles/Nav.styled";

import PropTypes from "prop-types";
// s
// import MessagesContext from "../../context/messages/messagesContext";

const SearchBar = ({ searchmessages }) => {
  // const messagesContext = useContext(MessagesContext);
  // const text = useRef("");

  // const { searchMessages } = messagesContext;

  // const onChange = e => {
  //   searchMessages(text.current.value);
  // };
  return (
    <StyledNav>
      <nav style={{ marginBottom: "30px" }} className="nav-bar">
        <div className="nav-wrapper">
          <div className="nav-heading">
            <h4>Twitter Composer</h4>
          </div>
          {/* <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search messages..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form> */}
        </div>
      </nav>
    </StyledNav>
  );
};

SearchBar.prototypes = {
  searchmessages: PropTypes.func.isRequired
};

export default SearchBar;
