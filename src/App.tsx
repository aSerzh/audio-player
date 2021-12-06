import React, { FC } from 'react';
import "./App.sass"
import { AppAudio } from "./audio/AppAudio"
import { AppTime } from "./time/AppTime";
import { AppProgress } from "./progress/AppProgress";
import { AppControl } from "./control/AppControl";
import { AppContext, useAppContext } from "./contexts/AppContext";


export const App: FC = () => {
  const appContext = useAppContext()

  return (
    <AppContext.Provider value={appContext}>

      <div className="App">
        <AppAudio />
        <AppTime />
        <AppProgress />
        <AppControl />
      </div>

    </AppContext.Provider>
  )
}


