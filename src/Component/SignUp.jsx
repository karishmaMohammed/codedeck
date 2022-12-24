import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { auth } from '../firebaseConfig'
import { ModalContext } from '../Context/ModalContext'
import FormInputComponent from './FormInputComponent'
import { toast } from "react-toastify";
import { toastArray } from "./Toast";

function SignUp() {
   const { closeModal } = useContext(ModalContext)
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid Email').required("Required Field"),
        password: yup.string().required("Required Field").min(6),
        confirmPassword: yup.string().required("Required Field").min(6).oneOf([yup.ref('password')], 'Passwords must match')
    });
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => {
        auth.createUserWithEmailAndPassword(data.email, data.password).then((userCredential) => {
            toast.success("SignUp Succesfull", toastArray);
        }
        ).catch((error) => {
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
                <FormInputComponent
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    placeholder='Enter your Password again'
                    control={control}
                    error={errors?.confirmPassword?.message}
                    required
                />
            </form>
            <button type='submit' form='hook-form' className='w-full border-2 bg-primaryLight p-3 mt-8 font-semibold shadow-lg rounded-lg'> Sign Up</button>
        </div>
    )
}

export default SignUp;