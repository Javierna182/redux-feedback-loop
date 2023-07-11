import{ useSelector } from "react-redux";

function Review() {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const supported = useSelector(store => store.supported);
    const comments = useSelector(store => store.comments);

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <h2>Feelings:{feeling}</h2>
            <h2>Understanding:{understanding}</h2>
            <h2>Supported:{supported}</h2>
            <h2>Comments:{comments}</h2>
            <button type="submit">SUBMIT</button>
        </div>
    );
}

export default Review;