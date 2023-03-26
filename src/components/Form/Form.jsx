import { OPEN_CAPTCHA, SUBMIT } from "../../constants/constants";
import { Captcha } from "../";
import { useCaptcha } from "../../context/captcha-context";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const Form = () => {
  const {
    captcha: { isCompleted, openCaptcha },
    dispatch,
  } = useCaptcha();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCompleted) {
      dispatch({ type: SUBMIT });
    }
  };
  const handleCaptcha = (e) => {
    e.stopPropagation();
    dispatch({ type: OPEN_CAPTCHA });
  };
  return (
    <form
      className="flex flex-col w-fit gap-4 border p-4 md:p-8 rounded-md shadow-md"
      onSubmit={handleSubmit}>
      <h2 className=" text-2xl md:text-3xl font-semibold text-blue-400 text-center mb-8">
        Signup
      </h2>

      <label className="flex w-full text-md md:text-xl gap-8 ">
        First Name{" "}
        <input
          type="text"
          required
          className="border  ml-auto py-1 px-1 rounded-md focus:outline-none shadow"
          placeholder=" John"
        />
      </label>
      <label className="flex w-full text-md md:text-xl  gap-8">
        Last Name{" "}
        <input
          type="text"
          required
          className="border  ml-auto py-1 px-1 rounded-md focus:outline-none shadow"
          placeholder=" Doe"
        />
      </label>
      <label className="w-full flex text-md md:text-xl gap-8 ">
        Email{" "}
        <input
          type="email"
          required
          className="border  ml-auto py-1 px-1 rounded-md focus:outline-none shadow"
          placeholder=" xyz@xyz.com"
        />
      </label>
      <label className="w-full flex text-md md:text-xl gap-8 ">
        Mobile{" "}
        <input
          type="number"
          required
          className="border  ml-auto py-1 px-1 rounded-md focus:outline-none shadow"
          placeholder=" +91 987456123"
        />
      </label>
      {isCompleted ? (
        <div className="flex gap-2 px-6 py-3 border w-[60%] hover:cursor-pointer relative">
          <CheckBoxIcon color="success" />
          <span className="font-medium">Completed</span>
        </div>
      ) : (
        <div
          onClick={handleCaptcha}
          className="flex gap-2 px-6 py-3 border md:w-[60%] hover:cursor-pointer shadow rounded-md relative">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCaptcha}
          />
          <span>I'm not a Robot</span>
          {openCaptcha && <Captcha />}
        </div>
      )}
      <button
        type="submit"
        className={`px-4 py-2  text-white rounded-md font-semibold ${
          isCompleted ? "bg-blue-500" : "bg-blue-300 cursor-not-allowed"
        }`}
        disabled={!isCompleted}>
        Submit
      </button>
    </form>
  );
};
