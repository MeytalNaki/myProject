import React from "react";
import { useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { getUserByIdAndName } from '../Redux/User/UserThunk';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  
} from "react-router-dom";
// import FormPage from './SignUp' 
import  {useState} from 'react';


const [user, setuser]=useState({id:"", pass:"שדה חובה"});

const IsMember = async(dispatch) => {
  debugger
  const name = document.getElementById("name").value;
  const pass = document.getElementById("password1").value;
  const customer =  await  getUserByIdAndName(dispatch,pass, name);
  
if (customer) {
  debugger
  alert("  ברוך הבא לקוח מספר:"+id);
return customer;
 
}
else
 {
   alert("אחד או יותר מהנתונים שגוי...");
  
  return;
}
}


const SignIn = () => {
  const dispatch=useDispatch();

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your name
            </label>
            <input type="text" id="name" className="form-control" validate error="wrong" />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input type="password" className="form-control" validate id="password1" />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" onClick={()=>IsMember(dispatch)}>התחבר</MDBBtn>
            </div>
            
       
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
    };
    
    export default SignIn;












