import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


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
            <FormControl sx={{ m: 1, minWidth: 80 }}>     
            <Stack spacing={2} sx={{ maxWidth: '200px', margin: 'auto'}}>    
            <TextField
              id="outlined-basic"
              label="Comments" 
              variant="outlined"
              type="text"
              value={newComment}
              placeholder="Comments"
              onChange={event => setComment(event.target.value)}
            ></TextField>
            <Button variant="contained" type="submit">NEXT</Button>
            </Stack>
            </FormControl>
            </form>
        </div>
    );

    // return(
    //     <div>
    //         <h1>Any comments you want to leave?</h1>
    //         <form onSubmit={handleSubmit}>
    //         <Stack spacing={2} sx={{ maxWidth: '200px', margin: 'auto'}}>    
    //         <input
    //           type="text"
    //           value={newComment}
    //           placeholder="Comments"
    //           onChange={event => setComment(event.target.value)}
    //         ></input>
    //         <Button variant="contained" type="submit">NEXT</Button>
    //         </Stack>
    //         </form>
    //     </div>
    // );
}

export default Comments;
