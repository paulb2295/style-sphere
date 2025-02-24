import {Dispatch, FormEvent, SetStateAction} from "react";
import {ACCESS_TOKEN_NAME} from "../../utils/constants/constants-file.ts";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {IUserSignUpRequest} from "../../utils/interfaces/user/IUserSignUpRequest.ts";
import {jwtDecode} from "jwt-decode";
import {axiosInstance} from "../axios/axiosInstance.ts";
import {UserAction} from "../../utils/interfaces/reducers/user/SetCurrentUserAction.ts";
import {setCurrentUserAction} from "../../store/user/user.action.ts";

const signUpService = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    setError: Dispatch<SetStateAction<string | null>>,
    setSuccess: Dispatch<SetStateAction<string | null>>,
    dispatch: Dispatch<UserAction>,
    setUser: Dispatch<SetStateAction<IUserSignUpRequest>>,
): Promise<boolean> => {
    event.preventDefault();
    if (password !== confirmPassword) {
        setError("Passwords don't match");
        alert("Passwords don't match");
        return false;
    }
    setError(null);
    setSuccess(null);
    const payload = {
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "password": password,
    }
    try {
        const response = await axiosInstance.post(`/api/auth/register`, payload);

        setSuccess("Registration successful!");
        const decodedToken: ICurrentUser = jwtDecode(response.data.access_token);
        const currentUser: ICurrentUser = {
            id: decodedToken.id,
            firstname: decodedToken.firstname,
            lastname: decodedToken.lastname,
            email: decodedToken.email,
            role: decodedToken.role,
            access_token: response.data.access_token
        }
        dispatch(setCurrentUserAction(currentUser));
        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.access_token);
        setUser({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''})
        return true;

    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("An unexpected error occurred.");
        }
        return false;
    }
}

export default signUpService;
