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
        name: Yup.string().required('Name is required').min(3).max(50),
        status: Yup.string().required('Status is required'),
        image: Yup.string().url().required('Image is required').min(3).max(100),
        address: Yup.string().required('Address is required').min(3).max(50),
        slot_quantity: Yup.number().min(1),
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

    const slot_quantity_form = station.status == '' ?
        <div>

            <label>Slot quantity: </label>
            <input
                name="slot_quantity"
                min="0"
                type="number"
                {...register('slot_quantity')} />
            <div className="error">{errors.slot_quantity?.message}</div>
        </div>
        : '';


    const onSubmit = data => {
        SendData(data);
    };

    const buttonContent = station.slug !== '' ? 'Update' : 'Create';

    return (
        <div className="formStations">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: </label>
                <input
                    name="name"
                    type="text"
                    {...register('name')} />
                <div className="error">{errors.name?.message}</div>

                <label>Status: </label>
                <select name="status" {...register('status')} defaultValue="">
                    <option value="" disabled>Select</option>
                    <option value="active">Active</option>
                    <option value="manteinance">Manteinance</option>
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
                {slot_quantity_form}
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