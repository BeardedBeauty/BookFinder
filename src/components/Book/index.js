import React from "react";
import "./style.css";

function Book(props) {
    return (
        <div className="col s12 m12 l6">
            <h5 className="titlebook">{props.title}</h5>
            <div className="card horizontal">
                <div className="card-image">
                    <img src={props.image} alt="book" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.desc}</p>
                    </div>
                    <div className="card-action">
                        <a href={props.link}>google books</a>
                        <a href="#">save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;