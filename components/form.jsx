import React from 'react';
import Styles from '../styles/form.module.css'
import {useForm} from "react-hook-form";

const Form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className={Styles.mainContainer}>
            <p>
                QUESTION?

                WE ARE HERE

                TO HELP!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && <p>Last name is required</p>}

                <input {...register("mail", { required: "Email Address is required" })} />
                <p>{errors.mail?.message}</p>

                <input type="submit" />
            </form>

        </div>
    );
};

export default Form;
