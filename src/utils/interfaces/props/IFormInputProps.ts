import {ChangeEvent} from "react";

interface IFormInputProps {
    label?: string;
    type: string;
    name: string;
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type {IFormInputProps};
