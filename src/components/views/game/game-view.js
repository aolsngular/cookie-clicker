import { LitElement, html, css } from "lit";
import { gameViewStyles } from "./css/game-view.styles";
import "../header/header";

class GameView extends LitElement {
  static styles = [gameViewStyles];

  static get properties() {
    return {
      playerName: { type: String },
      count: { type: Number },
    };
  }
  constructor() {
    super();
    this.playerName = "anonymous";
    this.count = 0;
  }
  _merge() {
    this.count = this.count + 1;
  }

  render() {
    return html`
      <header-user .playerName="${this.playerName}"></header-user>
      <div>
        <h2>Merged pull request: ${this.count}</h2>
      </div>
      <button type="button" @click="${this._merge}">Merge</button>
    `;
  }
}

customElements.define("game-view", GameView);
