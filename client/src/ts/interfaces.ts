export interface Game {
  id: number;
  name: string;
  provider: number;
  cover: string;
  coverLarge: string;
  date: string;
}
export type Games = Game[];

export interface GroupedGame extends Game {
  groupId: number;
  groupName: string;
}

export interface GameGrouped {
  groupId: number;
  groupName: string;
  games: Games;
}
export type GamesGrouped = GameGrouped[];
export type GroupedGames = GroupedGame[];

export interface Group {
  id: number;
  name: string;
  games: number[];
}
export type Groups = Group[];

export interface Provider {
  id: number;
  name: string;
  logo: string;
}
export type Providers = Provider[];
export interface Sort {
  label: string;
  value: string;
}
export type Sorts = Sort[];
export type Columns = number[];
export type Children = JSX.Element | JSX.Element[] | string | null | boolean;
export type Text = "h1" | "h2" | "x-large" | "large" | "normal" | "small";

export interface GroupedGamesResponse {
  success: boolean;
  message: string;
  data?: Game;
}

export interface SortInterface {
  [key: number]: (data: GroupedGames) => GroupedGames;
}
