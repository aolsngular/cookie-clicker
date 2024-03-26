import { css } from "lit";

export const headerStyles = css`
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
    color: #fff;
    background-color: #262626;
  }
  .header-user {
    width: 70%;
  }
  .header-user,
  .header-option {
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    text-transform: capitalize;
  }
  .header-option {
    justify-content: right;
    width: 15%;
  }
  .header-user {
    margin-left: 25px;
  }
  .header-user-icon {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(/bbva-exercise/icons/user-solid.svg);
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
  select {
    border: none;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
`;
