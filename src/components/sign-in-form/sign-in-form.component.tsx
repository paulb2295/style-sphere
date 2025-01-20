import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import FormInput from "../form-input/form-input.component.tsx";
import {ChangeEvent, FormEvent, useState, useContext} from "react";
import Button from "../button/button.component.tsx";
//import axios from "axios";
//import {ACCESS_TOKEN_NAME, BASE_URL} from "../../utils/constants/constants-file.ts";
import "./sign-in-form.styles.scss"
//import {ICurrentUser} from "../../utils/interfaces/ICurrentUser.ts";
import {UserContext} from "../../contexts/user.context.tsx";
//import {jwtDecode} from "jwt-decode";
import signInService from "../../services/authntication/sign-in.service.ts";

const SignInForm = () => {
    const [user, setUser] = useState<IUserSignInRequest>(
        {email: "", password: ""}
    );
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const {setCurrentUser} = useContext(UserContext);
    const {email, password} = user;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setUser((prevState) => ({...prevState, [name]: value}));
    }


    const handleSubmit = async (event: FormEvent<HTMLFormElement>,) => {
          signInService(
            event, email, password, setError, setSuccess, setCurrentUser,setUser
          );
    }

    return (
        <div className='sign-in-container'>
            <h2>Have an account?</h2>
            <span>Sign in</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email" type='text' name='email' value={email} handleChange={handleChange} />
                <FormInput label="password" type='password' name='password' value={password} handleChange={handleChange} />
                <Button buttonType='normal' type='submit'>Sign In</Button>
            </form>
            <p>{error? error : success}</p>
        </div>
    );
}

export default SignInForm;
