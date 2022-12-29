import React from 'react'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import { ModalContext } from '../../Context/ModalContext'
import { useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
function SignInSignUp() {
    const [user] = useAuthState(auth);
    const { closeModal } = useContext(ModalContext)
    const [signInShow, setSignInShow] = React.useState(true)
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            console.log(result);
            closeModal()
        }).catch((error) => {
            console.log(error)
        })
        console.log(user);
        console.log(setSignInShow);
    }
    return (
        <div>
            <div className='flex flex-row justify-end p-4'>
                <RxCross1 className='cursor-pointer' onClick={closeModal} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2>{signInShow ? "Sign In " : "Sign Up"}</h2>
                {!signInShow ? <SignUp /> : <SignIn />}
                <div className='p-4 w-full'>
                    <button onClick={signInWithGoogle} className='w-full border-2 bg-primary p-3 font-semibold shadow-lg rounded-full'> Sign In With Google</button>
                </div>
            </div>
        </div>

    )
}

export default SignInSignUp