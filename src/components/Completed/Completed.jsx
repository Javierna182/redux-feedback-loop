import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Completed() {
    return(
        <div>
            <h1>All Done, Good job!</h1>
            <Link to="/">
            <button>Start Over</button>
            </Link>
        </div>
    );
}

export default Completed;