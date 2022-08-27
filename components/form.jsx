import React from 'react';
import Styles from '../styles/form.module.css'
import {useForm} from "react-hook-form";

const Form = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className={Styles.mainContainer}>
            <p>
                QUESTION? WE ARE HERE
                TO HELP!
            </p>
            <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>NAME</div>
                    <input className={Styles.formInput} {...register("firstName", {required: true})} />
                     <p style={{color:'red'}}>{errors.firstName?.type === 'required' && 'This field is required'}</p>
                </div>

                <div style={{width:'100%'}}>
                    <div>EMAIL</div>
                    <input className={Styles.formInput} multiple={true} {...register("email", {required: true})} />
                    <p style={{color:'red'}}>{errors.email?.type === 'required' && 'This field is required'}</p>
                </div>

                <div>
                    <div>Message</div>
                    <textarea rows={4} className={Styles.formInput} {...register("message", {required: true})} />
                    <input value="SEND" className={Styles.submitButton} type="submit" />

                </div>
            </form>

        </div>
    );
};

export default Form;
