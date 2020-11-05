import React, { useState } from "react";

// Components
import Card from "../molecules/Card";

import Header from "../organisms/Header";

export default function Search({ match, information }) {
  const query = new RegExp(match.params.query, "i");
  const results = information.filter((item) => item.title.match(query));


  //Hooks
  const [cards, setCards] = useState(sortCards("title", results))

  function sortCards(key, data) {
    const sortedResults = data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    const renderedCards = sortedResults.map((item) => (<Card key={item.id} data={item} />));
    return renderedCards;
  }

  return (
    <div className="result-page">
      <Header />
      <section className="container">

        <h2>Filter results by</h2>
        <button onClick={() => setCards(sortCards("title", results))}>
          Name
         </button>

        <button onClick={() => setCards(sortCards("channelName", results))}>
          Channel
         </button>
        <hr />
        <div className="grid"> {cards} </div>

      </section>

    </div>
  )


}


