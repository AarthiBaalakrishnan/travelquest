import { Link } from "react-router-dom";
import "../styles/Navigation.css";
function Navigation() {
    return(
        
            <nav className="navigation">                
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/bucketlist">Bucket List</Link>
                <Link to="/about">About</Link>   
        </nav> 
        
    );
}
export default Navigation;