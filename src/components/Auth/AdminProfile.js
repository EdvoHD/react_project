// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";


class AdminProfile extends Component{
    render(){
        return(
            <div>Profile info {this.props.userData}</div>
        )
    }
}


export default AdminProfile;
