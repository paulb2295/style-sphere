import {ICurrentUser} from "./ICurrentUser.ts";

interface IUserContextType {
    currentUser: ICurrentUser | null;
    setCurrentUser: (user: ICurrentUser | null) => void;
}

export type {IUserContextType};
