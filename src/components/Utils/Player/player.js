class PlayerDataUtil {
  constructor() {
    this.playerData = this.loadPlayerData() || [];
  }

  loadPlayerData() {
    const data = sessionStorage.getItem("playerData");
    return data ? JSON.parse(data) : [];
  }

  savePlayerData() {
    sessionStorage.setItem("playerData", JSON.stringify(this.playerData));
  }

  updatePlayer(name, count, autoMergeLevel) {
    const playerIndex = this.playerData.findIndex(
      (player) => player.playerName === name
    );
    if (playerIndex > -1) {
      this.playerData[playerIndex].count = count;
      this.playerData[playerIndex].autoMergeLevel = autoMergeLevel;
    } else {
      this.playerData.push({ playerName: name, count, autoMergeLevel });
    }
    this.savePlayerData();
  }

  getPlayerData(name) {
    return this.playerData.find((player) => player.playerName === name) || null;
  }
}

export const playerDataUtil = new PlayerDataUtil();
