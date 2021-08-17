import React, { ReactNode, useContext, useReducer } from "react";
import logger from "use-reducer-logger";
import appconfig from "../../common/appConfig";
import { debug } from "../../common/helpers";
import { DogsActions, dogsReducer, DogsState } from "./dogsReducer";

const initialState: DogsState = {
    dogsURLList: [],
    big: [],
    selected: undefined
}

type Dispatch = (action: DogsActions) => void;

const DogsContext = React.createContext<{ state: DogsState | undefined, dispatch: Dispatch | undefined }>({ state: undefined, dispatch: undefined });

export const DogsProvider = ({ children }: { children: ReactNode }) => {
    debug(() => console.group("Action"));
    const [state, dispatch] = useReducer(appconfig.debug ? logger(dogsReducer) : dogsReducer, initialState);
    debug(() => console.groupEnd());

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