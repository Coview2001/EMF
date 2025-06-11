import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Common.css';
import './Style/Header.css';
import './Style/Loggedout.css';

const LoggedOut: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState<string>('');
  const navigate = useNavigate();

  const handleLogBackIn = () => {
    navigate('/');
  };

  return (
    <div id='form1'>
          <div id="logged_out">
            <div id="logged_out_image"></div>
            <p>
              <span className="title_text">See you soon</span>
              <span id="ar_text" className="state_text">You have been logged out.</span>
            </p>
            <div id="lo_close_btn" className="general_btn two_btn" onClick={handleLogBackIn}>
              <button id="linkbtnLogbackIn" type="button" className='linkbtnLogbackInT'
              // style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'center', paddingTop:'30px'}} 
              >
                <span id="spnLogbackIn">Log back In</span>
              </button>
            </div>
      
            <div id="main_top_container">
              <div id="header"></div>
              {/* <div id="login_title_bar" className="section_container section_title_bar">
                <div id="bt_login" className="section_div bar_section">
                  <p className="bar_title"></p>
                </div>
              </div> */}
            </div>
      
            <input
              type="hidden"
              id="hidSchoolCode"
              value={schoolCode}
              onChange={(e) => setSchoolCode(e.target.value)}
            />
          </div>
    </div>
  );
};

export default LoggedOut;
