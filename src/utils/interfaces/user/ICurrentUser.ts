interface ICurrentUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    access_token: string;
}

export type {ICurrentUser};
