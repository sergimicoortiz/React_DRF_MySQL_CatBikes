import { useCallback, useContext, useState, useEffect } from "react"
import UserContext from "../context/UserContext";
import UserService from "../services/UserService";
import JwtService from "../services/JwtService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export function useUser() {
    const navigate = useNavigate();
    const { token, setToken, user, setUser, isAuth, setIsAuth, isAdmin, setIsAdmin } = useContext(UserContext)

    const useLogin = useCallback((data) => {
        UserService.Login({ 'user': data })
            .then(({ data, status }) => {
                if (status === 200) {
                    setToken(data.token);
                    JwtService.saveToken(data.token);
                    setUser(data.user);
                    setIsAuth(true);
                    setIsAdmin(data.user.types === 'admin');
                    toast.success('Login successfully');
                    navigate('/');
                }

            })
            .catch((e) => {
                console.error(e);
                toast.error('Username or password incorrect');
            });
    }, []);

    const useRegister = useCallback((data) => {
        UserService.Register({ 'user': data })
            .then(({ data, status }) => {
                if (status == 200) {
                    setToken(data.token);
                    JwtService.saveToken(data.token);
                    setUser(data.user);
                    setIsAuth(true);
                    setIsAdmin(data.user.types === 'admin');
                    toast.success('Register successfully');
                    navigate('/');
                }
            })
            .catch((e) => {
                console.error(e);
                toast.error('Username or email is used');
            });
    }, [])

    return { user, setUser, useRegister, useLogin }
}