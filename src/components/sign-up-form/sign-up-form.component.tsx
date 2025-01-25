import {useState, ChangeEvent, FormEvent, useContext} from "react";

import {IUserSignUpRequest} from "../../utils/interfaces/user/IUserSignUpRequest.ts";

import FormInput from "../form-input/form-input.component.tsx";
import "./sign-up-form.styles.scss"
import Button from "../button/button.component.tsx";
import {UserContext} from "../../contexts/user.context.tsx";
import signUpService from "../../services/authntication/sign-up.service.ts";
import {useNavigate} from "react-router";

const SignUpForm = () => {

    const [user, setUser] = useState<IUserSignUpRequest>(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    );
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const {firstName, lastName, email, password, confirmPassword} = user;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setUser((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        await signUpService(event, email, password, confirmPassword, firstName, lastName, setError, setSuccess, setCurrentUser, setUser);
        navigate("/");
    }


    return (
        <div className='sign-up-container'>
            <h2>Don't have an account? </h2>
            <span>Sign up</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Fist Name' type='text' name='firstName' value={firstName} handleChange={handleChange} />
                <FormInput label='Last Name' type='text' name='lastName' value={lastName} handleChange={handleChange} />
                <FormInput label='Email' type='email' name='email' value={email} handleChange={handleChange} />
                <FormInput label='Password' type='password' name='password' value={password} handleChange={handleChange} />
                <FormInput label='Confirm Password' type='password' name='confirmPassword' value={confirmPassword} handleChange={handleChange} />
                <Button buttonType='normal' type="submit">Sign Up</Button>
            </form>
            {error ? (
                <p  style={{color: 'red'}}
                    dangerouslySetInnerHTML={{
                        __html: error.replace(/\n/g, '<br/>'),
                    }}
                />
            ) : (
                <p style={{color: 'green'}}>{success}</p>
            )}
        </div>
    );
}

export default SignUpForm;
