import {FC} from "react";
import { AppControlBackward } from "./AppControlBackward";
import { AppControlPlay } from "./AppControlPlay";
import { AppControlForward } from "./AppControlForward";
import { AppControlPrevious } from "./AppControlPrevious";
import { AppControlNext } from "./AppControlNext";
import "./AppControl.sass"


export const AppControl: FC = () => {
  return (
    <div className="AppControl">
      <AppControlPrevious />
      <AppControlBackward />
      <AppControlPlay />
      <AppControlForward />
      <AppControlNext />
    </div>
  )
}
