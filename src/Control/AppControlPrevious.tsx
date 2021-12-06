import { FC } from "react";
import { AppButtonPrevious } from "./Buttons/AppButtonPrevious";

export const AppControlPrevious: FC = () => {
  return (
    <button className="previous" disabled>
      <AppButtonPrevious />
    </button>
  )
}