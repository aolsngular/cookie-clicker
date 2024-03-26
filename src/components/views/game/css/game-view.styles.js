import { css } from "lit";

export const gameViewStyles = css`
  .game-container,
  .game-action {
    display: flex;
    width: 80%;
    max-width: 450px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    margin-top: 20px;
  }
  .game-message {
    text-align: center;
  }
  .game-points {
    text-align: right;
    margin: 20px;
  }
  .game-points span {
    font-size: 24px;
  }
  button {
    width: 100px;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
