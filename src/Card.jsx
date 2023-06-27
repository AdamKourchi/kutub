export default function Card(props) {
  return (
    <div className="card">
      <img src={`./src/assets/${props.el.img}`}/>
      <div className="text">
        <h6>{props.el.author}</h6>
        <h2>{props.el.title}</h2>
        <p>{props.el.resume}</p>
      </div>
    </div>
  );
}
