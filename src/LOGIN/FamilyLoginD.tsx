import React, { useState } from 'react';
import './Style/Common.css';
import './Style/FamilyLogin.css';
import './Style/Header.css';
import './Style/helplines.css';
import Loading from '../Common/Loading';
import { useNavigate } from 'react-router-dom';

const FamilyLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showHelplines, setShowHelplines] = useState<boolean>(false); 
  const [tooltiptext, setTooltipText] = useState<string>('Show password');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }
    setErrorMessage('');

  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => {
      const newState = !prevState;
      setTooltipText(newState ? 'Hide password' : 'Show password');
      return newState;
    });
  };

  const handleForgotPassword = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/ForgotPassword');
  };


  return (
    <form id='form1'>
      <div className="family-login">
        <div id="main_top_container">
          <div id="header">
          </div>
          <div id="helplines" className='helplinesT'
          // style={{ display: showHelplines ? "block" : "none" }}
          >
            <p>
              <span className="title_text">Helplines</span><br />
              <span className="med_text">Technical Support</span><br />
              <span className="med_text"><b>1800 622 657</b></span><br />
              Office Hours (9am - 6pm)<br />
              <br />

              <span className="med_text">Maths Wiz Helpline</span><br />
              <span className="med_text"><b>1300 550 141</b></span><br />
              WA: Mon to Thu 3pm - 7pm<br />
              All other states: Mon to Thu 4pm - 7:30pm<br />
              <br />

              <span className="med_text">Parent Helpline</span><br />
              <span className="med_text"><b>1800 622 657</b></span><br />
              Office Hours (9am - 6pm)<br />
              <br />

              <span className="med_text">Email Support</span><br />
              tutor@kineticeducation.com.au<br />
              support@kineticeducation.com.au<br />
            </p>
            <div id="hl_close_btn" className="general_btn two_btn">
              <a href='' onClick={(e) => { e.preventDefault(); setShowHelplines(false); }}>Close</a>
            </div>
          </div>
          <div id="login_title_bar" className="section_container section_title_bar">
            <div id="bt_login" className="section_div bar_section">
              <p className="bar_title"></p>
            </div>
          </div>
        </div>
        {/* <div id="browser_name_message" className="browser_msg">
					<p>Please use standard browsers like Chrome, Firefox, </p>
					<p>Safari, Internet Explorer or Microsoft Edge.</p>
					<br />
				</div> */}
        {/* <div id="Chrome_browser_message" className="browser_msg">
					<p>In case you are using Google Chrome browser and getting this message, </p>
					<p>please ensure that you have upgraded to the latest version.</p>
					<br />
				</div> */}
        <div id="Browser_info" className="browser_msg">
				</div>

        <div id="logindiv" className="section_container">
          <div id="login_logo"></div>
          <div onSubmit={handleLogin} id="login_form_box">
            <input
              type="text"
              className="login_field login_userid"
              placeholder="Login ID"
              value={username}
              onChange={e => setUsername(e.target.value)}
              maxLength={50}
              tabIndex={1}
            />
            <div className="divider"></div>

            <input
              type={showPassword ? 'text' : 'password'}
              className="login_field login_password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              maxLength={50}
              tabIndex={2}
            />
            {/* <span id="password_icon_container">
              <span
                className={`show_hide_password_icon ${
                  showPassword ? 'toggle_password' : 'show_hide_password_icon'
                }`}
      
                onClick={togglePasswordVisibility}
              >
                <span className="tooltiptext">{tooltiptext}</span>
              </span>
            </span> */}
            <span id="password_icon_container" onClick={togglePasswordVisibility}>
              <span className={`show_hide_password_icon ${showPassword ? 'toggle_password' : ''}`}>
                <span className="tooltiptext">{tooltiptext}</span>
              </span>
            </span>
            <p id="alert_text"><span id="spanError" >&nbsp;</span></p>

            {errorMessage && (
              <p id="alert_text" className="flash">
                {errorMessage}
              </p>
            )}

            <div className="button_box">
              <div id="login_btn" className="general_btn two_btn">
                <a id="linkbtnLogIn" className="general_btn two_btn" >Log In</a>
              </div>
            </div>


            <p className="page_text_sml" >
              <a href='' id="hlinkForgotPassword"  target="_blank" className="page_link"  onClick={handleForgotPassword} >Forgotten my password</a>
              <span id="helplines_link"  className="page_link" onClick={(e) => { e.preventDefault(); setShowHelplines(true); }}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Helplines</span>
              <span className="text_breaker"></span>
              <a id="hlinkSchoolUser" target="_blank" className="page_link" >
                <span id="login_school_link" className="page_link" >
                          <span id="school_icon"></span>School users log in here
                      </span>
              </a>
            </p>
            {/* <p className="page_text_sml">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="page_link"
              >
                Forgotten my password
              </button>
              <span id="helplines_link" className="page_link">
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Helplines
              </span>
              <span className="text_breaker"></span>
              <button
                type="button"
                onClick={handleSchoolLogin}
                className="page_link"
              >
                <span id="login_school_link">
                  <span id="school_icon"></span>School users log in here
                </span>
              </button>
            </p> */}
          </div>
        </div>

        <Loading />
      </div>
    </form>
  );
};

export default FamilyLogin;

