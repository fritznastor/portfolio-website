import "../styles/about.css";
import GradientText from "../components/GradientText/GradientText";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Side: Title & Main Introduction */}
        <div className="about-left">
          <h1 className="about-title">
          <GradientText colors={["#00274D", "#00509E", "#003366", "#0077B6", "#001F3F"]}>who am i</GradientText>
          </h1>
          <div className="divider"></div> {/* Grey line */}
          <p className="about-description">
            yo, thanks for checking out my website. i'm fritz nastor – an aspiring software engineer based in chicago. 
            
          </p>
        </div>

        {/* Right Side: Detailed Information */}
        <div className="about-right">
          <p>
            i am passionate about working on meaningful projects and technology that has the ability to leave a positive
            impact on people's lives. i'm always looking for new ways to learn and grow as a developer. i'm currently 
            learning how to use AWS :0
          </p>
          <p>
            i graduated from DePaul University with a degree in computer science and a minor in data analysis. during my
            last quarter at DePaul, i placed 2nd in depaul's first ever hackathon with Northern Trust (still think i 
            should've gotten 1st smh)
          </p>
          <p>
          i am eager to gain real-world experience and develop with others to create impactful applications
          </p>
        </div>
      </div>
    </section>
  );
}
