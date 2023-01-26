import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.scss';

const Login = () => {

    const navigate = useNavigate();
    const validators = Yup.object().shape({
        username: Yup.string().required('Username is required').min(3).max(15),
        password: Yup.string().required().min(8, 'Password must have a least 8 characters'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validators)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="login-page">
            <h1>LOGIN</h1>
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Username" name="username" {...register('username')} />
                    <div className="error">{errors.username?.message}</div>
                    <input type="password" placeholder="Password" name="password" {...register('password')} />
                    <div className="error">{errors.password?.message}</div>
                    <button>login</button>
                    <p className="message">Not registered? <a onClick={() => navigate('/register')}>Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login;