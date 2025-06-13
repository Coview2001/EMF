import React, { useState, useEffect } from 'react';
import './Style/AssessmentComplete.css';
// import $ from 'jquery';


const AssessmentComplete: React.FC = () => {
  const [loggedName, setLoggedName] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [getStartedText, setGetStartedText] = useState<string>('');

  useEffect(() => {
    setLoggedName('Logged in as Varun');
    setText('Your assessment results are ready.'); 
    setGetStartedText('Click below to get started on your next lesson!'); 
  }, []);

  return (
    <form id='form1'>
          <div id="completion_container">
            <div id="divLoggedName">
              {loggedName}
            </div>
            <div id="completion_content_box">
              <div id="completion_content">
                <div id="completion_text_box">
                  <p className="completion_title">
                    ASSESSMENT COMPLETE!
                  </p>
                  <p className="completion_text">
                    <br />
                    <span id="spanText">{text}</span>
                    <br /><br />
                    <span id="spanGetStarted" className="completion_orange">{getStartedText}</span>
                    <br /><br />
                  </p>
                  <div id="bok_finish_line"></div>
                  <div id="buttons_box" className='buttons_boxT'
                  // style={{ textAlign: 'center', display: 'flex' , justifyContent:'space-evenly' }}
                  >
                    <button id="linkbtnFinish" className="finish_btn1T" 
                    // style={{border: 'none', color:'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'end'}}
                    >
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="divLogo" className='md_logo_scale'></div>
            {/* <LoadingScreen /> */}
            <script src="../../JSLibrary/SessionTimeout/jquery.cookie.js"></script>
            <script src="../../JSLibrary/SessionTimeout/HandleSessionTimeOut.js"></script>
            <script src="Script/AssessmentComplete.js"></script>
          </div>
    </form>
  );
};

export default AssessmentComplete;
