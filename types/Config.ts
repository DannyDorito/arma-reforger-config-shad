export type Config = {
  bindAddress: string;
  bindPort: number;
  publicAddress: string;
  publicPort: number;
  a2s: A2s;
  rcon: Rcon;
  game: Game;
  operating: Operating;
}

export type Operating = {
  lobbyPlayerSynchronise: boolean;
}

export type Game = {
  name: string;
  password: string;
  passwordAdmin: string;
  admins: string[];
  scenarioId: string;
  maxPlayers: number;
  visible: boolean;
  crossPlatform: boolean;
  supportedPlatforms: string[];
  gameProperties: GameProperties;
  mods: Mod[];
}

export type Mod = {
  modId: string;
  name: string;
  version: string;
}

export type GameProperties = {
  serverMaxViewDistance: number;
  serverMinGrassDistance: number;
  networkViewDistance: number;
  disableThirdPerson: boolean;
  fastValidation: boolean;
  battlEye: boolean;
  VONDisableUI: boolean;
  VONDisableDirectSpeechUI: boolean;
  missionHeader: MissionHeader;
}

export type MissionHeader = {
  m_iPlayerCount: number;
  m_eEditableGameFlags: number;
  m_eDefaultGameFlags: number;
  other: string;
}

export type Rcon = {
  address: string;
  port: number;
  password: string;
  permission: string;
  blacklist: any[];
  whitelist: any[];
}

export type A2s = {
  address: string;
  port: number;
}
