import React, { ReactNode, useContext, useReducer } from "react";
import { DogsActions, dogsReducer, DogsState } from "./dogsReducer";

const initialState: DogsState = {
    dogsURLList: []
}

type Dispatch = (action: DogsActions) => void;

const DogsContext = React.createContext<{ state: DogsState | undefined, dispatch: Dispatch | undefined }>({ state: undefined, dispatch: undefined });

export const DogsProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(dogsReducer, initialState);

    const contextValue = { state, dispatch };

    return (
        <DogsContext.Provider value={contextValue}>
            {children}
        </DogsContext.Provider>
    )
}

export const useDogsContext = () => {
    const context = useContext(DogsContext);
    return context;
}