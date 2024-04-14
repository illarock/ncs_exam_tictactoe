"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  startAgain,
  startGame,
  tictacState,
} from "@/lib/features/tictac/tictacSlice";
import { FaCircle } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import Confetti from "react-confetti";
import LineWinner from "@/components/LineWinner";

export default function Home() {
  const boxes = Array.from({ length: 9 }, (_, index) => index + 1);
  const dispatch = useAppDispatch();
  const { player, results, gamewinner } = useAppSelector(tictacState);

  const moveHandler = (i: number) => {
    dispatch(
      startGame({
        move: i,
        player: player,
      })
    );
  };

  const activePlayer = (playerName: string, i: number) => {
    const playerStatus = results.filter(
      (item: ticTacResult) =>
        item.player === playerName && item.moves.includes(i)
    );

    return playerStatus.length !== 0;
  };

  return (
    <main className="container py-10">
      <h1 className="text-4xl tracking-widest">
        You want to play? Let&apos;s Play
      </h1>
      <h2 className="text-muted-foreground mb-20">
        (<span className="text-primary">{player}</span>) Player Turn
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto relative">
        {boxes.map((box) => {
          const getPlayerOne = activePlayer("One", box);
          const getPlayerTwo = activePlayer("Two", box);

          return (
            <Button
              key={box}
              variant={"outline"}
              className="w-full pt-[calc(100%_-_2px)] pb-0 rounded-xl relative disabled:opacity-100 leading-none"
              onClick={() => moveHandler(box)}
              disabled={getPlayerOne || getPlayerTwo}
            >
              {getPlayerOne && (
                <FaCircle className="text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
              )}

              {getPlayerTwo && (
                <IoCloseCircleSharp className="text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-destrucitve" />
              )}
            </Button>
          );
        })}

        {gamewinner?.lineLocation && (
          <LineWinner location={gamewinner?.lineLocation} />
        )}
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        {gamewinner?.player && (
          <h3 className="text-2xl font-bold tracking-widest mb-5">
            Winner is <span className="text-primary">{gamewinner?.player}</span>
          </h3>
        )}
        <Button type="button" onClick={() => dispatch(startAgain())}>
          Restart
        </Button>
      </div>

      {gamewinner?.player && (
        <Confetti className="w-full h-screen" width={1400} height={1400} />
      )}
    </main>
  );
}
