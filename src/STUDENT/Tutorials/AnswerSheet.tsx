import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import './Style/AnswerSheet.css';
import nav_previous_n from '../Tutorials/Image/nav_previous_n.png';
// import nav_next_n from '../Tutorials/Image/nav_next_n.png';
import next_test from '../Tutorials/Image/next_test.png';
import Close from '../Tutorials/Image/Close.png';

const AnswerSheet: React.FC = () => {
  // const navigate = useNavigate();
  const [
    // answers
    , setAnswers] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch("/"); 
        const data = await response.json();
        setAnswers(data);
      } catch (error) {
        console.error("Error fetching answers", error);
      }
    };
    fetchAnswers();
  }, []);

  return (
    // <form >
    //   <div>
    //     <div>
    //       <h2 className="text-center">Answer Sheet</h2>
    //       <table >
    //         <thead>
    //           <tr>
    //             <th>#</th>
    //             <th>Question</th>
    //             <th>Answer</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {answers.map((item, index) => (
    //             <tr key={index}>
    //               <td>{index + 1}</td>
    //               <td>{item.question}</td>
    //               <td>{item.answer}</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //       <div className="d-flex justify-content-center mt-4">
    //         <a onClick={() => navigate("/home")}>Back to Home</a>
    //       </div>
    //     </div>
    //   </div>
    // </form>

    <form id="form1">
      <div id="divBackground" className="divBackgroundT"
      // style={{ display: "none", backgroundColor: "rgba(0, 0, 0, 0.29)", width: "100%", height: "100%", position: "absolute", top: '0px', }} 
      ></div>
      <table width="100%" border={0} cellSpacing="0" cellPadding="0">
        <tbody>
          <tr id="trAnsHead" className="trAnsHeadT"
          // style={{ padding: 0, margin: 0, backgroundColor: "#20699B" }}
          >
            <td id="tdNavigationHolder" className="tdNavigationHolderT"
            // style={{ height: 70, width: "100%" }}
            >
              <table className="CssTable" border={0} cellPadding="2" cellSpacing="0">
                <tbody>
                  <tr id="trTop1">
                    <td align="left" className="tdTop1T"
                    // style={{ width: "8%", height: '36px', paddingLeft: '10px', backgroundColor: "#20699B",}}
                    >
                      <a href="/AnswerSheet" id="linkbtnExit" className="tdTop2T" 
                      // style={{ width: '84px', height: '30px', backgroundColor: "white", textAlign: "center", borderRadius: '3px', color: "#1d6799", fontSize: '17px', paddingTop: '5px', cursor: "pointer", textDecoration: "none", paddingLeft: "12px", paddingRight: "11px", paddingBottom: "5px", fontWeight: "bold",}} 
                      
                      >
                      &nbsp;&nbsp;Done&nbsp;&nbsp;
                      </a>
                    </td>
                    <td id="tdASGuide" className="tdTop3T"
                    // style={{ width: "20%", paddingLeft: '10px', clip: "rect(auto auto auto auto)", backgroundColor: "#20699B", color: "white", fontFamily: "Arial", fontSize: "10pt", }} 
                    >
                      <label id="lblLessonName"></label>
                    </td>
                    <td id="tdQnInd" width="21%" style={{ backgroundColor: "#20699B", color: "white", fontFamily: "Arial", fontSize: "10pt" }} >
                      <label id="lblNoOfQns">Question <span id="spanCurrentQuestionNo"></span> of
                        <span id="spanTotalNoOfQuestions"></span>
                      </label>
                    </td>
                    <td className="tdTop4T"
                    // style={{ width: "8%", height: '36px', backgroundColor: "#20699B" }} 
                    align="left"
                    >
                      <div id="divSolutionButton" className="divSolutionButtonT" 
                      // style={{ width: '84px', height: '30px', backgroundColor: "white", textAlign: "center", borderRadius: '3px', color: "#1d6799", fontSize: '17px', paddingTop: '5px', cursor: "pointer", fontWeight: "bold" }} 
                      > Solution
                      </div>
                    </td>
                    {/* <td id="tdKTestNavigation" align="right" valign="top" style={{ width: "28%", backgroundColor: "#20699B" }}>
                      <div id="divKTestNavigation" >
                          <a id="btnKTestPreviousQuestion" style={{cursor:'pointer', display:'inline-block',marginBottom:'5px',verticalAlign:'text-bottom'}}><img src={nav_previous_n}  /></a>
                          <div id='divKTestQuestionNoList' style={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap", display: "inline-block", verticalAlign: "text-bottom" }}>
                          </div>
                          <a id="btnKTestNextQuestion" style={{cursor:'pointer', display:'inline-block',marginBottom:'5px',marginRight:'3%',verticalAlign:'text-bottom'}} ><img src={next_test}  /></a>
                      </div>
                    </td> */}
                    <td id="tdATestNavigation" align="right" valign="top" className="tdATestNavigationT"
                    // style={{ width: "28%", backgroundColor: "#20699B" }} 
                    >
                        <div id="divATestNavigation" >
                            <a href="/AnswerSheet" id="btnATestPreviousQuestion" className="btnATestPreviousQuestionT" 
                            // style={{cursor:'pointer', display:'inline-block'}}
                            ><img src={nav_previous_n} alt="src not found" /></a>
                            <div className="divATestQuestionNoListT"
                            // style={{ display: "inline-block", width: "20%" }}
                            ></div>
                            <a href="/AnswerSheet" id="btnATestNextQuestion" className="btnATestNextQuestionT" 
                            // style={{cursor:'pointer', display:'inline-block', marginRight:'3%'}}
                            ><img src={next_test} alt="src" /></a>
                        </div>
                    </td>
                  </tr>
                  <tr id="trTop2">
                      <td className="tdTop5T" 
                      // style={{ backgroundColor: "#20699B"}}
                      >&nbsp;
                      </td>
                      <td id="td2" className="tdTop6T" align="left" valign="middle" 
                      // style={{backgroundColor:'#20699B'}}
                      >
                          <img id="imgQuestionStatus" className="imgQuestionStatusT" width="100%" 
                          // style={{width:'35px', height:'32px'}} 
                          alt="" />&nbsp;
                      <span id="spanAnswerComment" className="spanAnswerCommentT"
                      // style={{color:'white', fontFamily: 'Arial', fontSize: '10pt', backgroundColor: '#20699B'}}
                      >&nbsp;</span>
                      </td>
                      <td id="tdMarks" className="tdMarksT"
                      // style={{color:'white', fontFamily: 'Arial', fontSize: '10pt', backgroundColor: '#20699B'}}
                      >&nbsp;
                      </td>
                      <td colSpan={3} className="tdTop7T"
                      // style={{backgroundColor:'#20699B'}} 
                      valign="middle" align="center"
                      ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr></tr>

          <tr className="trowT"
          // style={{ padding: '0px', margin: '0px' }}
          >
              <td id="tdQn" valign="top" className="tdQnT"
              // style={{ padding: '0px', margin: '0px' }}
              >
                  <div id="divFrame" className="divFrameT"
                  // style={{ backgroundColor: 'white' }}
                  ></div>
                  <iframe id="iFrameQn" className="iFrameQnT" scrolling="yes" title="Question Content Frame"></iframe>
              </td>
          </tr>
        </tbody>
      </table>

      <div id="divSolutionIFrameT" className="CssPCSDiv" 
      // style={{ zIndex: 501, top: '0px' }}
      >
        <table className="CssTable CssTableClose">
          <tbody>
            <tr id="trSolutionIFrameTitle" className="CssTable">
              <td className="CssTable" id="CssTableT"
              // style={{ width: "85%", textAlign: "center", padding: '8px' }}
              >
                <span id="spPCSTitle" className="cssSpTitle">
                  Step by Step solution
                </span>
              </td>
              <td className="CssTable" id="CssTable2T"
              // style={{ width: "15%" }}
              >
                <img id="imgSolutionIFrameClose" src={Close} alt="Close" className="cssImgClose" 
                // style={{alignItems: 'right'}}
                />
              </td>
            </tr>
            <tr className="CssTable">
              <td className="CssTable" colSpan={2} >
                {/* <iframe id="iFrameSolution" frameBorder="0" className="CssiFrm"></iframe> */}
                <iframe id="iFrameSolution" frameBorder="0" className="CssiFrm" title="Solution Explanation Frame"></iframe>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default AnswerSheet;
