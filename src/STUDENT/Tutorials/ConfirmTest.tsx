import React , { useState, useEffect } from "react";
import continue_n from "../Images/continue_n.gif";
import continue_o from "../Images/continue_o.gif";
import continue_d from "../Images/continue_d.gif";
import back_n from "../Tutorials/Image/back_n.gif";
import back_o from "../Tutorials/Image/back_o.gif";
import back_d from "../Tutorials/Image/back_d.gif";
import testintro_bg from "../Images/testintro_bg.png";

const ConfirmTest: React.FC = () => {

useEffect(() => {
  document.body.style.margin = '0px;';
  document.body.style.backgroundColor = "#fff";
}, []);

  const [continueSrc, setContinueSrc] = useState(`${continue_n}`);

  const [backSrc, setBackSrc] = useState(`${back_n}`);

  const handleContinueMouseOver = () => setContinueSrc(`${continue_o}`);
  const handleContinueMouseOut = () => setContinueSrc(`${continue_n}`);
  const handleContinueMouseDown = () => setContinueSrc(`${continue_d}`);

  const handleBackMouseOver = () => setBackSrc(`${back_o}`);
  const handleBackMouseOut = () => setBackSrc(`${back_n}`);
  const handleBackMouseDown = () => setBackSrc(`${back_d}`);

  return (
    <form id="form1" className="form1T"
    // style={{ margin: "0px" }}
    >
      <div id="divButtons" className="divButtonsT"
      // style={{ width: "100%", backgroundColor: "#66CCFE" }} 
      >
        <table border={0} cellPadding="5" cellSpacing="0" className="tblButtonsT"
        // style={{ width: "100%", height: "50px", verticalAlign: "middle" }} 
        >
          <tbody>
            <tr>
              <td align="left" className="tdButtonsT"
              // style={{ paddingLeft: "10px" }}
              >
                <a href="/ConfirmTest" id="imgbtnBack" className="imgbtnBackT"
                // style={{ cursor: "pointer" }}
                >
                  <img 
                    src={backSrc} 
                    alt="Back" 
                    height="30px"
                    onMouseOver={handleBackMouseOver} 
                    onMouseOut={handleBackMouseOut} 
                    onMouseDown={handleBackMouseDown}
                  />
                </a>
              </td>
              <td align="right" className="tdButtons2T"
              // style={{ paddingRight: "10px" }}
              > 
                <a href="/ConfirmTest" id="imgbtnContinue" className="imgbtnContinueT"
                // style={{ cursor: "pointer" }}
                >
                  <img 
                    src={continueSrc} 
                    alt="Continue"
                    height="30px"
                    onMouseOver={handleContinueMouseOver} 
                    onMouseOut={handleContinueMouseOut} 
                    onMouseDown={handleContinueMouseDown} 
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="divImage" className="divImageT"
      // style={{ display:'flex', justifyContent: "center" }}
      >
        <div className="divImage2T"
        // style={{ backgroundColor: "#E5E5E5" }}
        ></div>
        <div id="divGap"></div>
        <div 
        
        
        
        style={{ width: "800px", height: "600px", backgroundImage: `url(${testintro_bg})`, marginTop: "5%", alignContent:'center' }} 
        
        
        
        >
          <div className="divImage3T"
          // style={{ height: "205px" }}
          ></div>
          <div className="divImage4T"
          // style={{ height: "510px" }}
          >
            <table cellPadding="0" cellSpacing="0" border={0} className="tblTestNameT"
            // style={{ padding: "5px", fontFamily: "Arial", width: "100%", }} 
            >
              <tbody>
                <tr>
                  <td className="tdTestNameT"
                  // style={{ width: "15%" }}
                  ></td>
                  <td className="tdTestName2T"
                  // style={{ fontSize: "22pt", paddingBottom: "8px", color: "#535353", textAlign: "center", }} 
                  >
                    <b>Test</b>
                  </td>
                  <td className="tdTestNameT"
                  // style={{ width: "15%" }}
                  ></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td className="tdTestName2T"
                  // style={{ fontSize: "22pt", paddingBottom: "8px", color: "#535353", textAlign: "center", }} 
                  >
                    Duration:&nbsp;<b><label id="lblDuration"></label></b>&nbsp;Minutes
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="trTestNameT"
                // style={{display:'none'}}
                >
                    <td className="tdTestName3T"
                    // style={{fontSize:'14pt', verticalAlign:'top', fontFamily:'Calibri'}} 
                    align="center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ConfirmTest;
