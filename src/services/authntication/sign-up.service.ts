import {Dispatch, FormEvent, SetStateAction} from "react";
import {ACCESS_TOKEN_NAME, BASE_URL} from "../../utils/constants/constants-file.ts";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {IUserSignUpRequest} from "../../utils/interfaces/user/IUserSignUpRequest.ts";
import {jwtDecode} from "jwt-decode";
import {axiosClient} from "../axios/axios.client.ts";

const signUpService = async (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    setError: Dispatch<SetStateAction<string | null>>,
    setSuccess: Dispatch<SetStateAction<string | null>>,
    setCurrentUser: Dispatch<SetStateAction<ICurrentUser>>, //(currentUser: ICurrentUser) => void,
    setUser: Dispatch<SetStateAction<IUserSignUpRequest>>,
) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        setError("Passwords don't match");
        alert("Passwords don't match");
        return;
    }
    setError(null);
    setSuccess(null);
    const payload = {
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "password": password,
    }
    axiosClient.post(`${BASE_URL}/api/auth/register`, payload)
        .then(response => {
            if (response.status === 201 || response.status === 200) {
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
                setCurrentUser(currentUser);
                localStorage.setItem(ACCESS_TOKEN_NAME, response.data.access_token);
                setUser({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''})
            } else {
                setError('"An error occurred during registration."')
            }
        })
        .catch(error => {
            console.log(error);
        })
}

export default signUpService;
