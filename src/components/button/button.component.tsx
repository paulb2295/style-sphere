import "./button.styles.scss"
import {IButtonProps} from "../../utils/interfaces/props/IButtonProps.ts";
import {BUTTON_TYPE_CLASSES} from "../../utils/constants/constants-file.ts";

const Button = (props: IButtonProps) => {
    const {children, buttonType, type} = props;
    return (
      <button
          className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
          type={type}
          onClick={props.onClick}
      >
          {children}
      </button>
    );
}

export default Button;
