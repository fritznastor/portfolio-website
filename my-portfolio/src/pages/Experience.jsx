import "../styles/experience.css";
import GradientText from "../components/GradientText/GradientText";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      {/* Left-Aligned Title */}
      <div className="experience-title-container">
        <h1 className="experience-title">
        <GradientText colors={["#ff0000", "#ff4500", "#ff6a00", "#ff1493", "#ff0000"]}>
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
            <p><strong>position:</strong> tech consultant/website developer</p>
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
            Developed and launched a fully responsive multi-page WordPress website. 
            Collaborated with the restaurant owners to refine the site's design and 
            branding, integrating reservation and contact forms that increased customer 
            engagement by 200%. Implemented SEO strategies that boosted web traffic by 
            150% and optimized page load speeds by 40%, enhancing the overall user experience 
            across desktop and mobile devices. Additionally, integrated Square's payment 
            processing system to streamline transactions and improve the customer checkout experience.
            </p>
          </div>
        </div>

        {/* Experience Row 2 - Wrath AIO */}
        <div className="experience-row">
          <div className="experience-left">
            <h2 className="company-name">wrath aio</h2>
            <p className="company-subtitle">reselling software</p>
            <p className="experience-date">nov 2020 — sept 2021</p>
          </div>
          <div className="experience-middle">
            <p><strong>position:</strong> software engineer</p>
            <p><strong>location:</strong> remote</p>
          </div>
          <div className="experience-right">
            <p>
            Developed and executed automated test scripts using Python, improving software 
            efficiency and stability for high-traffic product releases. Designed comprehensive 
            API test cases, identifying and resolving critical defects before deployment, 
            reducing post-release issues by 45%. Created detailed user documentation that 
            decreased onboarding time and improved the overall user experience. Collaborated 
            with cross-functional teams to introduce unit testing frameworks, increasing test
            coverage by 80% and ensuring software reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
