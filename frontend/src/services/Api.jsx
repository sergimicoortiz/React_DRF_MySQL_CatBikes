import axios from 'axios';
import secrets from '../secrets';
import JwtService from '../services/JwtService';

export default () => {
    if (JwtService.getToken()) {
        return axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${JwtService.getToken()}`
            }
        });
    } else {
        return axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
            }
        });
    }

}