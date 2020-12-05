import './styles/Jumbotron.css';



export default function Jumbotron  (props) {
    return(
      <div className={"jumbotron  card-style " + props.jumboType}>
  <h1 className="display-4">{props.title}</h1>
  <p className="lead"> {props.lead}</p>
  
    <p>{props.description}</p>
  <p className="lead">
      <a className="btn btn-light btn-lg" href="#/" role="button">{props.buttonText}</a> 
  </p>
</div>
    );
}


