import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function FormCreate({ createBike }) {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('name is required')
            .min(6, 'name must be at least 6 characters')
            .max(20, 'name must not exceed 20 characters'),
        status: Yup.string()
            .required('status is required')
            .min(6, 'status must be at least 6 characters')
            .max(20, 'status must not exceed 20 characters'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const getForm = (data) => {
        createBike({ 'bike': data })
    }

    return (
        <form onSubmit={handleSubmit(getForm)}>
            <input name="name" type="text" placeholder='name' {...register("name")} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.name?.message}</div>
            <input name="status" type="text" placeholder='status' {...register("status")} className={`form-control ${errors.status ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.status?.message}</div>
            <button>
                Send
            </button>
        </form>
    )
}