
export class AuthModel {

    loginEndPoint: string;
    signUpEndPoint: string;

    constructor() {
        this.loginEndPoint = "/auth/login";
        this.signUpEndPoint = "/api/user";

    }

}

export interface LoginInterface {
    username: string;
    password: string;
};

export interface SignUpInterface {
    email: string;
    password: string;
    name: string;
    lastname: string;
};

