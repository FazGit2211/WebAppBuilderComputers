import axios from "axios";
import { useState } from "react";
const url = 'http://localhost:3000/api/video-game';
// Estado para almacenar los datos
const [data, setData] = useState(null);
// Estado para manejar posibles errores
const [error, setError] = useState(null);
// Estado para indicar si la solicitud está en proceso
const [loading, setLoading] = useState(true);

export const getAllVideoGames = async () => {
    try {
        const response = await axios.get(url);
        
    } catch (error) {

    }
}