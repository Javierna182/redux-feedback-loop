import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Feeling() {
    const [newFeeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();  

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:'ADD_FEELING',
            payload: newFeeling
        });
        setFeeling('');
        history.push('/understanding');
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={newFeeling}
              placeholder="Feeling?"
              onChange={event => setFeeling(event.target.value)}
            ></input>
            <button type="submit">NEXT</button>
            </form>
        </div>
    );
}

export default Feeling;


// function Feeling() {
//     const dispatch = useDispatch();

//     //Initial state is an OBJECT, with keys id and name
//     let [newFeeling, setFeeling] = useState({
//         id:"",
//         feeling: "",
//     })

//     const handleFeelingChange = (event) => {
//         console.log(event.target.placeholder);
//         setFeeling({...newFeeling, [event.target.placeholder]: event.target.value});
//     };

//     const addNewFeeling = (event) => {
//         event.preventDefault();
//         dispatch({ type: "ADD_FEELING", payload: newFeeling});
//         // updates the next feeling to have a new id
//         setFeeling({id: newFeeling.id + 1, feeling: ""});
//     };

//     return(
//         <div>
//             <h1>How are you feeling today?</h1>
//             <pre>{JSON.stringify(newFeeling)}</pre>
//             <form onSubmit={addNewFeeling}>
//             <input
//               type="text"
//               value={newFeeling.feeling}
//               placeholder="Feeling?"
//               onChange={handleFeelingChange}
//             ></input>
//             <button>NEXT</button>
//             </form>
//         </div>
//     );
// }