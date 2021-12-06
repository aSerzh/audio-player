import React from 'react';
import "./App.sass"
import { AppAudio } from "./Audio/AppAudio"
import { AppTime } from "./Time/AppTime";
import { AppProgress } from "./Progress/AppProgress";
import { AppControl } from "./Control/AppControl";

function App() {
  return (
    <div className="App">
      <AppAudio />
      <AppTime />
      <AppProgress />
      <AppControl />
    </div>
  );
}

export default App;
