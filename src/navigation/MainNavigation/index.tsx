import {Route, Routes} from "react-router-dom";
import RootLayout from "../../layout/RootLayout";
import Home from "../../screens/Home";
import Details from "../../screens/Details";
import Cart from "../../screens/Cart";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/cart' element={<Cart />}/>
      </Route>
    </Routes>
  );
}

export default MainNavigation;
