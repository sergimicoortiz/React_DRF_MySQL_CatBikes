import { useContext } from "react"
import axios from 'axios';
import secrets from '../secrets';
import jwt_decode from "jwt-decode";
import JwtService from '../services/JwtService';
// import UserContext from "../context/UserContext";
// const { token } = useContext(UserContext)


export default () => {
    let api = null;
    if (JwtService.getToken()) {
        api = axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${JwtService.getToken()}`
            }
        });
        // api.interceptors.request.use(async req => {
            // console.log(JwtService.getToken())
            // const user = jwt_decode(JwtService.getToken().access);
        // })
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