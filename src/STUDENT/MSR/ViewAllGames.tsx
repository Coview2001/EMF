import React, { useState } from 'react';
import "./Style/common.css";
import "./Style/header.css";
import './Style/ViewAllGames.css';

const ViewAllGames: React.FC = () => {
  const [gameSelected, setGameSelected] = useState<string>('game1'); 
  // const [username, setUsername] = useState<string>(''); 
  const [schoolCode, 
    // setSchoolCode
  ] = useState<string>(''); 

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGameSelected(e.target.value);
  };

  const handleStartGame = () => {
    // console.log(`Starting game: ${gameSelected}`);
  };

  return (
    <form id="form1">
        <div id="header">
                  <div className="section_div">
                      <div id="mobile_menu">
                          <div id="mobile_box" className="mobile_dropdown">
                              <div className="mobile_nav_item">
                      <a id="hlinkStudyRoomMobile" href='/StudyRoom' >HOME</a>
                              </div>
                              <div className="mobile_nav_item"><a id="hlinkReportsMobile" href='/MSRReports' >REPORTS</a></div>
                              <div className="mobile_nav_item"><a id="hlinkProfileMobile" href='Profile' >PROFILE</a></div>
                              <div className="mobile_nav_item scrolled_nav_item_last">
                                <a href="/ViewAllGames">ACCOUNT</a></div>

                              <div className="mobile_nav_item mobile_nav_item_hidden">
                                  <a id="linkbtnLogOutMobile" href='/LoggedOut' >LOG OUT</a>
                              </div>
                          </div>
                      </div>
                      <div id="logout_btn">
                          <a id="linkbtnLogOut" href='/LoggedOut' >Log Out</a>
                      </div>
                      <div id="divChangeUserSection" >
                          <a id="linkbtnChangeUser" href='/SelectUser' >Change User</a>
                      </div>
                      <label id="lblFName" className="header_text" >Varun</label>
                      <div id="scrolled_nav_sub">

                  <div id="divLogo" className="scrolled_logo" ></div>
                          <div id="sn4_sub" className="scrolled_nav_item subbed">
                    <a id="hlinkStudyRoom" href='/StudyRoom' >HOME</a>
                          </div>
                          <div id="sn3_sub" className="scrolled_nav_item subbed"><a id="hlinkReports" href='/MSRReports' >REPORTS</a></div>
                          <div id="sn2_sub" className="scrolled_nav_item subbed"><a id="hlinkProfile" href='/Profile' >PROFILE</a></div>
                          <div id="sn1_sub" className="scrolled_nav_item scrolled_nav_item_last subbed"><a href="/ViewAllGames">ACCOUNT</a></div>
                      </div>
                  </div>
              </div>

      <div id="user_banner" className='user_bannerT'
      // style={{marginTop:'80px'}}
      ></div>
      <div id="english_banner" className="subject_banner"></div>

      <div id="english_container" className="subject_container">
        <div id="subject_container_right_bg_images_english" className="subject_container_right_bg_images"></div>
        <div className="subject_container_title">
          <p>Games</p>
        </div>
        <div className="subject_container_text">
          <p>Click on GetStarted to Play a game</p>
        </div>

        <div className="activity_btn_and_tip_container" id='activitybtn'>
          <div className="tip_container">
            <p>Start Game</p>
          </div>
          <div className="activity_btn">
            <span id='english_wlp_icon' className="activity_icon activity_icon_lesson"></span>
            <label id='lblGame'>{gameSelected}</label>
            <span className="button_right_text">
              <div id='lnkStart' onClick={handleStartGame}>GET STARTED</div>
            </span>
          </div>
        </div>

        <select id='ddlGame' className="math_time_select" value={gameSelected} onChange={handleGameChange}>
          <option value="">Select Game</option>
          <option value="game1">Game 1</option>
          <option value="game2">Game 2</option>
        </select>
      </div>

      <input type="hidden" value={gameSelected} />
      <input type="hidden" value={schoolCode} />
    </form>
  );
};

export default ViewAllGames;
