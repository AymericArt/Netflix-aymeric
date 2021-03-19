import axios from "axios";
import {BaseUrl, ApiKey} from './env'

const BaseApiFetch = (url) => {
    const isInterogation = url.includes("?") ? "&" : "?";

    return axios.get(BaseUrl + url + isInterogation + ApiKey)
        .catch(e => console.error(e.message))
    ;
}

export default BaseApiFetch;