
import React, {Component} from "react";
import Card from "./Card";
import axios from "axios";
import "../styles/App.scss";


//get 
//post
//put
//delete
class App extends Component{


      state = {
            products: []
      }


componentDidUpdate(){
      console.log("component did update")
}

//component renderades/mounted
async componentDidMount (){
// async await 
    const res =  await  axios.get("http://localhost:1337/products")
    
            console.log(res.data);
            this.setState ( {products:res.data})
     /*  axios.get("http://localhost:1337/products").then( res=>{
            console.log(res.data);
            this.setState ( {products:res.data})
      }) promise  */
//this.state.products
}

render() {
    return(
          <div className={"wrapper"}>

                {this.state.products.map((product) =>
                     
                      <Card 
                      key={product.id}
                      title={product.title} 
                      price={product.price}
                      description= {product.description}
                      image= {product.image}
                     
                       />
                )}
               
          </div>

    )
      }
}
export default App;