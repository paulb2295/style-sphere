import {IFormInputProps} from "../../utils/interfaces/props/IFormInputProps.ts";
import "./form-input.style.scss"

const FormInput = (props: IFormInputProps) => {
    const {label, type, name, value, handleChange} = props;
    return (
        <div className="group">
            <input className='form-input' type={type} required onChange={handleChange} name={name} value={value}/>
            <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        </div>
    );
}

export default FormInput;
