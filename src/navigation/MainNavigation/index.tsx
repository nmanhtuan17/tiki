import {Route, Routes} from "react-router-dom";
import RootLayout from "../../layout/RootLayout";
import Home from "../../screens/Home";


function MainNavigation() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/home' element={<Home />}/>
      </Route>
      {/*<Route path='/sign-in' element={<Login />}/>*/}
    </Routes>
  );
}

export default MainNavigation;
