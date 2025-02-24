import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";

interface UserState {
    currentUser: ICurrentUser | null
}

export type {UserState};
