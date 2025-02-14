import "../styles/experience.css";
import GradientText from "../components/GradientText/GradientText";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      {/* Left-Aligned Title */}
      <div className="experience-title-container">
        <h1 className="experience-title">
        <GradientText colors={["#3D1E6D", "#5A2E9E", "#7A44C3", "#9A5FE5", "#B47FFF"]}>
          experience
        </GradientText>


        </h1>
      </div>

      {/* Divider Line */}
      <div className="divider"></div>

      {/* Experience Entries */}
      <div className="experience-container">
        {/* Experience Row 1 - Samila Thai Fusion */}
        <div className="experience-row">
          <div className="experience-left">
            <h2 className="company-name">samila thai fusion</h2>
            <p className="company-subtitle">new restaurant</p>
            <p className="experience-date">june 2024 — present</p>
          </div>
          <div className="experience-middle">
            <p><strong>position:</strong> website developer</p>
            <p><strong>location:</strong> chicago, IL</p>
            <p><strong>website:</strong> &nbsp;
    <a href="https://samilathaifusion.com" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="animated-link">
       samilathaifusion.com
    </a>
</p>

          </div>
          <div className="experience-right">
            <p>
              developed and launched a fully responsive multi-page WordPress website in under two weeks, 
              integrating reservation and contact forms that increased customer engagement by 200%. 
              Collaborated with the restaurant owners to refine the site's design and branding, 
              implemented SEO strategies that boosted web traffic by 150%, and optimized page load 
              speeds by 40%, enhancing the overall user experience across desktop and mobile devices.
            </p>
          </div>
        </div>

        {/* Experience Row 2 - Wrath AIO */}
        <div className="experience-row">
          <div className="experience-left">
            <h2 className="company-name">wrath aio</h2>
            <p className="company-subtitle">reselling software</p>
            <p className="experience-date">2021 — 2023</p>
          </div>
          <div className="experience-middle">
            <p><strong>position:</strong> software developer</p>
            <p><strong>location:</strong> remote</p>
          </div>
          <div className="experience-right">
            <p>
              developed and executed automated test scripts using Python and Selenium, 
              improving software efficiency and stability for high-traffic product releases. designed 
              comprehensive API test cases, identifying and resolving critical defects before 
              deployment, reducing post-release issues by 45%. Created detailed user documentation that 
              reduced onboarding time by 50%, improving overall team productivity. Collaborated with 
              cross-functional teams to introduce unit testing frameworks, increasing test coverage by 
              80% and ensuring software reliability. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
