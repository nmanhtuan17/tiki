import {Route, Routes} from "react-router-dom";
import RootLayout from "../../layout/RootLayout";
import Home from "../../screens/Home";
import Details from "../../screens/Details";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
      </Route>
      {/*<Route path='/sign-in' element={<Login />}/>*/}
    </Routes>
  );
}

export default MainNavigation;
