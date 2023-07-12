import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Comments() {

    const [newComment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();  

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:'ADD_COMMENTS',
            payload: newComment
        });
        setComment('');
        history.push('/review');
    }

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newComment}
              placeholder="Comments"
              onChange={event => setComment(event.target.value)}
            ></input>
            <button type="submit">NEXT</button>
            </form>
        </div>
    );
}

export default Comments;
