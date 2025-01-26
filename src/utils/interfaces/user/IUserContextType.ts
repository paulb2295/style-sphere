import {ICurrentUser} from "./ICurrentUser.ts";
import {Dispatch, SetStateAction} from "react";

interface IUserContextType {
    currentUser: ICurrentUser;
    setCurrentUser: Dispatch<SetStateAction<ICurrentUser>>;
}

export type {IUserContextType};
