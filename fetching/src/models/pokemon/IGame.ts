export interface IGame {
  game_index: number;
  version: IGameVersion;
}

interface IGameVersion {
  name: string;
  url: string;
}
