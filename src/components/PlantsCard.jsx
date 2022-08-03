

function PlantsCard({ plants, handleDelete }) {

    return (
        <div>
            {plants.map((plant) => (
                <div className="plant-preview" key={plant.id}>
                    <h2>{ plant.name }</h2>
                    <p>Type: { plant.type }</p>
                    <p>${ plant.price }</p>
                    <button onClick={() => handleDelete(plant.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PlantsCard;