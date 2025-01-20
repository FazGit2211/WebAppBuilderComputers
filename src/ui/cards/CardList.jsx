import Pagination from "../paginations/Pagination";
import CardElement from "./CardElement";

export default function CardList() {
    return (
        <>
            <div className="card-group">
                <CardElement />
                <CardElement />
                <CardElement />
                <CardElement />
            </div>
            <div>
                <Pagination />
            </div>
        </>
    )
}