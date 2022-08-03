import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(1);
    const [category, setCategory] = useState("tree");
    const [isPending, setIsPending] = useState(false);
    const [product, setProduct] = useState(null);
    const history= useHistory();

    useEffect(() => {
    if(product) {
    fetch('http://localhost:8000/product', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
    }).then(() =>{
        console.log("new product added");
        
        setIsPending(false);
        setProduct(null);
        history.push('/plants')
    });
}
},[product])

    const handleSubmit = (e) => {
        e.preventDefault();
        //const product = (plantName, plantPrice, plantType);

        setIsPending(true)
        setProduct({name, price, category})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Plant Name</label>
                <br/>
                <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Plant Price</label>
                <br/>
                <input
                type="text" 
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
                />
                <br/>
                <label>Plant Type</label>
                <br/>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="tree">Tree</option>
                    <option value="bush">Bush</option>
                    <option value="flower">Flower</option>
                </select>
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Adding Plant...</button>}
            </form>
        </div>
    );
}

export default Form;