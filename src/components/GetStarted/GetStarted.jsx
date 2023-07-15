import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';

function GetStarted() {
    return(
        <div>
            <h1>Start Here!</h1>
            <Link to="/feeling">
            <Button variant="contained">Get Started</Button>
            </Link>
        </div>
    );
}

export default GetStarted;