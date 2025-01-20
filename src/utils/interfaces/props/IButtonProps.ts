import {ReactNode} from "react";
import {BUTTON_TYPE_CLASSES} from "../../constants/constants-file.ts";

interface IButtonProps {
    children: ReactNode;
    buttonType: keyof typeof BUTTON_TYPE_CLASSES,
    type: "button" | "submit" | "reset",
}

export type { IButtonProps };
