import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    state = {
        file: null
    }

    handleChange = (event) => {
        console.log("FileUpload.handleChange event.target.files", event.target.files)

        // sparar i state för att kunna ha access till den när den behövs
        this.setState({file: event.target.files[0]})
    }

    // använder oss av state värdet. Använder FormData() och appendar och laddar upp via axios
    handleSubmit = async (event) => {
        event.preventDefault()
        console.log("fileUpload.handleSubmit this.state.file", this.state.file)

        const res = await axios.post("http://localhost:1337/products", {
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            price: event.target.elements.price.value,
        })

        console.log("Res: ", res);

        const data = new FormData()
        data.append('files', this.state.file)
        data.append('ref', 'product')
        data.append('refId', res.data.id)
        data.append('field', 'image')

        const upload_res = await axios({
            method: "POST",
            url: 'http://localhost:1337/upload',
            data
        })

        console.log("Fileupload.handleSubmit upload_res", upload_res);
        
        
    }

    render() {
        return(
            <div className="Fileupload">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="title" /><br/>
                    <input type="text" name="description" placeholder="desc.." /><br/>
                    <input type="number" name="price" placeholder="price.." /><br/>
                    <input onChange={this.handleChange} type="file" name="file" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default FileUpload;