import { LitElement, css, html } from "lit";
import { autoClickerStyles } from "./css/autoclicker.styles";
import { AUTOCLICKER } from "../../constants/autoclicker";
import { commonsStyles } from "../../../assets/css/commons.styles";

export class AutoClicker extends LitElement {
  static styles = [autoClickerStyles, commonsStyles];

  static get properties() {
    return {
      // Cost of buy a one autoclicker
      autoClickerCost: { type: Number },
      // Level of autoclicker.
      autoMergeLevel: { type: Number },
      currentPoints: { type: Number },
    };
  }

  constructor() {
    super();
    this.currentPoints = 0;
    this.autoClickerCost = AUTOCLICKER.cost_start_points;
    this.autoMergeLevel = 1;
  }

  _buyAutoclicker() {
    // Increase the autoMergeLevel
    this.autoMergeLevel = this.autoMergeLevel + 1;
    // Update price of autoclicker
    this.autoClickerCost =
      AUTOCLICKER.cost_start_points +
      AUTOCLICKER.cost_start_points * this.autoMergeLevel;
    // Dispatch us the event for 'view' can the next steps
    this.dispatchEvent(
      new CustomEvent("autoclicker-on", {
        detail: { autoMergeLevel: this.autoMergeLevel },
        bubbles: true,
        composed: true,
      })
    );
  }

  connectedCallback() {
    super.connectedCallback();
    // If when start the game, we have points(It's say, exist a user previously), we load the points
    if (this.currentPoints >= 50) {
      this.autoClickerCost =
        AUTOCLICKER.cost_start_points +
        AUTOCLICKER.cost_start_points * this.autoMergeLevel;
    }
  }
  render() {
    return html`
      <button
        type="button"
        class="button autoclicker"
        @click="${this._buyAutoclicker}"
        ?disabled="${this.currentPoints < this.autoClickerCost}"
      >
        Buy autoclicker(${this.autoClickerCost})
      </button>
    `;
  }
}

window.customElements.define("custom-autoclicker", AutoClicker);
