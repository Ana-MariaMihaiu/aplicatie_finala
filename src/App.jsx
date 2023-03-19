import {Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
  <div>
    <Navigation />
<Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/Products' element={<Products />} />
  {/* <Route path="/product/:idProduct" */}
  {/* https://jsonplaceholder.typicode.com/posts/1/comments /}
                {/ https://jsonplaceholder.typicode.com/guide/ */}


  <Route path='/wishlist' element={<Wishlist />} />
  <Route path='/*' element={<h1>NOT FOUND!</h1>} />

</Routes>
{/*Footer */}
  </div>
  );
  
}

export default App;
