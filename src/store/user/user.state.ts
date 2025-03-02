import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";

interface UserState {
    currentUser: ICurrentUser | null
    isLoading: boolean,
    error: Error | null,
}

export type {UserState};
