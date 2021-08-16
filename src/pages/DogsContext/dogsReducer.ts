export type DogsState = {
    dogsURLList: string[];
}

export type DogsActions =
    | { type: "getDogs", dogsURLList: string[] }
    | { type: "removeDog", dogsId: string }

export const dogsReducer = (state: DogsState, action: DogsActions) => {
    switch (action.type) {
        case "getDogs": {
            return { ...state, dogsURLList: action.dogsURLList }
        }
        case "removeDog": {
            const newList = state.dogsURLList.filter(d => d !== action.dogsId);
            return { ...state, dogsURLList: newList }
        }
        default: {
            // throw new Error(`Unhandled action: ${action.type}`);
            throw new Error(`Unhandled action: ${action}`);
        }
    }
}