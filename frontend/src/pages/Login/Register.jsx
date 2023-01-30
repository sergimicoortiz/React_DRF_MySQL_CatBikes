import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import './LoginRegister.scss';
import { useUser } from "../../hooks/useUser";

const Register = () => {
    const { useRegister } = useUser();

    const navigate = useNavigate();
    const passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    const validators = Yup.object().shape({
        username: Yup.string().required('Username is required').min(3).max(15),
        password: Yup.string().required().min(8, 'password must have a least 8 characters').matches(passwordRegex, 'At least one uppercase letter, one lowercase letter, one number and a special character'),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        email: Yup.string().email().required()
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validators)
    });

    const onSubmit = (data) => {
        delete (data['passwordConfirmation']);
        useRegister(data)
        // console.log(data);
    }

    return (
        <div className="login-page">
            <h1>REGISTER</h1>
            <div className="form">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Username" name="username" {...register('username')} />
                    <div className="error">{errors.username?.message}</div>
                    <input type="text" placeholder="Email" name="email" {...register('email')} />
                    <div className="error">{errors.email?.message}</div>
                    <input type="password" placeholder="Password" name="password" {...register('password')} />
                    <div className="error">{errors.password?.message}</div>
                    <input type="password" placeholder="Repeat password" name="passwordConfirmation" {...register('passwordConfirmation')} />
                    <div className="error">{errors.passwordConfirmation?.message}</div>
                    <button>register</button>
                    <p className="message">Already registered? <a onClick={() => navigate('/login')}>Sign In</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register;