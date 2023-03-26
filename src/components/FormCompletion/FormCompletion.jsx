import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export const FormCompletion = () => {
  return (
    <div className="flex flex-col lg:w-[30%] xl:w-[25%] gap-2 border p-8 items-center">
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: "5rem" }} />
      <span className="text-xl font-semibold">Successfully Submitted</span>
    </div>
  );
};
