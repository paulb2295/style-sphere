import {ReactNode, MouseEvent} from "react";


interface IButtonProps {
    children: ReactNode;
    buttonType: string,
    type: "button" | "submit" | "reset",
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
}

export type { IButtonProps };
