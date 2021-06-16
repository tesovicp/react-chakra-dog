const IS_DEBUG: boolean = true;

interface IAppConfig {
    BASE_URL: string;
    debug: boolean;
}

const appconfig: IAppConfig = {
    BASE_URL: "https://dog.ceo/api/",
    debug: IS_DEBUG,
};

export default appconfig;