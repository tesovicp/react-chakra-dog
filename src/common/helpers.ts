import appConfig from "./appConfig"

export const debug = (action: () => void) => {
    if (appConfig.debug) {
        action();
    }
}