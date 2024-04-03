import { LitElement, html, css } from "lit";
import { gameViewStyles } from "./css/game-view.styles";
import "../../elements/header/header";
import { AUTOCLICKER } from "../../constants/autoclicker";
import "../../elements/autoclicker/autoclicker";
import { commonsStyles } from "../../../assets/css/commons.styles";
import { playerDataUtil } from "../../elements/utils/player/player";

class GameView extends LitElement {
  static styles = [gameViewStyles, commonsStyles];

  static get properties() {
    return {
      playerName: { type: String },
      // Number of clicks
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
    this.intervalId = [];
  }

  loadInitialPlayerData() {
    const playerData = playerDataUtil.getPlayerData(this.playerName);
    if (playerData) {
      this.playerName = playerData.playerName;
      this.count = playerData.count;
      this.autoMergeLevel = playerData.autoMergeLevel;
      // Start interval with numbers of clickers buys
      const interval = setInterval(() => {
        this.count += 1 * this.autoMergeLevel;
      }, 100);
      this.intervalId.push(interval);
    }
  }

  handleExitGame(e) {
    // Save data and clear interval
    playerDataUtil.updatePlayer(
      this.playerName,
      this.count,
      this.autoMergeLevel
    );
    this.intervalId.forEach((key, index) => {
      clearInterval(this.intervalId[index]);
    });
  }

  _merge() {
    this.count = this.count + 1;
  }

  startAutoClicker(e) {
    // Upload level for the next autoclicker
    this.autoMergeLevel = e.detail.autoMergeLevel;
    // Start a action to count a one point extra(autoclicker on)
    const interval = setInterval(() => {
      this.count = this.count + 1;
    }, 100);
    // Save intervals in list to after cleans the interval when the game finish.
    this.intervalId.push(interval);
  }

  updated(changedProperties) {
    if (changedProperties.has("playerName")) {
      this.loadInitialPlayerData();
    }
  }
  render() {
    return html`
      <header-user
        .playerName="${this.playerName}"
        @exit-game=${this.handleExitGame}
      ></header-user>
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
                @autoclicker-on=${this.startAutoClicker}
              />
            </div>
          `
        : ""}
    `;
  }
}

customElements.define("game-view", GameView);
