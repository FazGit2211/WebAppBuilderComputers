import Pagination from "../paginations/Pagination";
import CardElement from "./CardElement";
import { useState, useEffect } from "react";
import { getAllVideoGames } from "../../api/videoGameApi"
export default function CardList() {
    // Estado para almacenar los datos
    const [data, setData] = useState({});
    // Estado para manejar posibles errores
    const [error, setError] = useState(null);
    // Estado para indicar si la solicitud está en proceso
    const [loading, setLoading] = useState(true);

    //Utilizar el método getAllVideoGames
    useEffect(() => {
        const videoGames = async () => {
            try {

                const values = await getAllVideoGames();
                setData(values);
                setLoading(false);
            } catch (error) {
                setError('Hubo un error al obtener los datos');
                setLoading(false)
            }
        };
        videoGames();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="card-group">
                {Object.entries(data).map(([id,elem])=>{
                   return <CardElement key={id} values={elem}/>}
                )}
            </div>
            <div>
                <Pagination />
            </div>
        </>
    )
}