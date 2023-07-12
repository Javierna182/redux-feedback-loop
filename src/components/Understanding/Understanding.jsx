import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Understanding() {
    const [newUnderstanding, setNewUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();  

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: newUnderstanding
        });
        setNewUnderstanding('');
        history.push('/supported');
    };


    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={newUnderstanding}
              placeholder="Understanding?"
              onChange={event => setNewUnderstanding(event.target.value)}
            ></input>
            <button type="submit">NEXT</button>
            </form>
        </div>
    );
}

export default Understanding;
