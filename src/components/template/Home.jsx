// Reacr core
import React from "react";

// Components
import Card from "../molecules/Card";
import Header from "../organisms/Header";

export default function Home({ information }) {


    const Cards = information.map((item) => {
        return < Card key={item.id} data={item} />
    });

    return (

        <div className="home-page">

            <Header />

            <section className="recommended">
                <h1 className="title"> Recommended </h1>
                <div className="grid">{Cards}</div>
            </section>

        </div>

    )
}
