import { LitElement, css, html } from "lit";
import { autoClickerStyles } from "./css/autoclicker.styles";
import { AUTOCLICKER } from "../../constants/autoclicker";
import { commonsStyles } from "../../../assets/css/commons.styles";

export class AutoClicker extends LitElement {
  static styles = [autoClickerStyles, commonsStyles];

  static get properties() {
    return {
      autoClickerCost: { type: Number },
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
    this.autoClickerCost =
      AUTOCLICKER.cost_start_points +
      AUTOCLICKER.cost_start_points * this.autoMergeLevel;
    this.autoMergeLevel = this.autoMergeLevel + 1;
    this.dispatchEvent(
      new CustomEvent("autoclicker-on", {
        detail: { autoMergeLevel: this.autoMergeLevel },
        bubbles: true,
        composed: true,
      })
    );
  }
  updated(changedProperties) {
    if (changedProperties.has("currentPoints")) {
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
