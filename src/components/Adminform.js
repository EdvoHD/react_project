import React, { Component } from "react";
import axios from "axios";
import FileUpload from "./FileUpload";

class Adminform extends Component{

    state={
        image:" "
    }

    handleChange(e){
        console.log("onChange file", e.target.files);
        
        this.setState({image:e.target.files[0]})
    }

    handleSubmit =async(e) =>{
        e.preventDefault();
        console.log("HandleSubmit this.state.file", this.state.file)
        
        const res = await axios.post("http://localhost:1337/products", {

            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value,
            
        })

        console.log(res)

        const data = new FormData();
        data.append('file', this.state.image) 
        data.append('ref', 'produkt') 
        data.append('refId', res.data.id)  
        data.append('field', 'image')

        const resPic = await axios.post("http://localhost:1337/upload", data)
        console.log(resPic)
        

    }

    render(){
        return(
            <div>
            <FileUpload />
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <input type="text" name="title"/><br/>
                    <input type="text" name="description"/><br/>
                    <input type="file" onChange={this.handleChange.bind(this)} name="file"/><br/>
                    <input type="number" name="price"/><br/>
                    <button>Spara</button>
                    
                </form>
            </div>
        )
    }

}

export default Adminform