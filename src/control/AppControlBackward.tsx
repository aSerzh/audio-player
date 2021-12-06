import { FC } from "react";
import { AppButtonBackward } from "./buttons/AppButtonBackward";

export const AppControlBackward: FC = () => {
  return(
    <button className="backward">
      <AppButtonBackward />
    </button>
  )
}