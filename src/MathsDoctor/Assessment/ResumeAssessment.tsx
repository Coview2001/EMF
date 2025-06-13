import React from 'react';
import './Style/ResumeAssessment.css';

const ResumeAssessment: React.FC = () => {
  return (
    <form id='Form'>
          <div>
            <div id="resume_container">
              <button id='linkbtnLogout' className="sign_out" aria-label="Sign Out" //T
              // style={{border: 'none', color:'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'center'}}
              ></button>
              <div className="sign_out" //T
              // style={{ display: 'none' }}
              ></div>
              <div id="divLoggedName"></div>
            </div>

            <div id="resume_content_box">
              <div id="resume_content">
                <div id="resume_text_box">
                  <p className="resume_title">WELCOME BACK</p>
                  <p className="resume_text">
                    <br />
                    You did not complete the assessment when you were last logged in.
                    <br />
                    <br />
                    <span className="resume_orange">Would you like to resume the assessment now?</span>
                    <br />
                    <br />
                  </p>

                  <div id="middleband_div">
                    <div className="button_div">
                      <button className="exit_btn" aria-label="Exit" 
                      // style={{border: 'none', color:'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'center'}}
                      ></button>
                      <div id='exit_btn' className="exit_btn" 
                      // style={{ display: 'none' }}
                      ></div>
                    </div>
                    <div id="bok_doorway"></div>
                    <div className="button_div">
                      <button  className="resume_btn" aria-label="Resume" //T
                      // style={{border: 'none', color:'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'center'}}
                      ></button>
                      <div className="resume_btn" //T
                      // style={{ display: 'none' }}
                      ></div>
                    </div>
                  </div>

                  <div id="bok_doorway2"></div>
                  <div id="divLogoScale2"></div>
                </div>
              </div>
            </div>

            <div id="divLogoScale"></div>

            {/* <LoadingScreen /> */}
          </div>
    </form>
  );
};

// const LoadingScreen: React.FC = () => {
//   return <div id="loading-screen">Loading...</div>;
// };

export default ResumeAssessment;
