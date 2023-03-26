import { useReducer, useContext, createContext } from "react";
import { INITIAL_CAPTCHA_STATE } from "../constants/constants";
import { CaptchaReducer } from "../reducers/CaptchaReducer";
const CaptchaContext = createContext(INITIAL_CAPTCHA_STATE);
export const CaptchaProvider = ({ children }) => {
  const [captcha, dispatch] = useReducer(CaptchaReducer, INITIAL_CAPTCHA_STATE);
  return (
    <CaptchaContext.Provider value={{ captcha, dispatch }}>
      {children}
    </CaptchaContext.Provider>
  );
};
export const useCaptcha = () => useContext(CaptchaContext);
