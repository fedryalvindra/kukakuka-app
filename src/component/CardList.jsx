import React from "react";
import Card from "./Card";
import { articles } from "./Model/article";

const CardList = () => {

    return (
        articles.map(card => {
            return (
                <Card judul={card.judul} deskripsi={card.deskripsi} />
            )  
        })
    );
}

export default CardList;
