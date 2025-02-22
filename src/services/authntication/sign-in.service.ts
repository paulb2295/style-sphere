import {Dispatch, FormEvent, SetStateAction} from "react";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {jwtDecode} from "jwt-decode";
import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import {axiosInstance} from "../axios/axiosInstance.ts";

const signInService = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setError: Dispatch<SetStateAction<string | null>>,
    setSuccess: Dispatch<SetStateAction<string | null>>,
    setCurrentUser: (user: ICurrentUser) => void,
    setUser: Dispatch<SetStateAction<IUserSignInRequest>>//(user: IUserSignInRequest) => void,
): Promise<boolean> => {
    event.preventDefault();
    if (!email || !password) {
        alert("Sign In Fields mandatory");
        setError("Sign In Fields mandatory");
        return false;
    }
    setError(null);
    setSuccess(null);
    const payload = {
        "email": email,
        "password": password,
    }

    try {
        const res = await axiosInstance.post(`/api/auth/authenticate`, payload)
        setSuccess("Sign in successful!");
        const decodedToken: ICurrentUser = jwtDecode(res.data.access_token);
        const currentUser: ICurrentUser = {
            id: decodedToken.id,
            firstname: decodedToken.firstname,
            lastname: decodedToken.lastname,
            email: decodedToken.email,
            role: decodedToken.role,
            access_token: res.data.access_token
        }
        setCurrentUser(currentUser);
        setUser({email: '', password: ''});
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

export default signInService;
