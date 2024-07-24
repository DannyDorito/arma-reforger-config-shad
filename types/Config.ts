export class Config
{
  bindAddress: string = "";
  bindPort: number = 2001;
  publicAddress: string = "";
  publicPort: number = 2001;
  a2s: A2s = new A2s();
  rcon: Rcon = new Rcon();
  game: Game = new Game();
  operating: Operating = new Operating();
}

export class Operating
{
  lobbyPlayerSynchronise: boolean = true;
  disableNavmeshStreaming: boolean | string[] = false;
  disableServerShutdown: boolean = false;
  disableAI: boolean = false;
  playerSaveTime: number = 120;
  aiLimit: number = -1;
  slotReservationTimeout: number = 60;
}

export class Game
{
  name: string = "";
  password: string = "";
  passwordAdmin: string = "";
  admins: string[] = [];
  scenarioId: string = "";
  maxPlayers: number = 64;
  visible: boolean = true;
  crossPlatform: boolean = false;
  supportedPlatforms: Platform[] = [ Platform.PLATFORM_PC ];
  gameProperties: GameProperties = new GameProperties();
  mods: Mod[] = [];
}

export enum Platform
{
  PLATFORM_PC = "PLATFORM_PC",
  PLATFORM_XBL = "PLATFORM_XBL",
}

export class Mod
{
  modId: string = "";
  name: string = "";
  version?: string;
}

export class GameProperties
{
  serverMaxViewDistance: number = 1600;
  serverMinGrassDistance: number = 0;
  networkViewDistance: number = 1500;
  disableThirdPerson: boolean = false;
  fastValidation: boolean = true;
  battlEye: boolean = true;
  VONDisableUI: boolean = false;
  VONDisableDirectSpeechUI: boolean = false;
  VONCanTransmitCrossFaction: boolean = false;
  missionHeader: string[] = [];
}

export class Rcon
{
  address: string = "";
  port: number = 19999;
  password: string = "";
  maxClients: number = 16;
  permission: "admin" | "monitor" = "admin";
  blacklist: string[] = [];
  whitelist: string[] = [];
}

export class A2s
{
  address: string = "";
  port: number = 17777;
}
