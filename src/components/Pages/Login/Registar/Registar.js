import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const Registar = () => {

    const [agree, setAgree] = useState(false);
    const [updateProfile] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    if (error) {
        toast(error?.message);
    }
    if (loading) {

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
        toast("Verification Email Sent");
        await createUserWithEmailAndPassword(email, password);
        navigate('/');
    }
    return (
        <div>
            <h2>This is Registar</h2>
            <Form onSubmit={handleRegister} className='w-25 mx-auto mb-5'>
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

                <button style={agree ? { opacity: "1" } : { opacity: ".7" }} className='d-block mx-auto ' type="submit" disabled={!agree} >
                    Register
                </button>
            </Form>
        </div>
    );
};

export default Registar;