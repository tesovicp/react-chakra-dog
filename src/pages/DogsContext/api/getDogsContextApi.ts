import axios, { AxiosRequestConfig } from "axios";
import appconfig from "../../../common/appConfig";
import { debug } from "../../../common/helpers";

export const getDogsContextApi: { (dispatch: any): Promise<void> } = async (dispatch: any) => {
    const config: AxiosRequestConfig = {
        baseURL: appconfig.BASE_URL_DOGS,
    };

    axios.get(`breeds/image/random/24`, config)
        .then(response => {
            debug(() => console.log("!!! API - getDogsContext !!!"));
            if (response.status === 200) {
                dispatch({ type: "getDogs", dogsURLList: response.data.message });
            }
        })
        .catch(err => {
            console.log(err);
        });
};