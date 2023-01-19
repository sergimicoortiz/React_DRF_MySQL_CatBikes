import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './StationsForm.scss';

const StationForm = ({ SendData, station = {
    name: '', status: '', image: '', address: '', slug: ''
} }) => {

    const validators = Yup.object().shape({
        name: Yup.string().required('Name is required').min(3).max(15),
        status: Yup.string().required('Status is required'),
        image: Yup.string().url().required('Image is required').min(3).max(50),
        address: Yup.string().required('Address is required').min(3).max(50),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validators)
    });

    useEffect(() => {
        if (station.slug !== '') {
            setValue('name', station.name);
            setValue('status', station.status);
            setValue('image', station.image);
            setValue('address', station.address);
        }
    }, [station]);

    const onSubmit = data => {
        SendData(data);
    };

    const buttonContent = station.slug !== '' ? 'Update' : 'Create';

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: </label>
                <input
                    name="name"
                    type="text"
                    {...register('name')} />
                <div className="error">{errors.name?.message}</div>

                <label>Status: </label>
                <select name="status" {...register('status')} defaultValue="">
                    <option value="" disabled>SELECT ONE OPTION</option>
                    <option value="empty">Empty</option>
                    <option value="full">In use</option>
                    <option value="inactive">Inactive</option>
                </select>
                <div className="error">{errors.status?.message}</div>

                <label>Image: </label>
                <input
                    name="image"
                    type="text"
                    {...register('image')} />
                <div className="error">{errors.image?.message}</div>

                <label>Address: </label>
                <input
                    name="address"
                    type="text"
                    {...register('address')} />
                <div className="error">{errors.address?.message}</div>

                <button type="submit">{buttonContent}</button>
            </form>
        </div>
    )
}

StationForm.propTypes = {
    SendData: propTypes.func.isRequired,
    station: propTypes.object,
}

export default StationForm;