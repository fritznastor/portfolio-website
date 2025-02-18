import "../styles/about.css";
import GradientText from "../components/GradientText/GradientText";
import AboutCard from "../components/AboutCard"; // Import the updated Card component

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

          {/* GIF below the text */}
          <img src="/images/chipi-chipi-chapa-chapa.gif" alt="GIF showing my personality" className="about-gif" />
        </div>

        {/* Right Side: Detailed Information */}
        <div className="about-right">
          <p>
            i am passionate about working on meaningful projects and technologies that have the ability to leave a positive
            impact on people's lives. i'm always looking for new ways to learn and grow as a developer. i'm currently 
            learning how to use AWS :0
          </p>
          <p>
            i graduated from DePaul University with a degree in computer science and a minor in data science. during my
            last quarter at DePaul, i placed 2nd in depaul's first ever hackathon with Northern Trust 
          </p>
          <p>
            i am excited to learn and develop with others to create impactful applications 
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="about-cards">
        <AboutCard 
          title="my hobbies" 
          description="I love working out, climbing, photography, hanging out with friends, and eating!" 
          images={["/images/interests_pics/quads_top.jpg", 
            "/images/interests_pics/climbing.jpg",
            "/images/interests_pics/winter_daniella.jpg",
            "/images/interests_pics/cubs_gaem.jpg",
            "/images/interests_pics/kbbq.jpg",
            
            
          ]}
        />
      </div>
    </section>
  );
}
