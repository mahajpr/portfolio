import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import Education from "../components/education/Education";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <Portfolio />
      <div className="bg-soft-white">
        <Profession />
      </div>
       <div className="bg-soft-white">
        <Education/>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
