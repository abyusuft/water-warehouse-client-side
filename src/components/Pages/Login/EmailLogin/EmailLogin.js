import React from 'react';
import auth from '../../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const EmailLogin = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);



    if (error) {
        return toast(`Error: ${error?.message}`)
    }
    if (loading) {

    }
    if (user) {

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }



    return (
        <div>
            <h2>This is Login Page</h2>
            <Form className='w-50 mx-auto' onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <p className='text-center'>New to Water? <Link className='text-decoration-none fw-bold' to='/registar'> Register</Link></p>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />

        </div>
    );
};

export default EmailLogin;