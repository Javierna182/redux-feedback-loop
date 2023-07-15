import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';


function Understanding() {
    const [newUnderstanding, setNewUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();  

    const handleSubmit = (event) => {
        if(newUnderstanding) {
            event.preventDefault();
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: newUnderstanding
            });
            setNewUnderstanding('');
            history.push('/supported');
        }
        else {
            alert('Must fill up the form');
        }
    };


    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>    
            <Stack spacing={2} sx={{ maxWidth: '200px', margin: 'auto'}}>
            <InputLabel id="select-label">Understanding?</InputLabel>
            <Select
                labelId="select-label"
                id="select-label"
                value={newUnderstanding}
                onChange={event => setNewUnderstanding(event.target.value)}
                autoWith
                label="Understanding?"
            >
                <MenuItem value={1}>1. One</MenuItem>
                <MenuItem value={2}>2. Two</MenuItem>
                <MenuItem value={3}>3. Three</MenuItem>
                <MenuItem value={4}>4. Four</MenuItem>
                <MenuItem value={5}>5. Five</MenuItem>
            </Select>
            <FormHelperText>Please select your from 1 - 5</FormHelperText>
            <Button variant="contained" type="submit">NEXT</Button>
            </Stack> 
            </FormControl>
            </form>
        </div>
    );
}

export default Understanding;
