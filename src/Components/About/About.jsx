/* filepath: /Users/pavan/Documents/FullStack/portfolio-website/src/Components/About/About.jsx */
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-content">
        <div className="about-intro">
          <h2>Frontend Developer & Digital Craftsman</h2>
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project. I specialize in creating responsive,
              user-friendly interfaces that deliver exceptional digital
              experiences.
            </p>
          </div>
        </div>

        <div className="about-skills-section">
          <h3>Technical Expertise</h3>
          <div className="about-skills">
            <div className="about-skill">
              <div className="skill-info">
                <p>HTML & CSS</p>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <div className="skill-info">
                <p>React JS</p>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <div className="skill-info">
                <p>JavaScript</p>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="about-skill">
              <div className="skill-info">
                <p>Next JS</p>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
