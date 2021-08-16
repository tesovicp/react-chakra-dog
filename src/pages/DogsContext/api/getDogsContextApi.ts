import axios, { AxiosRequestConfig } from "axios";
import appconfig from "../../../common/appConfig";

export const getDogsContextApi: { (dispatch: any): Promise<void> } = async (dispatch: any) => {
    const config: AxiosRequestConfig = {
        baseURL: appconfig.BASE_URL_DOGS,
    };

    axios.get(`breeds/image/random/20`, config)
        .then(response => {
            console.log("!!! API - getDogsContext !!!");
            if (response.status === 200) {
                dispatch({ type: "getDogs", dogsURLList: response.data.message });
            }
        })
        .catch(err => {
            console.log(err);
        });
};