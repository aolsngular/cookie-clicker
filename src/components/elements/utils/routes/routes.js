import { html } from "lit";
import "../../../views/game/game-view";
import "../../../views/home/home-view";
import { URL_BASE } from "../../../constants/url";

export const routesComponent = [
  { path: `${URL_BASE}/`, render: () => html`<home-view></home-view>` },
  {
    path: `${URL_BASE}/game/:playerName`,
    render: (data) => {
      const playerName = data.playerName || "";
      return html`<game-view .playerName=${playerName}></game-view>`;
    },
  },
];
