import {Dispatch, FormEvent, SetStateAction} from "react";
import {BASE_URL} from "../../utils/constants/constants-file.ts";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {jwtDecode} from "jwt-decode";
import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import {axiosClient} from "../axios/axios.client.ts";

const signInService = (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setError: Dispatch<SetStateAction<string | null>>,
    setSuccess: Dispatch<SetStateAction<string | null>>,
    setCurrentUser: Dispatch<SetStateAction<ICurrentUser>>,//(currentUser: ICurrentUser) => void,
    setUser: Dispatch<SetStateAction<IUserSignInRequest>>//(user: IUserSignInRequest) => void,
) => {
    event.preventDefault();
    if (!email || !password) {
        alert("Fields mandatory");
        setError("Fields mandatory");
        return;
    }
    setError(null);
    setSuccess(null);
    const payload = {
        "email": email,
        "password": password,
    }

    axiosClient.post(`${BASE_URL}/api/auth/authenticate`, payload)
        .then((res) => {
            if (res.status === 201 || res.status === 200) {
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
            } else {
                setError('"An error occurred during registration."')
            }
        })
        .catch(error => {
            console.log(error);
        })
}

export default signInService;
