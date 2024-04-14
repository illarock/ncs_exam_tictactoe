import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ticTacCount = {
  results: [
    { player: "One", moves: [] },
    { player: "Two", moves: [] },
  ],
  player: "One",
  gamewinner: null,
};

export const tictacSlice = createSlice({
  name: "tictac",
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<ticTacPayload>) => {
      const { player, move } = action.payload;

      if (!state.gamewinner) {
        let activePlayer = state.results.find(
          (gamer: { player: string }) => gamer.player === player
        );

        activePlayer?.moves.push(move);
        state.player = state.player === "One" ? "Two" : "One";

        const winningNumbers = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
          [1, 5, 9],
          [3, 5, 7],
        ];

        for (let i = 0; i < winningNumbers.length; i++) {
          const winningNumber = winningNumbers[i];

          const winningResult = state.results.find((result: ticTacResult) =>
            winningNumber.every((num) => result.moves.includes(num))
          );

          if (winningResult) {
            let lineLocation;
            switch (i) {
              case 0:
                lineLocation = "top" as horizontalType;
                break;
              case 1:
                lineLocation = "middle" as horizontalType;
                break;
              case 2:
                lineLocation = "bottom" as horizontalType;
                break;
              case 3:
                lineLocation = "start" as verticalType;
                break;
              case 4:
                lineLocation = "center" as verticalType;
                break;
              case 5:
                lineLocation = "end" as verticalType;
                break;
              case 6:
                lineLocation = "diagonal-left" as diagonalType;
                break;
              case 7:
                lineLocation = "diagonal-right" as diagonalType;
                break;
              default:
                lineLocation;
            }

            state.gamewinner = {
              player: winningResult.player,
              lineLocation: lineLocation,
            };
          }
        }
      }
    },
    startAgain(state) {
      state.results = initialState.results;
      state.player = initialState.player;
      state.gamewinner = initialState.gamewinner;
    },
  },
});

export const { startGame, startAgain } = tictacSlice.actions;
export const tictacState = (state: RootState) => state.tictac;
export default tictacSlice.reducer;
