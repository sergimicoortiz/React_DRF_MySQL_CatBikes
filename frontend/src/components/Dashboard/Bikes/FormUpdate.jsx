import React, { useEffect } from 'react'
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './BikesForm.scss';


export default function FormCreate({ oneBike, updateBikes }) {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('name is required')
            .min(6, 'name must be at least 6 characters')
            .max(20, 'name must not exceed 20 characters'),
        status: Yup.string()
            .required('status is required')
            .min(3, 'status must be at least 6 characters')
            .max(20, 'status must not exceed 20 characters'),
    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(function () {
        setValue("slug", oneBike.slug)
        setValue("name", oneBike.name)
        setValue("status", oneBike.status)
    }, [oneBike])


    const getForm = (data) => {
        updateBikes({ 'bike': data })
    }

    return (
        <div className="formStations">
            <form onSubmit={handleSubmit(getForm)}>
                <input name="name" type="text" placeholder='Name' {...register("name")} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.name?.message}</div>
                <select name="status" {...register('status')} defaultValue="">
                    <option value="" disabled>Select</option>
                    <option value="used">Used</option>
                    <option value="unused">Unused</option>
                </select>
                <div className="invalid-feedback">{errors.status?.message}</div>
                <button>
                    Send
                </button>
            </form>
        </div>
    )
}