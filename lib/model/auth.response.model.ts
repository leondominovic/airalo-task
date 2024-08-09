export interface AuthResponse {
    data: Data
    meta: Meta
}

export interface Data {
    token_type: string
    expires_in: number
    access_token: string
}

export interface Meta {
    message: string
}
