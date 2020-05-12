import React from "react";
import "../styles/Card.scss";


const Card = (props) => {
    

    return (

        <div className={"card-component"}>
            <img src={"http://localhost:1337" +  props.image.url} className={"card-container"} alt={"error"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {props.title}</h5>
                <p className={"card-text"}>{props.description} </p>
                <span className={"price-tag"}>{props.price}</span>
                <button className={"button-primary"}>Boka</button>
            </div>
        </div>

    )
}

export default Card;

