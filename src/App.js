import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Messages from "./components/messages/Messages";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AddBtn from "./components/layout/AddBtn";
import AddmessageModal from "./components/messages/AddmessageModal";
import EditmessageModal from "./components/messages/EditmessageModal";

import MessagesState from "./context/messages/MessagesState";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <MessagesState>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddmessageModal />
          <EditmessageModal />
          <Messages />
        </div>
      </Fragment>
    </MessagesState>
  );
};

export default App;
