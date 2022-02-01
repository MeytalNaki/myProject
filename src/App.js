import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import AddUser from './Comp/Users/addUser';
import SignIn from './Comp/SignIn';
import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';
function App() {
  return (

      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/SignUp" exact element={<SignIn />} ></Route>


      </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
