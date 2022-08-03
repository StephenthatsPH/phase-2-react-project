import { useState } from 'react';

function Plants() {
    const [plants, setPlants] = useState([
        {name: 'Rose', price: 5, type: 'flower', id: 1 },
        {name: 'Ginkgo', price: 15, type: 'tree', id: 2 },
        {name: 'Boxwood', price: 10, type: 'bush', id: 3 },
    ])
    return (
        <div>
            {plants.map((plant) => (
                <div className="plant-preview" key={plant.id}>
                    <h2>{ plant.name }</h2>
                    <p>Type: { plant.type }</p>
                    <p>${ plant.price }</p>
                </div>
            ))}
        </div>
    );
}

export default Plants;