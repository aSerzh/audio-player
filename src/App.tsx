import React from 'react';
import { AppTime } from "./Time/AppTime";
import { AppProgress } from "./Progress/AppProgress";
import { AppControl } from "./Control/AppControl";

function App() {
  return (
    <div className="App">
      <AppTime />
      <AppProgress />
      <AppControl />
    </div>
  );
}

export default App;
