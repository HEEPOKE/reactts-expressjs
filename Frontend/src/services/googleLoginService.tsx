import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

export default async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
): Promise<{ accessToken: string; refreshToken: string; } | undefined> => {
    if ("accessToken" in response) {
        try {
            const token = response.accessToken;
            const result = await fetch("http://localhost:8080/auth/google/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token })
            });
            const json = await result.json();

            return { accessToken: json.accessToken, refreshToken: json.refreshToken };
        } catch (e) {
            return undefined;
        }
    } else {
        return undefined;
    }
}