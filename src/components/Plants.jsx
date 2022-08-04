import { useState, useEffect } from 'react';
import PlantsCard from './PlantsCard';

const Plants = ()=> {
    const [product, setProduct] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [searchChange, setSearchChange] = useState('');
    const [deleteID, setDeleteID] = useState(null);
    

    const handleDelete = (productId) => {
        fetch(`http://localhost:8000/product/${productId}`, 
        { method: "DELETE" })
            .then(() => console.log('All done'))
    }

    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                setProduct(data)
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    function handleSearchChange(event) {
        setSearchChange(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
            >
            </input>
            <select>
                <option>Tree</option>
                <option>Bush</option>
                <option>Flower</option>
            </select>
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {product && <PlantsCard product={product} handleDelete={handleDelete}/>}
        </div>
    );
};

export default Plants;