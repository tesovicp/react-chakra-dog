import axios, { AxiosRequestConfig } from "axios";
import appconfig from "../../../common/appConfig";
import { setLoading, getCatsList } from "../catsSlice";

export const getCatsApi: { (dispatch: any): Promise<void> } = async (dispatch: any) => {
    const config: AxiosRequestConfig = {
        baseURL: appconfig.BASE_URL_CATS,
        headers: { "x-api-key": "d7d3b8c8-b30d-450a-af30-6de865be665a" }
    };

    dispatch(setLoading(undefined));

    axios.get(`v1/images/search?limit=20`, config)
        .then(response => {
            console.log("!!! API - getCats !!!");

            const urls = response.data.map((d: { breeds: string[], height: number, id: string, url: string, width: number }) => d.url);

            if (response.status === 200) {
                dispatch(getCatsList(urls));
            }
        })
        .catch(err => {
            console.log(err);
        });
};