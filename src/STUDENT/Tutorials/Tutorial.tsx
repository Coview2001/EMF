import React, { useState } from 'react'
import './Style/Tutorial.css';
import Questions from './Image/questions.png';
import back_n from "../Tutorials/Image/back_n.gif";
import back_o from "../Tutorials/Image/back_o.gif";
import back_d from "../Tutorials/Image/back_d.gif";
import previous_n from "../Tutorials/Image/previous_n.gif";
import previous_o from "../Tutorials/Image/previous_o.gif";
import previous_d from "../Tutorials/Image/previous_d.gif";
import next_n from "../Tutorials/Image/next_n.gif";
import next_o from "../Tutorials/Image/next_o.gif";
import next_d from "../Tutorials/Image/next_d.gif";
import nextpage_n from "../Tutorials/Image/nextpage_n.gif";
import nextpage_o from "../Tutorials/Image/nextpage_o.gif";
import nextpage_d from "../Tutorials/Image/nextpage_d.gif";
import questions_n from "../Tutorials/Image/questions_n.gif";
import questions_o from "../Tutorials/Image/questions_o.gif";
import questions_d from "../Tutorials/Image/questions_d.gif";

const Tutorial: React.FC =() => {
  const [backSrc, setBackSrc] = useState(`${back_n}`);
  const [previousSrc, setPreviousSrc] = useState(`${previous_n}`);
  const [nextStepSrc, setNextStepSrc] = useState(`${next_n}`);
	const [nextpageSrc, setNextpageSrc] = useState(`${nextpage_n}`);
	const [questionsSrc, setQuestionsSrc] = useState(`${questions_n}`);


  const handleBackMouseOver = () => setBackSrc(`${back_o}`);
  const handleBackMouseOut = () => setBackSrc(`${back_n}`);
  const handleBackMouseDown = () => setBackSrc(`${back_d}`);

	const handleQuestionsMouseOver = () => setQuestionsSrc(`${questions_o}`);
	const handleQuestionsMouseOut = () => setQuestionsSrc(`${questions_n}`);
	const handleQuestionsMouseDown = () => setQuestionsSrc(`${questions_d}`);

  const handlePreviousMouseOver = () => setPreviousSrc(`${previous_o}`);
  const handlePreviousMouseOut = () => setPreviousSrc(`${previous_n}`);
  const handlePreviousMouseDown = () => setPreviousSrc(`${previous_d}`);

  const handleNextStepMouseOver = () => setNextStepSrc(`${next_o}`);
  const handleNextStepMouseOut = () => setNextStepSrc(`${next_n}`);
  const handleNextStepMouseDown = () => setNextStepSrc(`${next_d}`);

	const handleNextPageMouseOver = () => setNextpageSrc(`${nextpage_o}`);
	const handleNextPageMouseOut = () => setNextpageSrc(`${nextpage_n}`);
	const handleNextPageMouseDown = () => setNextpageSrc(`${nextpage_d}`);

  return (

    <body>
	<form id="form1" >
		<div id='divQnSplash' className='QnSplashT'



		style={{background: `url(${Questions})`, display: 'none', width: '473px', height: '280px', position: 'absolute', zIndex: 5}}
		
		
		
		
		>
		</div>

		<table cellPadding={0} cellSpacing={0} border={0} className='TutHeaderT' 
		// style={{fontFamily: 'Arial', width: '100%', zIndex: 100}}
		>
			<tr className="TutHeader">
				<td id="tdTitle" className="HeadMsg">Lesson : <span id="spanTitle" 
				// style={{fontSize: '11pt', color: '#333333', fontWeight: 'bold'}} 
				>Number Words to 10</span>.&nbsp;&nbsp;Page 
				<span id="spanCurrentPageNo" 
				// style={{fontSize: '11pt', color: '#333333', fontWeight: 'bold'}}
				>1</span> of <span id="spanNoOfTutorialPages" 
				// style={{fontSize: '11pt', color: '#333333', fontWeight: 'bold'}}
				></span>
						<span className='spanWhiteBoardLinkT'
						// style={{margin: '104px'}}
						>
							<a id="WhiteBoardLink" className='WhiteBoardLinkT'  
							// style={{fontSize: '11pt', color: '#333333', display: 'none', fontWeight: 'bold'}}
							target="_blank">Whiteboard</a>
						</span></td>
			</tr>
			<tr className="TutNav">
				<td id="tdTutNav" align="right" valign="middle" className='TutNavT'
				// style={{ backgroundColor: "rgb(102, 204, 255)" }}
				>
					<table id="tblTutNav" className="TutNav" cellPadding={5} cellSpacing={0}>
						<tbody>
							<tr>
								<td align="left" className='TutNav2T'
								// style={{width: '80%'}}
								>
                <input type="image" id='imgbtnBack' className='imgbtnBackT'
				// style={{ cursor: "pointer" }} 
				src={backSrc} alt="go back" onMouseOver={handleBackMouseOver} onMouseOut={handleBackMouseOut} onMouseDown={handleBackMouseDown}  />
								</td>
								<td align="right" className='TutNav3T'
								// style={{width: '10%'}}
								>
                  <input type='image' id='imgPrevPage' src={previousSrc} alt="Previous Page" onMouseOver={handlePreviousMouseOver} onMouseOut={handlePreviousMouseOut} onMouseDown={handlePreviousMouseDown}  />
								</td>
								<td align="right" className='TutNav3T'
								// style={{width: '10%'}}
								>
									<input type='image' id='imgNextStep' src={nextStepSrc} alt="Next Page" onMouseOver={handleNextStepMouseOver} onMouseOut={handleNextStepMouseOut} onMouseDown={handleNextStepMouseDown}  />
									<input type='image' id='imgNextPage' src={nextpageSrc} alt="Next Page" onMouseOver={handleNextPageMouseOver} onMouseOut={handleNextPageMouseOut} onMouseDown={handleNextPageMouseDown} />
									<a href=''><img id='imgbtnQuestions' src={questionsSrc} alt="Next Page" onMouseOver={handleQuestionsMouseOver} onMouseOut={handleQuestionsMouseOut} onMouseDown={handleQuestionsMouseDown} /> </a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td id="tdFrameTut" valign="top" className='TutFrameT'
				// style={{ display: "block", padding: "0px"}}
				>
					<div id="divFrameTut" className='TutFrame2T'
					// style={{ WebkitOverflowScrolling: "touch", overflow: "auto"}}
					>
						<iframe id="iframeTut" frameBorder={0} scrolling="yes" className='iframeTutT'
						// style={{ display: "block", width: "100%"}} 
						></iframe>
					</div>
				</td>
				<td id="tdPPT" valign="top" className='TutPPTT' 
				// style={{ display: "none"}}
				>
					<div id="divPPT" className='TutPPT2T'
					// style={{ overflow: "auto", display: "none"}}
					></div>
				</td>
			</tr>
		</table>
	</form>	
</body>
  )
}

export default Tutorial