import {APIRequestContext, expect, request} from "@playwright/test";
import {AuthResponse} from "../model/auth.response.model";

export class ApiClient {
    readonly request: APIRequestContext;
    private constructor(request: APIRequestContext) {
        this.request = request;
    }

    static async init(newRequest: APIRequestContext) {
        const token = await ApiClient.getToken(newRequest);

        const newContext = await request.newContext({
            baseURL: process.env.API_URL,
            extraHTTPHeaders: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        });
        return new ApiClient(newContext);
    }

    private static async getToken(request: APIRequestContext) {
        const formData: { [key: string]: string } = {};
        formData["client_id"] = process.env.CLIENT_ID!;
        formData["client_secret"] = process.env.CLIENT_SECRET!;
        formData["grant_type"] = "client_credentials";

        const response = await request.post("v2/token", {form: formData});
        const data = await response.json() as AuthResponse;

        expect(data.meta.message).toBe("success");

        return data.data.access_token;
    }
}