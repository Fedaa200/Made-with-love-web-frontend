import React from "react";

import { Button,Card, Container, CardGroup, Row , Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

  
  


const ListItems = (props) => {

    var deleteItems=(pk) =>{
        axios.delete('http://127.0.0.1:8000/seller/profile/deleteitems/'+pk)
          .then(response => { console.log(response.data)});
    
        // this.setState({
        //   items: props.items.filter(item => item.pk !== pk)
        // })
        console.log(pk)
        window.location = 'http://127.0.0.1:8000/seller/profile/'+props.id

      };

  console.log((props))
  return(
    <div>
   {/* <h1>{item['pk']}</h1> */}
  
   <Row>
        {
           
         props.items.map((item )=>{
           return (
              <Col>
       
           <Card style={{ width: "400px", marginTop: "50px", marginLeft:'50px' }}>
                   <Card.Img
                     variant="top"
                     src={item['fields']['image']}
                     width = '200px' height = '200px'
                   />
                   <Card.Body>
                     <Card.Title style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Name :</label> {item['fields']['productname']}</Card.Title>
                     <Card.Text> <label style={{color:'red', fontWeight:'bold'}}>Product Name :</label>Product Description : {item['fields']['description']}</Card.Text>
                     <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Product Name :</label>Product Price : {item['fields']['price']}</Card.Text>
                     <Link
                       to={{
                         pathname: "/seller/profile/1",
                         
                       }}
                     >
                     <Button
                       variant="primary"
                       style={{ backgroundColor: "red" }}
                     onClick={() => {deleteItems(item['pk'] )}}
                     >
                       Delete
                     </Button>
                     </Link>
                     <Link
                       to={{
                         pathname: "/seller/editProfile/"+item['pk'] ,
                        //  info: { id: item['pk'] },
                       }}
                     >
                       <Button
                         variant="primary"
                         style={{ backgroundColor: "green", marginLeft: "100px" }}
                       >
                         Edite
                       </Button>
                     </Link>
                   </Card.Body>
                 </Card>
                 </Col> 

         )})
         
        }
        </Row>
        
     
 </div> 
 )  
}

export default ListItems

