import { useState } from 'react';
import PlantsCard from './PlantsCard';

function Plants() {
    const [plants, setPlants] = useState([
        {name: 'Rose', price: 5, type: 'flower', id: 1 },
        {name: 'Ginkgo', price: 15, type: 'tree', id: 2 },
        {name: 'Boxwood', price: 10, type: 'bush', id: 3 },
    ])

    const handleDelete = (id) => {
        const newPlants = plants.filter(plant => plant.id !== id);
        setPlants(newPlants);
    }

    return (
        <div>
            <PlantsCard plants={plants} handleDelete={handleDelete}/>
        </div>
    );
}

export default Plants;