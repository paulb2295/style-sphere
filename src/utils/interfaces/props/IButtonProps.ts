import {ReactNode, MouseEvent} from "react";
import {BUTTON_STYLE_TYPE} from "../../constants/constants-file.ts";


interface IButtonProps {
    children: ReactNode;
    buttonType: keyof typeof BUTTON_STYLE_TYPE,
    type: "button" | "submit" | "reset",
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
}

export type {IButtonProps};
