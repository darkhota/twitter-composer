import styled from "styled-components";

export const StyledNav = styled.div`
  h4 {
    margin: 0;
    padding: 0;
  }
  .nav-bar {
    background-color: rgb(77, 54, 255);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-heading {
    margin-top: 1rem;
  }

  @media (max-width: 760px) {
    .nav-heading h4 {
      font-size: 20px;
    }
  }
`;
