const BASE_URL = "http://localhost:4000/api/v1"

export const authEndpoints = {
    LOGIN_API: `${BASE_URL}/auth/login`,
    LOGOUT_API: `${BASE_URL}/auth/logout`,
    SIGNUP_API: `${BASE_URL}/auth/signup`,
    SENDOTP_API: BASE_URL + "/auth/send-otp"
};
