import {RootState} from "../root-reducer.ts";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export const selectUserError = (state: RootState) => state.user.error;
