const IS_DEBUG: boolean = false;

interface IAppConfig {
    BASE_URL_CATS: string;
    BASE_URL_DOGS: string;
    debug: boolean;
}

const appconfig: IAppConfig = {
    BASE_URL_CATS: "https://api.thecatapi.com/",
    BASE_URL_DOGS: "https://dog.ceo/api/",
    debug: IS_DEBUG,
};

export default appconfig;