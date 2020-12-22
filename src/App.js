import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/aboutus'
import home from './component/home.js'
// import addItem from './component/addItem.js'
import SignUpSeller from './component/signUpSeller.js'
// import home from './component/home.js'
import addItem from './component/addItem.js'
// import categoryBuyer from './component/categoryBuyer.js'
// import categorySeller from './component/categorySeller.js'
// import Filter from './component/Filter.js'
import Footer from './component/Footer.js'
// import itemList from './component/itemList.js'
import listOfOrder from './component/listOfOrder.js'
import Login from './component/Login.js'
import Navbar from './component/layout/Navbar.js'
// import Notification from './component/Notification.js'
// import signUpBuyer from './component/signUpBuyer.js'
// import signUpSeller from './component/signUpSeller.js'
// import order from './component/order.js'
import SignUpBuyer from './component/signUpBuyer.js'
// import Store from './component/Store.js'
// import update from './component/update.js'
// import view from './component/view.js'
// import Visit from './component/Visit.js'
import './Style/app.css';
// import combineReducers from './reducsers/index'
import "bootstrap/dist/css/bootstrap.min.css";
import store from './component/Store.js'
import CatBuyer from './component/categoryBuyer.js'
import Order from './component/order.js'
function App() {
  console.log(store.getState())
  return (
   <div className="page-container">
     <div className="content-wrap">
    <Router>
   <Navbar/>
     <Switch>
       <Route  path ='/about' exact  component ={About}></Route>
       <Route  path ='/addItem' exact  component ={addItem}></Route>
       <Route  path ='/login' exact  component ={Login}></Route>
       <Route  path ='/order' exact  component ={Order}></Route>
       <Route  path ='/home' exact   component={home}></Route>
       <Route  path ='/seller/signup' exact   component={() => <SignUpSeller store={store} />}></Route>
       <Route  path ='/buyer/signup' exact   component={() => <SignUpBuyer store={store} />}></Route>
       <Route  path ='/buyer/category' exact   component={() => <CatBuyer store={store} />}></Route>
       <Route  path ='/orderList' exact   component={listOfOrder}></Route>

     </Switch>
   <Footer/>
    </Router>
    </div>
 </div>
  );
}
export default App;