import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const Registar = () => {

    const [agree, setAgree] = useState(false);
    const [updateProfile] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const navigate = useNavigate();

    if (error) {
        toast(error?.message);
    }
    if (loading) {
        return <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    if (user) {

    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cPassword = event.target.cpassword.value;
        if (password.length < 6) {
            toast("Password Must be 6 character or longer");
            return;
        }
        if (password !== cPassword) {
            const message = "Password & Confirm Password does not match";
            toast(message);
            return;
        }
        await updateProfile({ displayName: name });
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        toast('Verification Email Sent');
        navigate('/');
    }
    return (
        <div className='mt-5'>
            <h2 className='mb-3'>Registar</h2>
            <Form onSubmit={handleRegister} className='w-50 mx-auto border border-primary p-3 rounded rounded-3 mb-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control type="password" name="cpassword" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Agree our Terms and Condition" />
                </Form.Group>

                <button style={agree ? { opacity: "1" } : { opacity: ".7" }} className='d-block mx-auto btn btn-primary w-100' type="submit" disabled={!agree} >
                    Register
                </button>
            </Form>
            <div >
                <p className=' text-white text-center mt-2 bg-info py-2 w-50 mx-auto rounded rounded-3'>Already have an Account? <Link className='fw-bold text-warning   ps-3' to='/login'>Login</Link></p>

            </div>
        </div>
    );
};

export default Registar;