import axios from 'axios';
import secrets from '../secrets';
import jwt_decode from "jwt-decode";
import JwtService from '../services/JwtService';
import dayjs from "dayjs";


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

        let token = JwtService.getToken();

        api.interceptors.request.use(async req => {

            const user = jwt_decode(token);
            const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

            if (!isExpired) return req;

            const response = await axios.post(`${secrets.URL_DRF}refreshToken`, {
                refresh: token,
                username: user.username
            });

            JwtService.saveToken(response.data.token)

            console.log(JwtService.getToken())


            return req;
        })
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