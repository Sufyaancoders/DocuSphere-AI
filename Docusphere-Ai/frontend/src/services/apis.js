const BASE_URL = "http://localhost:5001/api/v1"

export const authEndpoints = {
    LOGIN_API: `${BASE_URL}/login`,
    LOGOUT_API: `${BASE_URL}/logout`,
    SIGNUP_API: `${BASE_URL}/signup`,
    SENDOTP_API: `${BASE_URL}/send-otp`,
    RESETPASSTOKEN_API: `${BASE_URL}/reset-password-token`,
    RESETPASSWORD_API: `${BASE_URL}/reset-password`,
    ASKTOASSISTANT_API: `${BASE_URL}/gemini/ask-to-assistant`,
    GENERATEIMAGE_API: `${BASE_URL}/gemini/generate-image`
};
