import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Supported() {
    const [newSupported, setSupported] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:'ADD_SUPPORTED',
            payload: newSupported
        });
        setSupported('');
    }


    return(
        <div>
            <h1>How are you being Supported?</h1>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newSupported}
              placeholder="Supported?"
              onChange={event => setSupported(event.target.value)}
            ></input>
            <button type="submit">NEXT</button>
            </form>
        </div>
    );
}

export default Supported;

