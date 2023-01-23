import React, { useEffect } from 'react'
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function FormCreate({ oneBike, updateBikes }) {

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