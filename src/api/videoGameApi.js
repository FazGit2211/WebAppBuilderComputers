import axios from "axios";
const url = 'http://localhost:3000/api/video-game';


export const getAllVideoGames = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error
    }
};