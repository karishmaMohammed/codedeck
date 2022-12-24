import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { auth } from '../firebaseConfig'
import { ModalContext } from '../Context/ModalContext'
import FormInputComponent from './FormInputComponent'
import 'react-toastify/dist/ReactToastify.css';
import { toastArray } from "./Toast";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";

function SignIn() {
    const { closeModal } = useContext(ModalContext)
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid Email').required("Required Field"),
        password: yup.string().required("Required Field").min(6)
    });
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => {
        auth.signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
            console.log(userCredential)
            toast.success("Login Succesfull", toastArray);
        
        }
        ).catch((error) => {
            console.log(error,toastArray)
            toast.error(error, toastArray);

        })
        console.log(data)
        console.log(register);
        console.log(closeModal);
    }
    return (
        <div className='flex flex-col w-full p-4'>
            
            <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                <FormInputComponent
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    control={control}
                    error={errors?.email?.message}
                    required
                />
                <FormInputComponent
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='Enter your Password'
                    control={control}
                    error={errors?.password?.message}
                    required
                />
            </form>
            <button type='submit' form='hook-form' className='w-full border-2 bg-green p-3 mt-8 font-semibold shadow-lg rounded-lg'> Sign In</button>
            <ToastContainer />
        </div>
    )
}

export default SignIn