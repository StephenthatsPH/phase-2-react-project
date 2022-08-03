import { useState } from 'react';

function Form() {
    const [plantName, setPlantName] = useState("");
    const [plantPrice, setPlantPrice] = useState();

    function handlePlantNameChange(event) {
        setPlantName(event.target.value);
    }

    function handlePlantPriceChange(event) {
        setPlantPrice(event.target.value);
    }
    return (
        <div>
            <form>
                <input type="text" onChange={handlePlantNameChange} value={plantName} placeholder="Plant Name"/>
                <br />
                <input type="text" onChange={handlePlantPriceChange} value={plantPrice} placeholder="Plant Price"/>
                <br/>
                <select>
                    <option value="tree">Tree</option>
                    <option value="bush">Bush</option>
                    <option value="flower">Flower</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;