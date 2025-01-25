import {IFormInputProps} from "../../utils/interfaces/props/IFormInputProps.ts";
import {Group, FormInputLabel, Input} from "./form-input.style.tsx"

const FormInput = (props: IFormInputProps) => {
    const {label, type, name, value, handleChange} = props;
    return (
        <Group>
            <Input type={type} required onChange={handleChange} name={name} value={value}/>
            <FormInputLabel shrink={value.length}>
                {label}
            </FormInputLabel>
        </Group>
    );
}

export default FormInput;
