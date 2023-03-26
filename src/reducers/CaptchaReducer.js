import {
  CLOSE_CAPTCHA,
  COMPLETED,
  ERROR,
  FILTER_SELECTED,
  INITIAL_CAPTCHA_STATE,
  OPEN_CAPTCHA,
  SUBMIT,
  TOGGLE_TILE_SELECTION,
} from "../constants/constants";

export const CaptchaReducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_TILE_SELECTION:
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          tile.id === payload.id
            ? { ...tile, isSelected: !tile.isSelected }
            : tile
        ),
      };

    case FILTER_SELECTED:
      return {
        ...state,
        selected: state.tiles.filter((tile) => tile.isSelected),
      };

    case OPEN_CAPTCHA:
      return { ...state, openCaptcha: true };

    case CLOSE_CAPTCHA:
      return { ...state, openCaptcha: false };

    case COMPLETED:
      return { ...INITIAL_CAPTCHA_STATE, isCompleted: true };

    case ERROR:
      return { ...state, isError: true };

    case SUBMIT:
      return { ...INITIAL_CAPTCHA_STATE, submitted: true };

    default:
      return { ...state };
  }
};
