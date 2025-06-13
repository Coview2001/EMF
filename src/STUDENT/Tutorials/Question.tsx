import React, { useState } from 'react'
import back_n from "../Tutorials/Image/back_n.gif";
import back_o from "../Tutorials/Image/back_o.gif";
import back_d from "../Tutorials/Image/back_d.gif";
import principle_n from "../Tutorials/Image/principle_n.gif";
import tutorials_n from "../Tutorials/Image/tutorials_n.gif";
import clue_n from "../Tutorials/Image/clue_n.gif";
import solution_n from "../Tutorials/Image/solution_n.gif";
import solution_o from "../Tutorials/Image/solution_o.gif";
import solution_d from "../Tutorials/Image/solution_d.gif";
import next_n from "../Tutorials/Image/next_n.gif";
import next_o from "../Tutorials/Image/next_o.gif";
import next_d from "../Tutorials/Image/next_d.gif";
import ok_n from "../Tutorials/Image/ok_n.gif";
import ok_o from "../Tutorials/Image/ok_o.gif";
import ok_d from "../Tutorials/Image/ok_d.gif";
import done_n from "../Tutorials/Image/done_n.gif";
import done_o from "../Tutorials/Image/done_o.gif";
import done_d from "../Tutorials/Image/done_d.gif";
import x_close_btn_n from "../Tutorials/Image/x_close_btn_n.png";
import x_close_btn_o from "../Tutorials/Image/x_close_btn_o.png";
import next_step_btn_n from "../Tutorials/Image/next_step_btn_n.png";
import next_step_btn_o from "../Tutorials/Image/next_step_btn_o.png";
import got_it_btn_n from "../Tutorials/Image/got_it_btn_n.png";
import got_it_btn_o from "../Tutorials/Image/got_it_btn_o.png";
import './Style/Question.css';

