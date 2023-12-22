import React from "react";
import "./Card.css"

const Card = ({judul, deskripsi}) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{judul}</h5>
                <p class="card-text">{deskripsi}</p>
            </div>
            <a href="#home" class="card-btn btn btn-primary">Read</a>
        </div>
    )
}

export default Card;