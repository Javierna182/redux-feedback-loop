import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';


function Completed() {
    return(
        <div>
            <h1>All done, Thank you!</h1>
            <Link to="/">
            <Button variant="contained">Start Over</Button>
            </Link>
        </div>
    );
}

export default Completed;