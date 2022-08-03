

function PlantsCard({ product }) {

    return (
        <div>
            {product.map((product) => (
                <div className="plant-preview" key={product.id}>
                    <h2>{ product.name }</h2>
                    <p>Type: { product.category }</p>
                    <p>${ product.price }</p>
                </div>
            ))}
        </div>
    );
}

export default PlantsCard;