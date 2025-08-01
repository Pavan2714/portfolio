/* filepath: /Users/pavan/Documents/FullStack/portfolio-website/src/Components/Hero/Hero.jsx */
import "./Hero.css";
import profile_img from "../../assets/profile1_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={profile_img} alt="Alex Bennett" className="profile-img" />
        </div>

        <div className="hero-text">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="name-highlight">Pavan Shingadia</span>
            <span className="role-text">FullStack Developer</span>
          </h1>
          <p className="hero-description">
            Passionate frontend developer from California with 10+ years of
            experience crafting exceptional digital experiences for industry
            leaders like Microsoft, Tesla, and Apple.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">Fresher</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Major Companies</span>
            </div>
          </div>

          <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <span>Let's Connect</span>
                <div className="button-arrow">→</div>
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <a
                href="/pavan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="anchor-link"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span>My Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
