import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Feeling from "../Feeling/Feeling";

function GetStarted() {
    return(
        <div>
            <h1>Star Here!</h1>
            <Link to="/feeling">
            <button>Get Started</button>
            </Link>
        </div>
    );
}

export default GetStarted;