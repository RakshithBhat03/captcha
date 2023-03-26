import { useEffect } from "react";
import { Tile } from "../";
import {
  CLOSE_CAPTCHA,
  COMPLETED,
  ERROR,
  FILTER_SELECTED,
} from "../../constants/constants";
import { useCaptcha } from "../../context/captcha-context";
export const Captcha = () => {
  const {
    captcha: { tiles, selected, correctTilePosition, isError },
    dispatch,
  } = useCaptcha();
  useEffect(() => {
    dispatch({ type: FILTER_SELECTED });
  }, [tiles]);
  const handleVerify = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (correctTilePosition.length === selected.length) {
      const selectedString = JSON.stringify(
        selected.map((tile) => tile.position).sort((a, b) => a - b)
      );
      const correctTilePositionString = JSON.stringify(
        [...correctTilePosition].sort((a, b) => a - b)
      );
      if (selectedString === correctTilePositionString) {
        return dispatch({ type: COMPLETED });
      }
    }
    dispatch({ type: ERROR });
  };
  const handleSkip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: CLOSE_CAPTCHA });
  };
  const handleClose = (e) => {
    e.stopPropagation();
    dispatch({ type: CLOSE_CAPTCHA });
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 hover:cursor-default bg-slate-200 opacity-30 z-10"
      />
      <section className="w-[20rem] border shadow rounded-md p-2 space-y-1 absolute left-0 md:left-auto bottom-[-150%] md:bottom-[-50%] bg-white z-20">
        <div className="bg-blue-500 text-white flex flex-col p-6">
          <span className="text-sm">Select all squares with</span>
          <span className="text-2xl font-bold">Traffic lights</span>
          <span className="text-sm">If there are none, click skip</span>
        </div>
        <div className="relative">
          <figure className="w-full h-auto">
            <img src="./assets/traffic_lights.webp" alt="traffic lights" />
          </figure>
          <div className="absolute inset-0 w-full h-full grid grid-cols-4 grid-rows-4">
            {tiles.map((tile) => (
              <Tile key={tile.id} tile={tile} />
            ))}
          </div>
        </div>
        <div className="flex">
          {isError && (
            <div className="text-rose-400 text-sm">Select all applicable</div>
          )}
          {selected.length > 0 ? (
            <button
              onClick={handleVerify}
              className="bg-blue-500 px-8 py-2 ml-auto text-white uppercase text-md rounded-md font-normal">
              Verify
            </button>
          ) : (
            <button
              onClick={handleSkip}
              className="bg-blue-500 px-8 py-2 ml-auto text-white uppercase text-md rounded-md font-normal">
              Skip
            </button>
          )}
        </div>
      </section>
    </>
  );
};
