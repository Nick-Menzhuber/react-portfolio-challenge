import "../styles/Project.css";

export default function Project() {
  const projects =  [
    {
      name: 'axegrinder',
      subtitle: 'An app for your terrible music opinions',
      url: 'https://dry-harbor-47719.herokuapp.com/',
      image: '../images/axegrinder.jpeg'
    }
  ]
  return (
    <div id="portfolio">
    <div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="card">
  <img className="card-img-top" src="..." alt="Project pic"></img>
  <div className="card-body">
    <h5 className="card-title">{projects.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
    <div className="col-sm">
      Project 2
    </div>
  </div>
</div>
    </div>
  );
}
