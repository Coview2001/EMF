import React, { useState } from "react";
import './Style/common.css';
import './Style/header.css';
import './Style/ModifyLessonPlan.css';

const ModifyLessonPlan: React.FC = () => {
  const [mathLessonPlan, setMathLessonPlan] = useState<string>("");
  const [englishLessonPlan, setEnglishLessonPlan] = useState<string>("");

  const handleMathChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMathLessonPlan(event.target.value);
  };

  const handleEnglishChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEnglishLessonPlan(event.target.value);
  };

  const handleCancel = () => {
    setMathLessonPlan("");
    setEnglishLessonPlan("");
  };

  const handleSubmit = () => {
    alert(`Math: ${mathLessonPlan}, English: ${englishLessonPlan}`);
  };

  return (
    <form name="mod_lesson_plan_form" id="mod_lesson_plan_form_box" method="post" >
          <div id="main_top_container">
            <div id="header">
              <div className="section_div">
                <div id="mobile_menu">
                  <div id="mobile_box" className="mobile_dropdown">
                    <div className="mobile_nav_item">
                      <a id="linkbtnStudyMobile" href="/StudyRoom">HOME</a>
                    </div>
                    <div className="mobile_nav_item">
                      <a id="linkbtnReportsMobile" href="/MSRReports">REPORTS</a>
                    </div>
                    <div className="mobile_nav_item">
                      <a id="linkbtnMyProfileMobile" className="linkbtnMyProfileMobileT"
                      // style={{ color: "#b9b9b9" }} 
                      href="/Profile">PROFILE</a>
                    </div>
                    <div id="change_user_mobile_btn" className="mobile_nav_item mobile_nav_item_hidden">
                      <a id="linkbtnChangeUserMobile" href="/SelectUser" >CHANGE USER</a>
                    </div>
                    <div className="mobile_nav_item mobile_nav_item_hidden">
                      <a id="linkbtnLogOutMobile" href="/LoggedOut">LOG OUT</a>
                    </div>
                  </div>
                </div>
                <div id="logout_btn">
                  <a id="linkbtnLogOutprofile" href="/LoggedOut">Log Out</a>
                </div>
                <div id="change_user_btn">
                  <a id="linkbtnChangeUserprofile" href="/SelectUser">Change User</a>
                </div>
                <p id="username_text" className="header_text">
                  <label id="lblFname" className="header_text">Varun</label>
                </p>
                <div id="scrolled_nav_sub">
                  <div id="divlogo" className="scrolled_logo" ></div>
                  <div id="sn4_sub" className="scrolled_nav_item subbed">
                    <a  id="linkstudy" href="/StudyRoom">HOME</a>
                  </div>
                  <div id="sn3_sub" className="scrolled_nav_item subbed">
                    <a id="linkbtnReportsprofile" href="/MSRReports" >REPORTS</a>
                  </div>
                  <div id="sn2_sub" className="scrolled_nav_item subbed">
                    <a 
                    // style={{ color: "#b9b9b9" }} 
                    className="linkbtnMyProfileT"
                    id="linkbtnMyProfile" href="/Profile" >PROFILE</a>
                  </div>
                </div>
              </div>
            </div>

            <div id="modify_lesson_plan" className="modify_lesson_planT"
            // style={{ display: "block" }}
            >
              <p>
                <span className="title_text">Modify lesson plan</span>
                <span id="ar_text">
                  How many minutes would you like to spend each week on your lesson plans? Any changes will take effect on next week's lesson plan.
                </span>
                <br />
                <div id="math_select_div">
                  <span className="field_label"><span>Math lesson plan</span></span>
                  <select
                    id="ddlmathlessonplan"
                    className="math_time_select"
                    value={mathLessonPlan}
                    onChange={handleMathChange}
                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes (recommended)</option>
                    <option value="120">120+ minutes</option>
                  </select>
                </div>
                <div id="english_select_div">
                  <span className="field_label"><span>English lesson plan</span></span>
                  <select
                    id="ddlenglishlessonplan"
                    className="english_time_select"
                    value={englishLessonPlan}
                    onChange={handleEnglishChange}
                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes (recommended)</option>
                    <option value="75">75 minutes</option>
                    <option value="90">90+ minutes</option>
                  </select>
                </div>
              </p>
              <div className="button_box">
                <div
                  id="modify_lesson_plan_cancel_btn"
                  className="general_btn two_btn_lightbox two_btn_left"
                  onClick={handleCancel}
                >
                  <a id="linkbtnCancel">Cancel</a>
                </div>
                <div
                  id="modify_lesson_plan_submit_btn"
                  className="general_btn two_btn_lightbox"
                  onClick={handleSubmit}
                >
                  <a id="linkbtnSubmit">Submit</a>
                </div>
                <div 
                // style={{display: 'none'}} 
                id="modify_lesson_plan_ok_btn" className="general_btn two_btn_lightbox single_btn">
                  <a>OK</a>
                </div>
              </div>
            </div>
          </div>
    </form>
  );
};

export default ModifyLessonPlan;
