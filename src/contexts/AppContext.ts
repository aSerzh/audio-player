import { createContext } from "react";

export interface AppContextValue {

}

export const AppContext = createContext<AppContextValue>({

})

export function useAppContext(): AppContextValue {
  const player = document.querySelector(".App")

  return (
    () => ({

    })
  )
}