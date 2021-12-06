import { FC } from "react";
import { AppButtonPrevious } from "./buttons/AppButtonPrevious";

export const AppControlPrevious: FC = () => {
  return (
    <button className="previous" disabled>
      <AppButtonPrevious />
    </button>
  )
}