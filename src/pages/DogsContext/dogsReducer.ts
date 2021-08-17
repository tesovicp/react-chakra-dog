export type DogsState = {
    dogsURLList: string[];
    big: string[];
    selected?: string;
}

export type DogsActions =
    | { type: "getDogs", dogsURLList: string[] }
    | { type: "makeBig", dogId: string }
    | { type: "removeDog", dogId: string }
    | { type: "select", dogId: string }

export const dogsReducer = (state: DogsState, action: DogsActions) => {
    switch (action.type) {
        case "getDogs": {
            return { ...state, dogsURLList: action.dogsURLList }
        }
        case "makeBig": {
            if (state.big.indexOf(action.dogId) < 0) {
                return { ...state, big: [...state.big, action.dogId] }
            } else {
                return { ...state, big: state.big.filter(b => b !== action.dogId) }
            }
        }
        case "removeDog": {
            const newList = state.dogsURLList.filter(d => d !== action.dogId);
            return { ...state, dogsURLList: newList }
        }
        case "select": {
            if (state.selected !== action.dogId) {
                return { ...state, selected: action.dogId }
            } else {
                return { ...state, selected: undefined, big: [] }
            }
        }
        default: {
            // throw new Error(`Unhandled action: ${action.type}`);
            throw new Error(`Unhandled action: ${action}`);
        }
    }
}