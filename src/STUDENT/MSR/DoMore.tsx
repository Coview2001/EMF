import React from 'react';
import "./Style/common.css";
import "./Style/header.css";
import "./Style/DoMore.css";
import $ from "jquery";
import activity_icon_lesson from "./Image/activity_icon_lesson.png";

const DoMore: React.FC = () => {
  React.useEffect(() => {
    $(".back-to-top").click(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $(".back-to-bottom").click(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }, []);

  return (
    <form id="form1" 
    // style={{ overflow: "hidden", backgroundColor: "#333333" }}
    >
      <a href="#" className="back-to-top">Back to Top</a>
      <a href="#" className="back-to-bottom" id="back_to_bottom_link">Back to Bottom</a>
      <div id="main_top_container">
        <div id="header">
          <div className="section_div">
            <div id="mobile_menu">
              <div id="mobile_box" className="mobile_dropdown">
                <div className="mobile_nav_item">
                  <a id='lnkbtnMobileStudyRoom' href='/StudyRoom'>HOME</a>
                </div>
                <div className="mobile_nav_item">
                  <a id='linkbtnReportsMobile' href='/MSRReports'>REPORTS</a>
                </div>
                <div className="mobile_nav_item">
                  <a id='linkbtnProfileMobile' href='Profile'>PROFILE</a>
                </div>
                <div id="divChangeUserSectionMobile" className="mobile_nav_item mobile_nav_item_hidden">
                  <a id='linkbtnChangeUserMobile' href='/SelectUser'>CHANGE USER</a>
                </div>
                <div className="mobile_nav_item mobile_nav_item_hidden">
                  <a id='linkbtnLogOutMobile' href='/LoggedOut'>LOG OUT</a>
                </div>
              </div>
            </div>
            <div id="logout_btn">
              <a id='linkbtnLogOut' href='/LoggedOut'>Log Out</a>
            </div>
            <div id="divChangeUserSection">
              <a id='linkbtnChangeUser' href='/SelectUser'>Change User</a>
            </div>
            <label id='lblFName' className="header_text">Varun</label>
            <div id="scrolled_nav_sub">
              <div id="divLogo" className="scrolled_logo"></div>
              <div id="sn4_sub" className="scrolled_nav_item subbed">
                <a id='lnkbtnStudyRoom' href='/StudyRoom'>HOME</a>
              </div>
              <div id="sn3_sub" className="scrolled_nav_item subbed">
                <a id='linkbtnReports' href='/MSRReports'>REPORTS</a>
              </div>
              <div id="sn2_sub" className="scrolled_nav_item subbed">
                <a id='linkbtnProfile' href='Profile'>PROFILE</a>
              </div>
            </div>
          </div>
        </div>
        <div id="wlp_add_activity">
          <p>
            <span className="title_text wlp_add_activity_title_text">Here is your next activity</span>
          </p>
          <div className="activity_btn_and_tip_container">
            <div className="tip_container">
              <label id="lblWLPText">New activity</label>
            </div>
            <a id="lnkStartActivity" className="activity_btn">
              <span id="spnWLPicon" className="activity_icon" 
              
              
              
              
              style={{ backgroundImage: `url(${activity_icon_lesson})` }}
              
              
              
              
              
              ></span>
              <label id="lblActivityName">Activity Demo</label>
              <span className="button_right_text">
                <span id="lblWLPHeading">GET STARTED</span>
              </span>
            </a>
          </div>
          <div className="subject_middle_gap"></div>

          
          <div className="button_box">
            <div id="wlp_add_activity_cancel_btn" className="general_btn two_btn_lightbox">
              <a id="lnkbtnCancel" href='/StudyRoom'>Cancel</a>
            </div>
          </div>
        </div>
      </div>
      <div id="dialog-confirm" title="">
        <span id="spnText"></span>
      </div>
    </form>
  );
};

export default DoMore;
