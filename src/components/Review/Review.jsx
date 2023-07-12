import{ useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
            <h1>Review Your Feedback</h1>
            <h2>Feelings:{store.feeling}</h2>
            <h2>Understanding:{store.understanding}</h2>
            <h2>Supported:{store.supported}</h2>
            <h2>Comments:{store.comments}</h2>
            <button onClick={addNewFeedback}>SUBMIT</button>
            {/* <Link to="/completed">
            <button type="submit">SUBMIT</button>
            </Link> */}
        </div>
    );
}

export default Review;