import { useState } from 'react';

function Form() {
    const [plantName, setPlantName] = useState("");
    const [plantPrice, setPlantPrice] = useState(1);
    const [plantType, setPlantType] = useState("tree");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = (plantName, plantPrice, plantType);

        setIsPending(true)

        fetch('http://localhost:8000/product', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        }).then(() =>{
            console.log("new product added")
            setIsPending(false);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Plant Name</label>
                <br/>
                <input
                type="text" 
                value={plantName}
                onChange={(e) => setPlantName(e.target.value)}
                />
                <br />
                <label>Plant Price</label>
                <br/>
                <input
                type="text" 
                value={plantPrice}
                onChange={(e) => setPlantPrice(e.target.value)} 
                />
                <br/>
                <label>Plant Type</label>
                <br/>
                <select onChange={(e) => setPlantType(e.target.value)}>
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