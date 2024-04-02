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
`;
