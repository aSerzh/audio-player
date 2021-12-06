import { FC } from "react";
import { AppButtonNext } from "./Buttons/AppButtonNext";

export const AppControlNext: FC = () => {
  return (
    <button className="next" disabled>
      { AppButtonNext }
    </button>
  )
}