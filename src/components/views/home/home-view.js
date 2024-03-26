import { LitElement, html, css } from "lit";
import { homeViewStyles } from "./css/home-view.styles";
import { Routes } from "@lit-labs/router";
import { routesComponent } from "../../Routes/routes"; // Importa las rutas aquí

const urlBase = "/cookie-clicker";

class HomeView extends LitElement {
  static styles = [homeViewStyles];

  static properties = {
    userName: { type: String },
  };

  constructor() {
    super();
    this.userName = "";
    this._routes = new Routes(this, routesComponent);
  }

  handleInput(e) {
    this.userName = e.target.value;
  }
  handleStartGame(e) {
    e.preventDefault();
    const username = this.userName.trim();
    if (username) {
      window.location = `${urlBase}/game/${username}`;
    } else {
      alert("Por favor, introduce tu nombre.");
    }
  }
  render() {
    return html`
      <div class="form">
        <span class="icon-login">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"
            />
          </svg>
        </span>
        <form id="register-form" @submit="${this.handleStartGame}">
          <label>Create new player</label>
          <input
            type="text"
            .value="${this.userName}"
            @input="${this.handleInput}"
            placeholder="Name"
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    `;
  }
}
customElements.define("home-view", HomeView);
