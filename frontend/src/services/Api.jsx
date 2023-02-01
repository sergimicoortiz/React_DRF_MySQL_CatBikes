import axios from 'axios';
import secrets from '../secrets';
import JwtService from '../services/JwtService';


const useAxios = () => {
    let api = null;
    if (JwtService.getToken()) {
        api = axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${JwtService.getToken()}`
            }
        });

    } else {
        api = axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
            }
        });
    }

    return api;
}
export default useAxios;