import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import FormInput from "../form-input/form-input.component.tsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import Button from "../button/button.component.tsx";
import "./sign-in-form.styles.tsx"
import {SignInContainer} from "./sign-in-form.styles.tsx";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {signInStart} from "../../store/user/user.action.ts";
import {selectCurrentUser} from "../../store/user/user.selector.ts";

const SignInForm = () => {
    const [user, setUser] = useState<IUserSignInRequest>(
        {email: "", password: ""}
    );

    const dispatch = useDispatch<AppDispatch>();
    const globalUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (globalUser) {
            navigate("/");
        }
    }, [globalUser])

    const {email, password} = user;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setUser((prevState) => ({...prevState, [name]: value}));
    }


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const signInRequest: IUserSignInRequest = {email: email, password: password};
        dispatch(signInStart(signInRequest))
    }

    return (
        <SignInContainer>
            <h2>Have an account?</h2>
            <span>Sign in</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email" type='text' name='email' value={email} handleChange={handleChange}/>
                <FormInput label="password" type='password' name='password' value={password}
                           handleChange={handleChange}/>
                <Button buttonType='base' type='submit'>Sign In</Button>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;
