import { apiConnector } from "../apiconnector"
import { authEndpoints } from "../apis"
const { ASKTOASSISTANT_API } = authEndpoints;
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