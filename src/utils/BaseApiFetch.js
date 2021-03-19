import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey  = "api_key=2b4aecb796508d33c275f00dc5177324&language=fr-FR";

const BaseApiFetch = (url) => {
    const isInterogation = url.includes("?") ? "&" : "?";

    return axios.get(baseUrl + url + isInterogation + apiKey)
        .catch(e => console.error(e.message));
}

export default BaseApiFetch;