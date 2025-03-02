import SignUpForm from "../../components/sign-up-form/sign-up-form.component.tsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.tsx";
import "./authentication.styles.tsx"
import {AuthenticationContainer} from "./authentication.styles.tsx";
import {useSelector} from "react-redux";
import {selectUserError} from "../../store/user/user.selector.ts";

const Authentication = () => {
    const userError = useSelector(selectUserError);
    const error = userError?.message;
    return (
        <>
            <AuthenticationContainer>
                <SignInForm/>
                <SignUpForm/>
            </AuthenticationContainer>
            {error ? (
                <ul style={{
                    color: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    fontSize: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center"
                }}>
                    {error.split('!').filter(sentence => sentence.trim() !== "").map((sentence, index) => (
                        <li key={index}>{sentence.trim()}!</li>
                    ))}
                </ul>
            ) : null}

        </>
    );
}

export default Authentication;
