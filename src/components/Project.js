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
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card">
  <img class="card-img-top" src="..." alt="Project pic"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
      Project 2
    </div>
  </div>
</div>
    </div>
  );
}
