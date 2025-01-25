import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import FormInput from "../form-input/form-input.component.tsx";
import {ChangeEvent, FormEvent, useState, useContext} from "react";
import Button from "../button/button.component.tsx";
import "./sign-in-form.styles.tsx"
import {UserContext} from "../../contexts/user.context.tsx";
import signInService from "../../services/authntication/sign-in.service.ts";
import {SignInContainer} from "./sign-in-form.styles.tsx";


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
        <SignInContainer>
            <h2>Have an account?</h2>
            <span>Sign in</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email" type='text' name='email' value={email} handleChange={handleChange} />
                <FormInput label="password" type='password' name='password' value={password} handleChange={handleChange} />
                <Button buttonType='base' type='submit'>Sign In</Button>
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
        </SignInContainer>
    );
}

export default SignInForm;
