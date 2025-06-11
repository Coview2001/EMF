import React, { useState, useEffect } from 'react';
import './Style/ConfirmAssessment.css';
import $ from 'jquery';


const ConfirmAssessment: React.FC = () => {
  const [grades, setGrades] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [loggedName, setLoggedName] = useState<string>('');
  const [spanGrades, setSpanGrades] = useState<string>('');

  useEffect(() => {
    setGrades('Grade 5'); 
    setYear('Year 8'); 
    setLoggedName('Logged in as Varun'); 
    setSpanGrades('Grade 5 to Grade 7'); 
  }, []);

  const handleLogout = () => {
  };

  const handleReady = () => {
  };

  return (
    <form id='Form'>
          <div>
            <div id="instructions_container">
              <button onClick={handleLogout} id='linkbtnLogout' className="sign_out" //T
              // style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}
              ></button>
              <div id="divLoggedName">{loggedName}</div>
            </div>
            <div id="instructions_content_box">
              <div id="instructions_content">
                <div id="rocket_image">
                </div>
                <div id="instructions_text_box">
                  <p className="instructions_title">
                    GET READY!
                  </p>
                  <p className="instructions_text">
                    <br />
                    Allow <span className="instructions_orange">30 minutes</span> to complete the assessment for {grades} and below.<br />
                    Allow <span className="instructions_orange">45 minutes</span> for {year} and above.
                    <br /><br />
                    If your internet connection drops or you need to stop the test,
                    <br className="line_break" />
                    you can <span className="instructions_orange">resume at any time</span>.<br />
                    <br />
                    Only students in <span className="instructions_orange">{spanGrades}</span>.<br />
                    <br />
                    Have a <span className="instructions_orange">pen and paper</span> handy for questions that require workings.<br />
                    <br />
                  </p>
                  <button onClick={handleReady} id='linkbtnReady' className="im_ready_btn" //T
                  // style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}} 
                  ></button>
                  <a href="#" className="im_ready_btn" 
                  // style={{ display: 'none' }}
                  ></a>
                  <div id="divLogo" className='md_logo_scale'>
                  </div>
                </div>
              </div>
            </div>
            {/* <LoadingScreen /> */}
          </div>
    </form>
  );
};

export default ConfirmAssessment;
