import { css } from "lit";

export const homeViewStyles = css`
  .form {
    width: 80%;
    max-width: 400px;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 150px;
  }
  label {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    margin-top: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #90c9f9;
    color: #000;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: 10px;
  }

  button:hover {
    background-color: #0056b3;
  }
  .icon-login {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #ce93d9;
    background-size: contain;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
