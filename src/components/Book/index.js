import React from "react";

function Book(props) {
    return (
        <div className="col s12 m8 l6">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} alt="book" />
                    <span className="card-title">{props.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.desc}</p>
                </div>
                <div className="card-action">
                    <a href={props.link}>GO</a>
                </div>
            </div>
        </div>
    )
}

export default Book;