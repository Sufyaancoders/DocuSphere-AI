const BASE_URL = "http://localhost:5000/api/v1"

export const authEndpoints = {
    LOGIN_API: `${BASE_URL}/auth/login`,
    LOGOUT_API: `${BASE_URL}/auth/logout`,
    SIGNUP_API: `${BASE_URL}/auth/signup`,
    SENDOTP_API: BASE_URL + "/auth/send-otp",
    RESETPASSTOKEN_API: `${BASE_URL}/auth/reset-password-token`,
    RESETPASSWORD_API: `${BASE_URL}/auth/reset-password`,
};
