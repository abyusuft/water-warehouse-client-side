import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        toast(error.message)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <span onClick={handleGoogleSignIn} className='d-block w-50 mx-auto bg-dark text-center py-2 rounded rounded-3 mb-5' style={{ cursor: "pointer" }}>
                <img width={30} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                <span className='btn-link text-white text-decoration-none fw-bold ms-3'>Sign in with Google</span>
            </span>
        </div>
    );
};

export default SocialLogin;