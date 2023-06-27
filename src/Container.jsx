import Card from "./Card.jsx";
import data from "./data.js";

export default function Container() {
  const cards = data.map(el => <Card key={el.id} el={el} />);
  return (<div className="container">
    {cards}
  </div>)
}
