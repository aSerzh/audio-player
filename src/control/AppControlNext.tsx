import { FC } from "react";
import { AppButtonNext } from "./buttons/AppButtonNext";

export const AppControlNext: FC = () => {
  return (
    <button className="next" disabled>
      <AppButtonNext />
    </button>
  )
}