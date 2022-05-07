import React from 'react';
import auth from '../../../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const EmailLogin = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [user1] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    if (error) {
        return toast(`Error: ${error?.message}`)
    }
    if (loading) {

    }
    if (user || user1) {
        navigate(from, { replace: true });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='mt-5'>
            <h2 className='mb-3'>Login</h2>
            <Form className='w-50 mx-auto border border-primary p-3 rounded rounded-3 mb-4' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                </Form.Group>

                <button className='d-block mx-auto btn btn-primary w-100' type="submit"  >
                    Login
                </button>
            </Form>
            <div >
                <p className=' text-white text-center mt-2 bg-info py-2 w-50 mx-auto rounded rounded-3'>New to Water Warehouse? <Link className='fw-bold text-warning   ps-3' to='/registar'>Register</Link></p>
                <p className=' text-white text-center mt-2 bg-primary py-2 w-50 mx-auto rounded rounded-3'>Forgot Your Password?<span className='fw-bold  text-warning ps-3'>Reset Password</span></p>

            </div>
            <ToastContainer />
            <div>
                <p style={{ fontSize: '22px' }}>----- OR  -----</p>
            </div>
            <div>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default EmailLogin;