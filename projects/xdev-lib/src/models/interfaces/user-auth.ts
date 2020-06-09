export interface UserAuthRequest {
    username: string;
    password: string;
}

export interface UserAuthResponse {
    jwtToken: string;
}
