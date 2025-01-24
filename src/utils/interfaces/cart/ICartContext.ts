import {Dispatch, SetStateAction} from "react";

interface ICartContext {
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>
}

export type {ICartContext};
