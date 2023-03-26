import React from "react";
import { TOGGLE_TILE_SELECTION } from "../../constants/constants";
import { useCaptcha } from "../../context/captcha-context";
export const Tile = ({ tile }) => {
  const { dispatch } = useCaptcha();
  return (
    <div
      onClick={() => dispatch({ type: TOGGLE_TILE_SELECTION, payload: tile })}
      key={tile.id}
      className={`w-full h-auto border-2 hover:cursor-pointer rounded-sm border-gray-.300 ${
        tile?.isSelected ? "opacity-100 " : "bg-white opacity-60"
      }`}></div>
  );
};
