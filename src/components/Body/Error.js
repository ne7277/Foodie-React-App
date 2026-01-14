import { useState } from "react";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({
    top: "50%",
    left: "50%",
  });
 
  const navigate = useNavigate();


const err = useRouteError();
console.log(err);

  
  const moveBox = () => {
    const top = Math.random() * 80 + "%";
    const left = Math.random() * 80 + "%";

    setPosition({ top, left });
    setScore(score + 1);
  };

  return (
    <div className="error-container">
      <button className="close-btn-aboutus" onClick={() => navigate("/")}> X </button>
      <h1>{err.status}</h1>
      <h2>Oops! Page Not Found 😵</h2>
      <h2>Detail of {err.data}</h2>
      <p>Looks like you're lost. Play a game while you're here!</p>

      <div className="game-area">
        <div
          className="box"
          style={{ top: position.top, left: position.left }}
          onClick={moveBox}
        ></div>
      </div>

      <h3>Score: {score}</h3>

      <a href="/" className="home-btn">
        Go Back Home
      </a>
    </div>
  );
};

export default Error404;
