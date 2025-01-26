import styled from "styled-components";
import {BaseButton, GoogleButton, InvertedButton} from "../button/button.styles.tsx";

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${InvertedButton},
    ${GoogleButton} {
        margin-top: auto;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 280px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;




