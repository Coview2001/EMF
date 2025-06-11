import React, { useEffect, useState } from 'react';
import './Style/Common.css';
import './Style/Header.css';
import './Style/SchoolLogin.css';

const SchoolLogin: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Implement login logic
    // console.log('Login attempt with:', { schoolCode, userName, password });
  };


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div id="pannelMain" className='pannelMainT'
    // style={{backgroundColor: "#457abe"}}
    > 
      <div id="main_top_container">
        <div id="header"></div>
        <div id="login_title_bar" className="section_container section_title_bar">
          <div id="bt_login" className="section_div bar_section">
            <p className="bar_title"></p>
          </div>
        </div>
      </div>
      <div id="browser_name_message" className="subject_container_title subject_container_title_sbg">
        <p className='BrowserMessageT' 
        // style={{display:'none'}}
        >
          Please use standard Browsers like Chrome, Firefox, Safari, Internet Explorer or Microsoft Edge.</p>
      </div>
      <div id="login" className="section_container">
        <div id="login_form_box">
          <input
            type="text"
            className="login_field login_school_code"
            placeholder="School Code"
            maxLength={50}
            value={schoolCode}
            onChange={(e) => setSchoolCode(e.target.value)}
          />
          <div className="divider"></div>
          <input
            type="text"
            className="login_field login_userid"
            placeholder="Login ID"
            maxLength={50}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="divider"></div>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            className="login_field login_password"
            placeholder="Password"
            maxLength={50}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span id="password_icon_container" onClick={togglePasswordVisibility}>
            <span className="show_hide_password_icon">
              <span className="tooltiptext">{isPasswordVisible ? 'Hide password' : 'Show password'}</span>
            </span>
          </span>
        </div>
        {error && <p id="alert_text"><span className="flash">{error}</span></p>}
        <div className="button_box">
          <div id="login_btn" className="general_btn two_btn">
            <a onClick={handleLogin}>Log In</a>
          </div>
        </div>
        <p className="page_text_sml">
          <a href="/LOGIN/ForgotPassword.aspx?UserType=SchoolLogin" target="_blank" className="page_link">
            Forgotten my password
          </a>
          <span className="text_breaker"></span>
        </p>
      </div>
    </div>
  );
};

export default SchoolLogin;


// import React, { useState, useEffect } from 'react';
// import './Style/Common.css';
// import './Style/Header.css';
// import './Style/SchoolLogin.css';
// import SchoolLoginBg from './Image/login_bg2_school.jpg';
// import SchoolLoginImg from './Image/bar_titles_log_in_school.png';

// const SchoolLogin: React.FC = () => {
//   const [schoolCode, setSchoolCode] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [tooltiptext, setTooltipText] = useState<string>('Show password');

//   useEffect(() => {
//     document.body.style.backgroundImage = `url(${SchoolLoginBg})`;
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundRepeat = 'no-repeat';
//     document.body.style.backgroundPosition = 'center center';
//     document.body.style.backgroundAttachment = 'fixed';
//     document.body.style.backgroundColor = '#32495f';
//     document.body.style.minWidth = '100%';
//     document.body.style.minHeight = '100%';

//     const btLoginElement = document.getElementById('bt_login');
//     if (btLoginElement) {
//       btLoginElement.style.backgroundImage = `url(${SchoolLoginImg})`;
//     }

//     const schoolInput = document.getElementById('txtSchoolCode');
//     if (schoolInput) {
//       schoolInput.style.backgroundImage = `url(${SchoolLoginImg})`;
//     }
    

//     return () => {
//       document.body.style.backgroundImage = '';
//       document.body.style.backgroundSize = '';
//       document.body.style.backgroundRepeat = '';
//       document.body.style.backgroundPosition = '';
//       document.body.style.backgroundAttachment = '';
//       document.body.style.backgroundColor = '';
//       document.body.style.minWidth = '';
//       document.body.style.minHeight = '';
//       if (btLoginElement) {
//         btLoginElement.style.backgroundImage = '';
//         btLoginElement.style.backgroundSize = '';
//       }
//     };
//   }, []);

//   const handleLogin = () => {
//     console.log('Login attempt with:', { schoolCode, userName, password });
//     // Add any login logic here
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prevState) => {
//       const newState = !prevState;
//       setTooltipText(newState ? 'Hide password' : 'Show password');
//       return newState;
//     });
//   };

//   return (
//     <form id="form1">
//       <div id="pannelMain">
//         <div>
//           <div id="main_top_container">
//             <div id="header"></div>
//             <div id="login_title_bar" className="section_container section_title_bar">
//               <div id="bt_login" className="section_div bar_section">
//                 <p className="bar_title"></p>
//               </div>
//             </div>
//           </div>
//           <div id="browser_name_message" className="subject_container_title subject_container_title_sbg">
//             <p style={{ display: 'none' }}>
//               Please use standard Browsers like Chrome, Firefox, Safari, Internet Explorer or Microsoft Edge.
//             </p>
//           </div>
//           <div id="login" className="section_container">
//             <div id="login_form_box">
//               <input
//                 type="text"
//                 className="login_field login_school_code"
//                 // style={{ backgroundImage: `url(${SchoolLoginImg})` }}
//                 id="txtSchoolCode"
//                 placeholder="School Code"
//                 maxLength={50}
//                 value={schoolCode}
//                 onChange={(e) => setSchoolCode(e.target.value)}
//               />
//               <div className="divider"></div>
//               <input
//                 type="text"
//                 id="txtUserName"
//                 className="login_field login_userid"
//                 placeholder="Login ID"
//                 maxLength={50}
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//               <div className="divider"></div>
//               <input
//                 type={isPasswordVisible ? 'text' : 'password'}
//                 id="txtPassword"
//                 className="login_field login_password"
//                 placeholder="Password"
//                 maxLength={50}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span id="password_icon_container" onClick={togglePasswordVisibility}>
//                 <span className={`show_hide_password_icon ${isPasswordVisible ? 'toggle_password' : ''}`}>
//                   <span className="tooltiptext">{tooltiptext}</span>
//                 </span>
//               </span>
//             </div>
//             {error && (
//               <p id="alert_text">
//                 <span className="flash">{error}</span>
//               </p>
//             )}
//             <div className="button_box">
//               <div id="login_btn" className="general_btn two_btn">
//                 <a onClick={handleLogin}>Log In</a>
//               </div>
//             </div>
//             <p className="page_text_sml" style={{ display: 'none' }}>
//               <a
//                 href="/LOGIN/ForgotPassword.aspx?UserType=SchoolLogin"
//                 target="_blank"
//                 className="page_link"
//               >
//                 Forgotten my password
//               </a>
//               <span className="text_breaker"></span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default SchoolLogin;

