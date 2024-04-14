import { cn } from "@/lib/utils";

const LineWinner = ({
  location,
}: {
  location: horizontalType | verticalType | diagonalType;
}) => {
  console.log(location);

  let className;
  if (location === "top") {
    className = "w-[calc(100%)] h-2  top-[calc(((1_/_3)_*_100%)_/_2)] -mt-2 ";
  }

  if (location === "middle") {
    className = "w-[calc(100%)] h-2 top-[calc(1_/_2_*_100%)] -mt-1";
  }

  if (location === "bottom") {
    className = "w-[calc(100%)] h-2 bottom-[calc(((1_/_3)_*_100%)_/_2)] -mb-2";
  }

  if (location === "start") {
    className = "h-[calc(100%)] w-2 left-[calc(((1_/_3)_*_100%)_/_2)] -ml-2 ";
  }

  if (location === "center") {
    className = "h-[calc(100%)] w-2 left-[calc(1_/_2_*_100%)] -ml-1 ";
  }

  if (location === "end") {
    className = "h-[calc(100%)] w-2 right-[calc(((1_/_3)_*_100%)_/_2)] -mr-2 ";
  }

  if (location === "diagonal-left") {
    className =
      "h-2 w-[calc(140%)] rotate-45 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl";
  }

  if (location === "diagonal-right") {
    className =
      "h-2 w-[calc(140%)] -rotate-45 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl";
  }

  return <div className={cn("absolute bg-secondary ", className)}></div>;
};

export default LineWinner;
