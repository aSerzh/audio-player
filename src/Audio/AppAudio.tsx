import {FC} from "react";
import "./src/sample-3s.mp3"

export const AppAudio:FC = () => {
  return (
    <audio controls preload="auto">
      <source src="http://kdg.htmlweb.ru/music/mark_bernes_-_zhuravli.mp3" />
    </audio>
  )
}