import { v4 as uuid } from "uuid";
export const tiles = new Array(16)
  .fill()
  .map((_, i) => ({ id: uuid(), position: i + 1, isSelected: false }));
export const INITIAL_CAPTCHA_STATE = {
  tiles,
  selected: [],
  isCompleted: false,
  openCaptcha: false,
  correctTilePosition: [5, 6, 8, 9, 10, 12, 13, 14],
  isError: false,
  submitted: false,
};
export const TOGGLE_TILE_SELECTION = "TOGGLE_TILE_SELECTION";
export const FILTER_SELECTED = "FILTER_SELECTED";
export const OPEN_CAPTCHA = "OPEN_CAPTCHA";
export const CLOSE_CAPTCHA = "CLOSE_CAPTCHA";
export const COMPLETED = "COMPLETED";
export const ERROR = "ERROR";
export const SUBMIT = "SUBMIT";
