import {FC} from "react";
import { AppTimeCurrent } from "./AppTimeCurrent";
import { AppTimeDuration } from "./AppTimeDuration";
import "./AppTime.sass"

export const AppTime: FC = () => {
  return (
    <div className="AppTime">
      <AppTimeCurrent />
      <AppTimeDuration />
    </div>
  )
}