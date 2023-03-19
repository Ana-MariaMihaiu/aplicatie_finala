import { Link } from "react-router-dom";
import "./Navigation.style.css";


function Navigation () {
    return (
        <div className="navbar_product">
            <Link to="/home" >Home</Link>
            <Link to="/products" >All products</Link>
            <Link to="/wishlist" >Favorite Products</Link>


        </div>
    );
}
export default Navigation;