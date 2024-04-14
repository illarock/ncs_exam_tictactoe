declare type ticTacCount = {
  results: ticTacResult[];
  player: string;
  gamewinner?: gamewinnerType | null;
};

declare type ticTacPayload = {
  move: number;
  player: string;
};

declare type ticTacResult = {
  player: string;
  moves: number[];
};

declare type gamewinnerType = {
  player?: string;
  lineLocation?: horizontalType | verticalType | diagonalType;
};

declare type horizontalType = "top" | "middle" | "bottom";
declare type verticalType = "start" | "center" | "end";
declare type diagonalType = "diagonal-left" | "diagonal-right";
