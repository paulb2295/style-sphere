import {useState, ChangeEvent, FormEvent, useEffect} from "react";
import {IUserSignUpRequest} from "../../utils/interfaces/user/IUserSignUpRequest.ts";
import FormInput from "../form-input/form-input.component.tsx";
import "./sign-up-form.styles.tsx"
import Button from "../button/button.component.tsx";
import {SignUpContainer} from "./sign-up-form.styles.tsx";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {signUpStart} from "../../store/user/user.action.ts";
import {selectCurrentUser} from "../../store/user/user.selector.ts";

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
    const globalUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        if (globalUser) {
            navigate("/");
        }
    }, [globalUser])

    const {firstName, lastName, email, password, confirmPassword} = user;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setUser((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const signUpRequest: IUserSignUpRequest = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            lastName: lastName,
        }
        dispatch(signUpStart(signUpRequest))
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account? </h2>
            <span>Sign up</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Fist Name' type='text' name='firstName' value={firstName}
                           handleChange={handleChange}/>
                <FormInput label='Last Name' type='text' name='lastName' value={lastName} handleChange={handleChange}/>
                <FormInput label='Email' type='email' name='email' value={email} handleChange={handleChange}/>
                <FormInput label='Password' type='password' name='password' value={password}
                           handleChange={handleChange}/>
                <FormInput label='Confirm Password' type='password' name='confirmPassword' value={confirmPassword}
                           handleChange={handleChange}/>
                <Button buttonType='base' type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;