const Question: React.FC = () => {
  const [backSrc, setBackSrc] = useState(`${back_n}`);
  const [nextSrc, setNextSrc] = useState(`${next_n}`);
  const [okSrc, setOkSrc] = useState(`${ok_n}`);
  const [solutionSrc, setSolutionSrc] = useState(`${solution_n}`);
  const [doneSrc, setDoneSrc] = useState(`${done_n}`);
  const [CloseBtnSrc, setCloseBtnSrc] = useState(`${x_close_btn_n}`);
  const [NextStepBtnSrc, setNextStepBtnSrc] = useState(`${next_step_btn_n}`);
  const [GotItBtnSrc, setGotItBtnSrc] = useState(`${got_it_btn_n}`);


  const handleNextStepBtnMouseOver = () => setNextStepBtnSrc(`${next_step_btn_o}`);
  const handleNextStepBtnMouseOut = () => setNextStepBtnSrc(`${next_step_btn_n}`);

  const handleGotItBtnMouseOver = () => setGotItBtnSrc(`${got_it_btn_o}`);
  const handleGotItBtnMouseOut = () => setGotItBtnSrc(`${got_it_btn_n}`);

  const handleBackMouseOver = () => setBackSrc(`${back_o}`);
  const handleBackMouseOut = () => setBackSrc(`${back_n}`);
  const handleBackMouseDown = () => setBackSrc(`${back_d}`);
  const handleBackMouseUp = () => setBackSrc(`${back_o}`);

  const handleNextMouseOver = () => setNextSrc(`${next_o}`);
  const handleNextMouseOut = () => setNextSrc(`${next_n}`);
  const handleNextMouseDown = () => setNextSrc(`${next_d}`);
  const handleNextMouseUp = () => setNextSrc(`${next_o}`);

  const handleOkMouseOver = () => setOkSrc(`${ok_o}`);
  const handleOkMouseOut = () => setOkSrc(`${ok_n}`);
  const handleOkMouseDown = () => setOkSrc(`${ok_d}`);
  const handleOkMouseUp = () => setOkSrc(`${ok_o}`);

  const handleSolutionMouseOver = () => setSolutionSrc(`${solution_o}`);
  const handleSolutionMouseOut = () => setSolutionSrc(`${solution_n}`);
  const handleSolutionMouseDown = () => setSolutionSrc(`${solution_d}`);

  const handleDoneMouseOver = () => setDoneSrc(`${done_o}`);
  const handleDoneMouseOut = () => setDoneSrc(`${done_n}`);
  const handleDoneMouseDown = () => setDoneSrc(`${done_d}`);
  const handleDoneMouseUp = () => setDoneSrc(`${done_o}`);

  const handleCloseBtnMouseOver = () => setCloseBtnSrc(`${x_close_btn_o}`);
  const handleCloseBtnMouseOut = () => setCloseBtnSrc(`${x_close_btn_n}`);
  return (
    <form id="form1" >
		<div>
			<table className='QuestionTableT' 
			// style={{ width: "100%" }}
			>
				<tr id="trQntitle">
					<td id='tdQnTitle' 
					// style={{ padding: "2px", width: "100%"}} 
					className="HeadMsg">Lesson&nbsp;=&nbsp;
					<span id="spanLessonName" className='spanLessonNameT'
					// style={{ color: "#333333" }}
					></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Question&nbsp;<span id="spanCurrentQuestionNo" className='spanCurrentQuestionNoT'
				//   style={{ color: "#333333" }}
				  ></span>&nbsp;of&nbsp;<span id="spanTotalNoOfQuestions" style={{ color: "#333333" }} ></span>
						<span id='spanWhiteBoardLinkT'
						// style={{ margin: "104px" }}
						>
							<a href='/Question' id="WhiteBoardLink"  className='WhiteBoardLinkT'
							// style={{ fontSize: "11pt", color: "#333333",  display:"none", fontWeight: "bold" }} 
							target="_blank">Whiteboard</a>
						</span>
					</td>
				</tr>
				<tr id="trQnButtons">
					<td className='QnPanelT'
					// style={{ padding: "0px", margin: "0px" }}
					>
						<table id="tabQnNav" className='QnPanel2T'
						// style={{ width: "100%", padding: "0px", margin: "0px" }}
						 >
							<tr id="trQnOK" className='trQnOKT' 
							// style={{ height: "50px" }}
							>
								<td id='QnPanelIdT' 
								// style={{ width: "2%" }}
								className="QnPanel">&nbsp;</td>
								<td id='QnPanelId2T'
								// style={{ width: "13%", textAlign: "center" }} 
								className="QnPanel">
                  <a href='/Question' id='imgbtnBack' className='imgbtnBackT'
				//   style={{ cursor: "pointer" }}
				  ><img src={backSrc} alt="Back" onMouseOver={handleBackMouseOver} onMouseOut={handleBackMouseOut} onMouseDown={handleBackMouseDown} onMouseUp={handleBackMouseUp} 
				//   style={{ verticalAlign: "middle" }} 
					className='imgbtnBack2T'
				  /></a>
								</td>
								<td id='QnPanelId3T'
								// style={{ width: "13%", textAlign: "center" }} 
								className="QnPanel">
									<input type="image" id="imgPrc" src={principle_n} className='imgPrcT' alt='image'
									// style={{ cursor: "pointer", verticalAlign: "middle" }} 
									/></td>
								<td id='QnPanelId4T'
								// style={{ width: "13%", textAlign: "center", padding: "0px", margin: "0px" }} 
								className="QnPanel">
									<input type="image" id="imgClue" src={clue_n} className='imgClueT' alt='images'
									// style={{ cursor: 'pointer', verticalAlign: 'middle'}} 
									/></td>
								<td id='QnPanelId5T'
								// style={{ width: "13%", textAlign: "center", padding: "0px", margin: "0px" }} 
								className="QnPanel">
									<input type="image" id="imgSoln" src={solutionSrc} className='imgSolnT' alt='input_image'
									// style={{ cursor: 'pointer', verticalAlign: 'middle'}} 
									/></td>
								<td id='QnPanelId6T'
								// style={{ width: "13%", textAlign: "center" }} 
								className="QnPanel">
                  <a href='/Question' id='imgbtnTut' className='imgbtnTutT'
				//   style={{ cursor: "pointer" }}
				  ><img src={tutorials_n} alt="Tutorial" id='imgbtnTut2T'
				//   style={{ verticalAlign: "middle" }} 
				  /></a>
                  <img id='imgOK' src={okSrc} alt="OK" onMouseOver={handleOkMouseOver} onMouseOut={handleOkMouseOut} onMouseDown={handleOkMouseDown} onMouseUp={handleOkMouseUp} 
				//   style={{ verticalAlign: "middle", cursor: 'pointer' }} 
				  className='imgOKT'
				  /></td>
								<td 
								// style={{ width: "2%" }} 
								className="QnPanel" id='QnPanelId7'>&nbsp;</td>
							</tr>
							<tr id="trQnNext" className='trQnNextT'
							// style={{ height: "50px", display: "none" }}
							>
								<td id="tdBN1"
								// style={{ width: "2%" }} 
								className="QnPanel"
								>&nbsp;</td>
								<td id="tdAnsMsg"
								// style={{ width: "39%", textAlign: "left", fontFamily: "Arial", fontSize: "large", color: "White" }} 
								className="QnPanel"
								>&nbsp;</td>
								<td id="tdShowCA" 
								// style={{ width: "13%", verticalAlign: "middle" }} 
								className="QnPanel"
								>&nbsp;</td>
								<td id="tdAnsSoln" 
								// style={{ textAlign: "center", width: "13%" }} 
								className="QnPanel">
                  <img id='imgSolnAfterAnswering' src={solutionSrc} alt="Solution"  onMouseOver={handleSolutionMouseOver} onMouseOut={handleSolutionMouseOut} onMouseDown={handleSolutionMouseDown} 
				//   style={{ verticalAlign: "middle", cursor: 'pointer' }} 
				  />
								</td>
								<td id='tdQnNext' 
								// style={{ textAlign: "right", width: "31%" }} 
								className="QnPanel">
                <input type='image' id='imgNextQuestion' src={nextSrc} onMouseOver={handleNextMouseOver} onMouseOut={handleNextMouseOut} onMouseDown={handleNextMouseDown} onMouseUp={handleNextMouseUp} 
				// style={{cursor: 'pointer', verticalAlign: 'middle' }}
				alt='input_images'
				/>
                <a href='/Question' id='imgbtnAllQuestionsCompleted'><img src={doneSrc} alt="Done" id='imgbtnAllQuestionsCompleted2T'
				// style={{ cursor: "pointer", verticalAlign: "middle", display: "none" }} 
				onMouseOver={handleDoneMouseOver} onMouseOut={handleDoneMouseOut} 
				onMouseDown={handleDoneMouseDown} onMouseUp={handleDoneMouseUp} /> </a>
								</td>
								<td id='tdBN' 
								// style={{ width: "2%" }} 
								className="QnPanel">&nbsp;</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr id="triFrame">
					<td id='tdFrameQnT'
					// style={{ width: "100%", padding: "0px" }}
					>
						<div id="divFrameQn" 
						// style={{ WebkitOverflowScrolling: "touch",  overflow: "hidden" }}
						>
							<iframe id="iFrameQn" title='iFrameQn' marginHeight={0} marginWidth={0} frameBorder={0} scrolling="auto" className="CssiFrm"></iframe>
						</div>
					</td>
				</tr>
			</table>
		</div>

		<div id="divReadOnlyScreen" className="read-only"></div>
		<div id="divPCS" className="CssPCSDiv">
				<table id='tblTitlePCS' border={0} cellPadding={1} cellSpacing={0} style={{ width: "100%", zIndex: "400", height: "50px" }}>
				<tr>
					<td id="tdPCSTitle1" 
					// style={{ color : 'white', fontFamily:'Arial', fontSize:'24px', fontWeight:'bold', backgroundRepeat:'repeat', width:'100%', verticalAlign:'middle', cursor:'default', padding:'2px', paddingLeft:'30px', lineHeight:'50px' }}
					></td>		
					<td id="tdPCSTitle2" 
					// style={{ backgroundRepeat:'repeat', width:'100%', verticalAlign:'middle', textAlign:'right', padding:'2px', paddingRight:'20px' }}
					>
            <img id='imgPCClose' src={CloseBtnSrc}  alt='Close'
			// style={{width: '30px', height:'30px', backgroundSize:'cover', marginRight: '30px', backgroundPosition:'center', backgroundRepeat: 'no-repeat', cursor: 'pointer'}} 
			onMouseOver={handleCloseBtnMouseOver} onMouseOut={handleCloseBtnMouseOut}/>
					</td>
				</tr>
			</table>
			<div id="divFramePCS" 
			// style={{ WebkitOverflowScrolling: "touch",  overflow: "hidden" }}
			>				
				<iframe id='iFrameSolution' className='iFrameSolutionT' title='iFrameSolution'
				// style={{ width:'100%', border:'none', height:'auto', overflowY:'scroll', WebkitOverflowScrolling:'touch', display:'none'}}
				></iframe>
			</div>
			<table id='tblNavPCS' cellPadding={1} 
			// style={{width: '100%'}}
			>
				<tr>
					<td id="tdPCSBottom2" 
					// style={{ height: "50px", padding: "10px", backgroundRepeat: "repeat", verticalAlign: "middle", textAlign: "right", backgroundColor: "#f2f2f2" }}
					>
						<span id="spanPCSButtons">
							<input id='btnPCSPrevious' type='button' value='PREVIOUS' 
							// style={{ fontWeight: "bold", color: "White", fontSize: "12pt", borderStyle: "none", backgroundColor: "#333333", cursor: "pointer" }} 
							/>&nbsp;&nbsp;&nbsp;&nbsp;
              <img id='btnPCSNext' src={NextStepBtnSrc} onMouseOver={handleNextStepBtnMouseOver} onMouseOut={handleNextStepBtnMouseOut} alt='Next'
			//   style={{width: '100px', height:'40px', backgroundSize:'cover', marginRight: '30px', marginTop:'5px' , backgroundPosition:'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', marginBottom: '5px'}} 
			  />
              <img id='btnPCSClose' src={GotItBtnSrc} onMouseOver={handleGotItBtnMouseOver} onMouseOut={handleGotItBtnMouseOut} alt='Got It'
			//   style={{ width: '100px', height:'40px', backgroundSize:'cover', marginRight: '30px', marginTop:'5px' , backgroundPosition:'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', marginBottom: '5px'}} 
			  />
						</span>
					</td>
				</tr>
			</table>
		</div>
		<div id="divClue" className="CssClueDiv">
			<table id='tblTitleClue' className='tblTitleClueT'
			// style={{ width: "100%", height: "50px", background: "#7a96df" }}
			>
				<tr>
					<td id="tdClueTitle1" className='tdClueTitle1T'
					// style={{ fontFamily: "Arial", width: "100%", fontSize: "15px", fontWeight: "bold", backgroundRepeat: "repeat", lineHeight: "50px", paddingLeft: "30px", color: "#ffffff", textAlign: "start" }}
					></td>
					<td id="tdClueTitle2" className='tdClueTitle2T'
					// style={{ backgroundRepeat: "repeat", width: "100%", verticalAlign: "middle", textAlign: "right" }}
					>
          <img id='imgPCClose' src={CloseBtnSrc} className='imgPCCloseT' alt='Close'
		//   style={{ width: '30px', height:'30px', backgroundSize:'cover', marginRight: '30px', backgroundPosition:'center', backgroundRepeat: 'no-repeat', cursor: 'pointer' }} 
		  onMouseOver={handleCloseBtnMouseOver} onMouseOut={handleCloseBtnMouseOut}/>
					</td>
				</tr>
			</table>
			<div id="divFrameClue" className='divFrameClueT'
			// style={{ width: "100%", borderBottom: "solid 1px #e3e3e3", background: "#ffffff" }}
			>
				<iframe id='iFrameClue' className='iFrameClueT' title='iFrameClue'
				// style={{ width: "100%", border: "none", display: "none" }}
				></iframe>
			</div>
			<table id='tblNavClue' cellPadding={1} className='tblNavClueT'
			// style={{ width: "100%", height: "50px", background: "#f2f2f2" }}
			>
				<tr>
					<td id="tdClueBottom2" className='tdClueBottom2T'
					// style={{ height: "30px", backgroundRepeat: "repeat", verticalAlign: "middle", textAlign: "right" }}
					>
						<span id="spanClueButtons">							
            <img id='btnPCSCloseT' src={GotItBtnSrc} onMouseOver={handleGotItBtnMouseOver} onMouseOut={handleGotItBtnMouseOut} alt='Got It'
			// style={{ width: '100px', height:'40px', backgroundSize:'cover', marginRight: '30px', marginTop:'5px' , backgroundPosition:'center', backgroundRepeat: 'no-repeat', cursor: 'pointer', marginBottom: '5px'}} 
			/>
						</span>
					</td>
				</tr>
			</table>
		</div>
		<div id="dialog-confirm" title="" 
		// style={{ display: "none" }}
		>
			<p><span className="ui-icon ui-icon-alert" id='spanAlertT'
			// style={{ float: "left", margin: "12px 12px 20px 0" }}
			></span></p>
		</div>
</form>
  )
}

export default Question;