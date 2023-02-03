import "../styles/About.css";
import avatar from "../images/avatar.jpeg"

export default function About() {
  return (
    <div id="about">
      <img className="avatar" src={avatar} alt="avatar"></img>
      <p className="aboutMe">
        I have 18 years of experience in financial operations and am currently
        studying coding in a full stack web development boot camp through the
        University of Minnesota. I hope to combine my new programming skills
        with the wealth of experience I have accumulated by working in
        operational settings to improve the efficiency of various workflows.
        Having spent years in the trenches, I am familiar with the usual
        pitfalls and communication breakdowns between technology and
        business units. It is my intention to "be a bridge" between teams by
        speaking both languages.
        <br></br>
        <br></br>
        <i class="fa-thin fa-starfighter"></i>
        <br></br>
        <br></br>I graduated with my Bachelor of Arts degree from the University
        of Minnesota, Morris in 2003, where I studied English and theatre. I
        served on the Board of Directors for The Chameleon Theatre Circle for 10
        years. In my spare time I am an actor, an avid reader and cyclist, and a
        music collector. I live in Minneapolis with my family.
      </p>
    </div>
  );
}
