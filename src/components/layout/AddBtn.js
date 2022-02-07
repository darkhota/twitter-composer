import React from "react";
import { StyledAddBtn } from "../../styles/Add-btn.styled";

const AddBtn = () => {
  return (
    <StyledAddBtn>
      <div className="fixed-action-btn ">
        <a
          href="#add-message-modal"
          className="btn-floating btn-large blue darken2 modal-trigger"
        >
          <i className="large material-icons add-btn">add</i>
        </a>
      </div>
    </StyledAddBtn>
  );
};

export default AddBtn;
