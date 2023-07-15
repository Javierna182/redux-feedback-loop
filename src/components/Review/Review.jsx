import{ useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';


function Review() {
    const store = useSelector(store => store);
    const dispatch = useDispatch();
    const history = useHistory(); 

    const addNewFeedback = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD_FEEDBACK", payload: store });
        history.push('/completed');
    }

    return(
        <div>
            <form>
            <h1>Review Your Feedback</h1>
            <h2>Feelings:{store.feeling}</h2>
            <h2>Understanding:{store.understanding}</h2>
            <h2>Supported:{store.supported}</h2>
            <h2>Comments:{store.comments}</h2>
            <Button variant="contained" onClick={addNewFeedback}>SUBMIT</Button>
            </form>
        </div>
    );
}

export default Review;