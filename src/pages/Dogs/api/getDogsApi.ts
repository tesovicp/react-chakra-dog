import axios, { AxiosRequestConfig } from "axios";
import appconfig from "../../../common/appConfig";
import { getDogsList } from "../dogsSlice";

export const getDogsApi: { (dispatch: any): Promise<void> } = async (dispatch: any) => {
    const config: AxiosRequestConfig = {
        baseURL: appconfig.BASE_URL_DOGS,
    };

    axios.get(`breeds/image/random/20`, config)
        .then(response => {
            console.log("!!! API - getDogs !!!");
            if (response.status === 200) {
                dispatch(getDogsList(response.data.message));
            }
        })
        .catch(err => {
            console.log(err);
        });
};