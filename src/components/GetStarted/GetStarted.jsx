import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Feeling from "../Feeling/Feeling";
import Button from '@mui/material/Button';

function GetStarted() {
    return(
        <div>
            <h1>Star Here!</h1>
            <Link to="/feeling">
            <Button variant="contained">Get Started</Button>
            </Link>
        </div>
    );
}

export default GetStarted;