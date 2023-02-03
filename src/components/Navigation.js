import '../styles/Navigation.css';

export default function Navigation() {
    function setContact() {
        document.getElementById('about').style = 'display : none';
        document.getElementById('portfolio').style = 'display : none';
        document.getElementById('resume').style = 'display : none';
        document.getElementById('contact').style = 'display : block';
      }
      function setAbout() {
        document.getElementById('contact').style = 'display : none';
        document.getElementById('portfolio').style = 'display : none';
        document.getElementById('resume').style = 'display : none';
        document.getElementById('about').style = 'display : block';
      }
      function setPortfolio() {
        document.getElementById('about').style = 'display : none';
        document.getElementById('contact').style = 'display : none';
        document.getElementById('resume').style = 'display : none';
        document.getElementById('portfolio').style = 'display : block';
      }
      function setResume() {
        document.getElementById('about').style = 'display : none';
        document.getElementById('contact').style = 'display : none';
        document.getElementById('portfolio').style = 'display : none';
        document.getElementById('resume').style = 'display : block';
      }
    return (
        <div className="navbar">
            <li className="navItem"><a data-testid="about" href="#" onClick={setAbout}>
              About me
            </a></li>
            <li className="navItem"><a data-testid="project" href="#" onClick={setPortfolio}>
              Portfolio
            </a></li>
            <li className="navItem"><a data-testid="contact" href="#" onClick={setContact}>
              Contact
            </a></li>
            <li className="navItem"><a data-testid="resume" href="#" onClick={setResume}>
              Resume
            </a></li>
        </div>
    )
    }
