import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDochub } from "@fortawesome/free-brands-svg-icons";
import "../styles/WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div id="welcomePageContainer">
      <FontAwesomeIcon id="docfind_logo" icon={faDochub} />

      <div id="welcomeContainer">
        <h1 id="welcomeText">Welcome To </h1>
        <h1 id="docfindText">DocFind</h1>
      </div>

      <p id="docfindTitle">Find the information you need across all your</p>
      <p>PDF documents, instantly.</p>
      <button
        id="startButton"
        onClick={() => {
          navigate("/Home");
        }}
      >
        Let's Start
      </button>
    </div>
  );
}
export default WelcomePage;
