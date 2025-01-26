import {BaseButton, GoogleButton, InvertedButton} from "./button.styles.tsx"
import {IButtonProps} from "../../utils/interfaces/props/IButtonProps.ts";
import {BUTTON_STYLE_TYPE} from "../../utils/constants/constants-file.ts";

const getButton = (buttonType: keyof typeof BUTTON_STYLE_TYPE) => {
    switch (buttonType) {
        case 'inverted':
            return InvertedButton;
        case 'google':
            return GoogleButton;
        default:
            return BaseButton;
    }
}

const Button = (props: IButtonProps) => {
    const {children, buttonType, type} = props;
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton
            type={type}
            onClick={props.onClick}
        >
            {children}
        </CustomButton>
    );
}

export default Button;
