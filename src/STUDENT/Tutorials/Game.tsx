import React, { useEffect, useState } from "react";
import './Style/Game.css';
import back_n from './Image/back_n.gif';
import done_o from './Image/done_o.gif';
import done_d from './Image/done_d.gif';
import done_n from './Image/done_n.gif';

const Game: React.FC = () => {
  const [bestScore, setBestScore] = useState<string | null>(null);
  const [bestTime, setBestTime] = useState<string | null>(null);
  const [doneSrc, setDoneSrc] = useState(`${done_n}`);

  const handleDoneMouseDown = () => { setDoneSrc(`${done_d}`); };
  const handleDoneMouseUp = () => { setDoneSrc(`${done_o}`); };
  const handleDoneMouseOut = () => { setDoneSrc(`${done_n}`); };
  const handleDoneMouseOver = () => { setDoneSrc(`${done_o}`); };

  useEffect(() => {
    sessionStorage.clear();

    const scoreElement = document.getElementById("pbestscore") as HTMLInputElement | null;
    const timeElement = document.getElementById("pbesttime") as HTMLInputElement | null;
    const score = scoreElement?.value || "";
    const time = timeElement?.value || "";

    sessionStorage.setItem("score", score);
    sessionStorage.setItem("time", time);

    setBestScore(sessionStorage.getItem("finalScore"));
    setBestTime(sessionStorage.getItem("finalTime"));
  }, []);

  useEffect(() => {
    const checkSessionValues = setInterval(() => {
      const newScore = sessionStorage.getItem("finalScore");
      const newTime = sessionStorage.getItem("finalTime");

      if (newScore !== bestScore || newTime !== bestTime) {
        setBestScore(newScore);
        setBestTime(newTime);
        // console.log("Updated Score:", newScore);
        // console.log("Updated Time:", newTime);

        if (newScore && newTime) {
          fetch("/Game/SaveSessionValues", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bestScore: newScore, bestTime: newTime }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              // console.log("Data sent to server:", data);
            })
            .catch((error) => console.error("Error:", error));
        }
      }
    }, 1000);

    return () => clearInterval(checkSessionValues);
  }, [bestScore, bestTime]);

  return (
    <form id="form1" >
    <div className="tblMain">
       <div className="trNavBar">
          <div className="tdNavBarT"
          // style={{display: "flex", justifyContent: "space-between"}}
          >
            <a id="imgBtnBack" className="imgBtnBackT"
            // style={{ cursor: "pointer" }}
            ><img src={`${back_n}`} alt="Back" width="80" height="30" /></a>
            <a id="imgbtnGameCompleted" className="imgbtnGameCompletedT"
            // style={{ cursor: "pointer" }}
            >
              <img src={doneSrc} alt="Back" width="80px" height="30px"
               onMouseOut={handleDoneMouseOut} onMouseDown={handleDoneMouseDown} onMouseUp={handleDoneMouseUp} onMouseOver={handleDoneMouseOver}/>
            </a>
          </div>
       </div>
       <div className="trtitle">
          <div>
             <label id="lblTitle"></label>
          </div>
       </div>
       <div id="container">
          <div id="divGameHolder" className="divGameHolderT"
          // style={{ height: "auto", width: "100%" }}
          >
          </div>
       </div>
    </div>
    <script src="Script/Game.min.js" type="text/javascript"></script>
 </form>
)};

export default Game;
