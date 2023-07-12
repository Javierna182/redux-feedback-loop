import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Supported() {
    const [newSupported, setSupported] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();  

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:'ADD_SUPPORTED',
            payload: newSupported
        });
        setSupported('');
        history.push('/comments');
    }


    return(
        <div>
            <h1>How are you being Supported?</h1>
            <form onSubmit={handleSubmit}>
            <input
              type="number"
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

