import "../styles/Resume.css";

export default function Resume() {
  return (
    <div id="resume" className="v">
      <a href="https://docs.google.com/document/d/1h91S1_LjQnG1MbhvH-d0zAPVtpdN0R6fRb4HLClyC_U/edit">
        <i className="fa-solid fa-file"></i>
        <br></br>Professional Resume
      </a>
      <br></br>
      <br></br>
      <i className="fa-thin fa-starfighter"></i>
      <br></br>
      <ul>My developer skills include:
        <li>React</li>
        <li>MongoDB and Mongoose</li>
        <li>SQL and NoSQL</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>Web APIs and RESTful APIs</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
      </ul>
      <p>I am also currently learning Python independently!</p>
    </div>
  );
}
