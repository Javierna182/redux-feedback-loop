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


function Feeling() {
    const [newFeeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();  

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newFeeling){
            dispatch({
                type:'ADD_FEELING',
                payload: newFeeling
            });
            setFeeling('');
            history.push('/understanding');
        }
        else {
            alert('Must fill out the form to continue');
        }
    }

    return(
        <div>
        <h1>I am feeling happy and confident</h1>
        <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <Stack spacing={2} sx={{ maxWidth: '200px', margin: 'auto'}}>    
        <InputLabel id="select-label">Feeling?</InputLabel>
        <Select
            labelId="select-label"
            id="select-label"
            value={newFeeling}
            onChange={event => setFeeling(event.target.value)}
            autoWith
            label="Feeling?"
        >
          <MenuItem value={1}>1. Strongly Disagree</MenuItem>
          <MenuItem value={2}>2. Disagree</MenuItem>
          <MenuItem value={3}>3. Neither Agree nor Disagree</MenuItem>
          <MenuItem value={4}>4. Agree</MenuItem>
          <MenuItem value={5}>5. Strongly Agree</MenuItem>
        </Select>
        <FormHelperText>Please select from 1 - 5</FormHelperText>
        <Button variant="contained" type="submit">NEXT</Button>
        </Stack>  
        </FormControl>
        </form>
        </div>
    );
}

export default Feeling;
