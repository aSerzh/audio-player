import {FC} from "react";
import "./AppProgress.sass"

export const AppProgress: FC = () => {
  return (
    <input className="AppProgress" type="range" min="1" max="100"/>
  )

}
