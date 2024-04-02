import { LitElement, html, css } from "lit";
import { gameViewStyles } from "./css/game-view.styles";
import "../header/header";
import { AUTOCLICKER } from "../../constants/autoclicker";
import "../../elements/autoclicker/autoclicker";
import { commonsStyles } from "../../../assets/css/commons.styles";
import { playerDataUtil } from "../../Utils/Player/player";

class GameView extends LitElement {
  static styles = [gameViewStyles, commonsStyles];

  static get properties() {
    return {
      playerName: { type: String },
      count: { type: Number },
      autoMergeLevel: { type: Number },
    };
  }
  constructor() {
    super();
    this.playerList = [];
    this.playerName = "anonymous";
    this.count = 0;
    this.autoMergeLevel = 0;
    this.addEventListener("autoclicker-on", this.startAutoClicker.bind(this));
    this.addEventListener("exit-game", this.handleExitGame.bind(this));
  }

  loadInitialPlayerData() {
    const playerData = playerDataUtil.getPlayerData(this.playerName);
    if (playerData) {
      this.playerName = playerData.playerName;
      this.count = playerData.count;
      this.autoMergeLevel = playerData.autoMergeLevel;
      for (let i = 0; i < this.autoMergeLevel; i++) {
        setInterval(() => {
          this.count = this.count + 1;
        }, 100);
      }
    }
  }

  handleExitGame(e) {
    playerDataUtil.updatePlayer(
      this.playerName,
      this.count,
      this.autoMergeLevel
    );
  }

  _merge() {
    this.count = this.count + 1;
  }

  startAutoClicker(e) {
    this.autoMergeLevel = e.detail.autoMergeLevel;
    setInterval(() => {
      this.count = this.count + 1;
    }, 100);
  }

  updated(changedProperties) {
    if (changedProperties.has("playerName")) {
      this.loadInitialPlayerData();
    }
  }
  render() {
    return html`
      <header-user .playerName="${this.playerName}"></header-user>
      <div>
        <h2>Merged pull request: ${this.count}</h2>
        ${this.autoMergeLevel > 0
          ? html` <h2>Automerge: ${this.autoMergeLevel}</h2>`
          : ""}
      </div>
      <div>
        <button type="button" class="button" @click="${this._merge}">
          Merge
        </button>
      </div>
      ${this.count > AUTOCLICKER.cost_start_points
        ? html`
            <div>
              <custom-autoclicker
                currentPoints=${this.count}
                autoMergeLevel=${this.autoMergeLevel}
              />
            </div>
          `
        : ""}
    `;
  }
}

customElements.define("game-view", GameView);
