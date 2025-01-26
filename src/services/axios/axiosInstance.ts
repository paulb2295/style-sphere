import axios from "axios";
import {BASE_URL} from "../../utils/constants/constants-file.ts";

export const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        let errorMessage: string;
        const errorList: string[] = [];
        if (error.response) {

            const {data} = error.response;

            for (const prop in data) {
                errorList.push(data[prop]);
            }

            errorMessage = errorList.length > 1
                ? errorList.join('\n') //
                : data.message || 'An error occurred.';

        } else if (error.request) {
            errorMessage = 'No response received from the server. Try again later.';
        } else {
            errorMessage = 'An unexpected error occurred. Try again later.';
        }
        error.message = errorMessage;

        return Promise.reject(error);
    }
);
