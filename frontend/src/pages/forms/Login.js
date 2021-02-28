import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Button } from '../../components/Button';

const LoginStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 70px;
    .nav {
        position: absolute;
        z-index: 9;
        width: 100vw;
        top: 60px;
        left: 5px;
        display: flex;
        img {
            height: 25px;
        }
        p {
            margin: 0 10px;
            font-size: 1.1rem;
        }
    }
    h3 {
        margin: 20px 0;
    }
    .description {
        margin: 0;
        color: ${props=>props.theme.color.color2};
    }
    form {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;
        padding: 5vh 0;
        input[type='text'],
        input[type='email'],
        input[type='password'] {
            width: 100%;
            height: 40px;
            background-color: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid ${props=>props.theme.color.color2};
            margin: 5px 0;
            font-size: 1.1rem;
        }
        input::placeholder {
            color: white;
            font-size: 1.1rem;
        }
        .forgot-psw {
            position: relative;
            text-align: right;
            width: 100%;
            font-weight: bold;
            font-size: .8rem;
            padding-right: 10px;
            top: -47px;
        }
        .error-msg {
            color: ${props=>props.theme.color.color3};
            font-weight: bold;
        }
        button {
            text-transform: uppercase;
        }
    }
    .login-social-text {
        font-weight: bold;
        font-size: .8rem;
    }
    .login-social {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        img {
            margin: 0 10px;
        }
    }
    .login {
        color: ${props=>props.theme.color.color2};
        font-size: .8rem;
        a {
            font-weight: bold;
            color: black;
            font-size: .8rem;
        }
    }
`;

const Login = () => {
    return (
        <LoginStyled>
            <Link to="/home">
                <nav className="nav">
                    <img src="./images/arrow.png" alt="Flecha"/>
                    <p>Home</p>
                </nav>
            </Link>
            <h3>Login</h3>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Formik
            initialValues={{ email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Necesitamos tu Email por favor';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Dirección de Email incorrecto';
                } else if (!values.password) {
                errors.password = 'Necesitas tu contraseña para entrar';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <ErrorMessage name="email" component="div"  className="error-msg"></ErrorMessage>
                <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                />
                <p className="forgot-psw"><Link to="/recover-password">Te la olvidaste?</Link></p>
                <ErrorMessage name="password" component="div"  className="error-msg"></ErrorMessage>
                <Button type="submit" disabled={isSubmitting}>
                    Listo!
                </Button>
                </Form>
            )}
            </Formik>

            <p className="login-social-text">O ingresar con</p>
            <div className="login-social">
                <a href="/googlecb"><img src="./images/google.png" alt="Logo Google"/></a>
                <a href="/facebookcb"><img src="./images/facebook.png" alt="Logo Facebook"/></a>
            </div>
            <p className="login">Todavía no tenés cuenta? <Link to="/signup">Crear Cuenta</Link></p>
        </LoginStyled>
    );
};

export default Login;
