import React, { useState, useEffect } from 'react';
import './Style/Common.css';
import './Style/FamilyLogin.css';
import './Style/Header.css';
import './Style/helplines.css';
import  UserRed  from "./Image/fr_userid_red.png";
import  PassRed  from "./Image/fr_password_red.png";
import FamilyLoginBg from './Image/login_bg2.jpg'
import FamilyLoginTittle from "./Image/bar_titles_log_in.png";
import { useNavigate } from 'react-router-dom';

const FamilyLogin: React.FC = () => {
  const [userName, setuserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [displayErrorMessage, setDisplayErrorMessage] = useState<boolean>(false);
  const [showHelplines, setShowHelplines] = useState<boolean>(false); 
  const [tooltiptext, setTooltipText] = useState<string>('Show password');
  const navigate = useNavigate();


      useEffect(() => {
        const handleResize = () => {
          // document.body.style.height = `${window.innerHeight - 40}px`;
          // document.body.style.width = `${window.innerWidth}px`;
          // document.body.style.backgroundColor = '#457abe';
          document.body.style.backgroundSize = 'cover';
        };
    
        handleResize(); 
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize); 
        };
      }, []);
  useEffect(() => {

    document.body.style.backgroundImage = `url(${FamilyLoginBg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundAttachment = 'fixed';
    // document.body.style.backgroundColor = '#32495f';
    document.body.style.minWidth = '100%';
    document.body.style.minHeight = '100%';

    const btLoginElement = document.getElementById('bt_login');
    if (btLoginElement) {
      btLoginElement.style.backgroundImage = `url(${FamilyLoginTittle})`;
    }
    const handleResize = () => {
      document.body.style.height = `${window.innerHeight - 40}px`;
      document.body.style.width = `${window.innerWidth}px`;
      // document.body.style.backgroundColor = '#457abe';
      document.body.style.backgroundSize = 'cover';
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);


  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!userName) {
      setErrorMessage('Please enter your login ID');
      return;
    }
    else if (!password) {
      setErrorMessage('Please enter your password');
      setDisplayErrorMessage(true);
      return;
    }
    else if (userName === '123' && password === '123') {
      navigate("/SelectUser");
      setDisplayErrorMessage(false);
      setErrorMessage("");
      return;
    }
    else {
      setErrorMessage('Your Login ID or Password is incorrect. Try again.');
      setDisplayErrorMessage(false);
      return;
    }
    
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => {
      const newState = !prevState;
      setTooltipText(newState ? 'Hide password' : 'Show password');
      return newState;
    });
  };

  const handleForgotPassword = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('/ForgotPassword', '_blank');
    // navigate("/ForgotPassword");
  };

  const handleSchoolLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open('/SchoolLogin', '_blank');
    // navigate("/SchoolLogin");
  };


  return (
    <form id='form1' onSubmit={handleLogin}>
      <div className="family-login">
        <div id="main_top_container">
          <div id="header"></div>
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
        <div id="Browser_info" className="browser_msg"></div>
        <div id="logindiv" className="section_container">
          <div id="login_logo"></div>
          <div id="login_form_box">
          <input
            type="text"
            className={`login_field login_userid ${errorMessage && !userName ? 'red_input' : ''}`}
            placeholder="Login ID"
            style={ errorMessage && !userName ? { backgroundImage: `url(${UserRed})` } : undefined}
            value={userName}
            onChange={e => setuserName(e.target.value)}
            maxLength={50}
            tabIndex={1}
          />
          <div className="divider"></div>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            className={`login_field login_password ${displayErrorMessage ? 'red_input' : ''}`}
            placeholder="Password"
            style={displayErrorMessage ? { backgroundImage: `url(${PassRed})` } : undefined}
            value={password}
            onChange={e => setPassword(e.target.value)}
            maxLength={50}
            tabIndex={2}
          />
            <span id="password_icon_container" onClick={togglePasswordVisibility}>
              <span className={`show_hide_password_icon ${isPasswordVisible ? 'toggle_password' : ''}`}>
                <span className="tooltiptext">{tooltiptext}</span>
              </span>
            </span>
            {errorMessage && (
              <p id="alert_text" className="flash">
                {errorMessage}
              </p>
            )}
            <div className="button_box">
              <div id="login_btn" className="general_btn two_btn">
                <a id="linkbtnLogIn" className="general_btn two_btn" onClick={handleLogin}>Log In</a>
              </div>
            </div>


            <p className="page_text_sml" >
              <a href='' id="hlinkForgotPassword"  target="_blank" className="page_link"  onClick={handleForgotPassword} >Forgotten my password</a>
              <span id="helplines_link"  className="page_link" onClick={(e) => { e.preventDefault(); setShowHelplines(true); }}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Helplines</span>
              <span className="text_breaker"></span>
              <a id="hlinkSchoolUser" target="_blank" className="page_link" >
                <span id="login_school_link" className="page_link" onClick={handleSchoolLogin}>
                          <span id="school_icon"></span>School users log in here
                      </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FamilyLogin;
