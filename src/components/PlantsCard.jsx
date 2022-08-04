

function PlantsCard({ product, handleDelete }) {

    
    return (
        <div>
            {product.map((product) => (
                <div className="plant-preview" key={product.id}>
                    <h6 hidden>{ product.id }</h6>
                    <h2>{ product.name }</h2>
                    <p>Type: { product.category }</p>
                    <p>${ product.price }</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PlantsCard;