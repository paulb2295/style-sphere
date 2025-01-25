import {BaseButton, GoogleButton, InvertedButton} from "./button.styles.tsx"
import {IButtonProps} from "../../utils/interfaces/props/IButtonProps.ts";
import {BUTTON_STYLE_TYPE} from "../../utils/constants/constants-file.ts";

const getButton = (buttonType : string = "base") => {
    return buttonType === BUTTON_STYLE_TYPE[0]?
        BaseButton : buttonType === BUTTON_STYLE_TYPE[1]?
            InvertedButton: GoogleButton;
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
