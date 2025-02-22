import {ICurrentUser} from "../../user/ICurrentUser.ts";

interface UserState {
    currentUser: ICurrentUser | null
}

export type {UserState};
