export default function CardElement({values}) {
    return (
        <>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{values.name}</h5>
                        <p className="card-text">{values.genred}</p>
                        <p className="card-text"><small className="text-body-secondary">{values.year}</small></p>
                    </div>
            </div>
        </>
    )
}