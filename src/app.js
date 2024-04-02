import { LitElement, css, html } from "lit";
import { Routes } from "@lit-labs/router";
import { appStyles } from "./assets/css/app.styles";
import "./components/views/home/home-view";
import "./components/views/game/game-view";
import { routesComponent } from "./components/Utils/Routes/routes";

export class App extends LitElement {
  static styles = [appStyles];

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this._routes = new Routes(this, routesComponent);
    this._routes.goto(window.location.pathname);
  }

  render() {
    return html` <main>${this._routes.outlet()}</main> `;
  }
}

window.customElements.define("app-container", App);
