import { apiConnector } from "../apiconnector"
import { authEndpoints } from "../apis"
const { ASKTOASSISTANT_API , GENERATEIMAGE_API } = authEndpoints;
export const getGeminiResponse = async (command) => {
    try {
        const response = await apiConnector("post", ASKTOASSISTANT_API, {command}, undefined, undefined, true);
        return response.data;
    } catch (error) {
        console.error("Error asking to assistant:", error);
        throw error;
    }
};

//   const getGeminiResponse = async(command)=>{
//         try {
//             const result = await axios.post(`${serverUrl}/api/user/askToAssistant`,{command},{withCredentials:true});
//             return result.data
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
export const generateImage = async (prompt) => {
    try {
        const response = await apiConnector("post", GENERATEIMAGE_API, { prompt }, undefined, undefined, true);
        return response.data.image;
    } catch (error) {
        console.error("Error generating image in service file :", error);
        throw error;
    }
}
