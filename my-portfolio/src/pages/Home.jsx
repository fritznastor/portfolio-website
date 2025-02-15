import "../styles/home.css";
import GradientText from "../components/GradientText/GradientText";
export default function Home() {
  return (
    <section id="home" className="home">
      {/* Top Section with Location & Email */}
      <div className="top-info">
        <div className="info-item">
          <p className="info-title">Based in</p>
          <p>Chicago, IL</p>
        </div>

        <div className="info-item">
          <p className="info-title">Say hello</p>
          <p>
            <a href="mailto:fritznastor@gmail.com">fritznastor@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Left-side Name Section */}
      <div className="content">
        <div className="text-container">
        <h1 className="hey">
        <GradientText colors={["#FFA948", "#FF5C8A", "#B05CFF", "#4D9EFF"]}>hello</GradientText> {/* Apply GradientText here */}
          </h1>
          <h1 className="im-fritz">i'm fritz :D</h1>
        </div>

        {/* Right-side Profile Picture */}
        <div className="profile-picture">
          <img src="/images/me.jpg" alt="Fritz Nastor" />
        </div>
      </div>
    </section>
  );
}


