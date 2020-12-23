import React from 'react';
import { connect } from 'react-redux';
import { Form,Button  } from 'react-bootstrap';
import store from './Store';
import ReactDOM from "react-dom";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
var mapStateToProps = (state) => {
    console.log(state, 'staaaaat')
return {
    email : state.reducer.email,
    password :state.reducer.password,
    storeName:state.reducer.storeName,
    category:state.reducer.category,
    description:state.reducer.description,
    location:state.reducer.location,
    deliveryOrder : state.reducer.deliveryOrder,
    image :state.reducer.image
  }
}

var action = {type : 'INPUT_CANGE', text:'' }

var mapDispatchToProps = (dispatch) =>{
    return {
        
        inputChanged : (event) => {
             action = {type : 'INPUT_CANGE', text:event.target.value, name:event.target.name}
            dispatch(action);
            
         }
    }
}


function SignUpSeller(props){

    
    var clickButton =() =>{
        // console.log( props.email)
      var obj = {};
      obj.email = props.email;
      obj.email = props.email;
      obj.password =props.password;
      obj.storeName=props.storeName;
      obj.category=props.category;
      obj.description=props.description;
      obj.location=props.location;
      obj.deliveryOrder = props.deliveryOrder;
      obj.image = props.image;
      console.log(obj)
        $.ajax({
            url: "/seller/signup",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json",

            success: function (data) {
                //redirect to login page
              console.log("POST sent successfully!");
             // <Route  path ='/login' exact  component ={Login}></Route>
              
            },
            error: function (err) {
              console.log(err);
            }
      });   
    }
    
    return (
<div style ={{maxWidth :"500px", margin:'auto', padding:'0px 10px 10px 10px'}}>   
<div className="card w-100">
  {/* <div className="card-body"> */}
    <div className = "container">
   
  <Form className = "needs-validation"action ="">
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control placeholder="Enter email" name ="email"  id="email" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
   </Form.Group>


   <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control placeholder="Enter Password" name ="password"  id="password" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
   </Form.Group> 



   <Form.Group controlId="formGroupStore Name">
  <div className = 'valid-feedback'>Valid</div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
    <Form.Label>Store Name</Form.Label>
    <Form.Control placeholder="Enter Store Name" name ="storeName"  id="storeName" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
   </Form.Group>


   <Form.Group controlId="formGroupDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="Enter Description" name ="description"  id="Description" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
   </Form.Group>

   <Form.Group controlId="formGroupLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Enter Location" name ="Location"  id="Location" onChange = {props.inputChanged} style ={{padding:"2px 2px 2px 2px"}}  required />
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
   </Form.Group>


   <Form.Group controlId="exampleForm.SelectCategory"  onChange = {props.inputChanged} required>
   <Form.Label>Choose Category</Form.Label>
   <Form.Control as="select" custom name ="category" style ={{padding:"2px 2px 2px 2px"}} required>
   <option></option>
      <option value ="Foods">Foods</option>
      <option value ="clothes">clothes</option>
      <option value ="Baby Show Product">Baby Shower Products</option>
      <option value ="Accessories">Accessories</option>
    </Form.Control>
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>
    
  
  <Form.Group controlId="exampleForm.SelectDelivery"  name ="deliveryOrder" onChange = {props.inputChanged} required>
    <Form.Label>Delivery Order WithIn</Form.Label>
    <Form.Control as="select" custom name ="deliveryOrder" style ={{padding:"2px 2px 2px 2px"}} required>
        
    <option></option>
      <option value ="12 Hours">12 Hours</option>
      <option value ="24 Hours">24 Hours</option>
      <option value ="Day">Day</option>
     
    </Form.Control>
    <div className = 'valid-feedback'></div>
   <div className ="invalid-feedback">Please Fill Out This Field</div>
  </Form.Group>
  

  
   <button type="submit" className="btn btn-danger" onClick ={clickButton} style = {{margin:'0px 180px', width:100}}>Sign Up</button>

</Form>

  </div>



</div>
     </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);