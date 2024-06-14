export interface UserModel {
    id: number;
    name: string;
}

export interface UserList {
    users: UserModel[];
}

export interface UserDetail {
    user: UserModel;
}
