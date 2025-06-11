import React, { useState } from 'react';
import './Style/ModifyProfile.css';
import './Style/common.css';
import './Style/header.css';

const ModifyProfile: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log({ firstName, gender, dob, grade });
  };

  const handleCancel = () => {
    setFirstName('');
    setGender('');
    setDob('');
    setGrade('');
  };

  return (
    <>
    <form name="mod_details_form" onSubmit={handleSubmit} id="mod_details_form_box">
      <div id="main_top_container">
        <div id="header">
          <div className="section_div">
            <div id="mobile_menu">
              <div id="mobile_box" className="mobile_dropdown">
                <div className="mobile_nav_item">
                  <a id="linkbtnStudyMobile" href="/StudyRoom">HOME</a>
                </div>
                <div className="mobile_nav_item">
                  <a id='linkbtnReportsMobile' href="/MSRReports">REPORTS</a>
                </div>
                <div id='linkbtnProfileMobile' className="mobile_nav_item" 
                // style={{ color: '#b9b9b9' }}
                >PROFILE</div>
                <div id="change_user_mobile_btn" className="mobile_nav_item mobile_nav_item_hidden">
                  <a id='linkbtnChangeUserMobile' href="/SelectUser">CHANGE USER</a>
                </div>
                <div className="mobile_nav_item mobile_nav_item_hidden">
                  <a id='linkbtnLogOutMobile' href="/LoggedOut">LOG OUT</a>
                </div>
              </div>
            </div>
            <div id="logout_btn">
              <a id='linkbtnLogOutprofile' href="/LoggedOut">Log Out</a>
            </div>
            <div id="change_user_btn">
              <a id='linkbtnChangeUserprofile' href="/SelectUser">Change User</a>
            </div>
            <p id="username_text" className="header_text">
              <label id="lblFname" className="header_text">Varun</label>
            </p>
            <div id="scrolled_nav_sub">
              <div id="divlogo" className="scrolled_logo" ></div>
              <div id="sn4_sub" className="scrolled_nav_item subbed">
                <a  id="linkstudy" href='/StudyRoom'>HOME</a>
              </div>
              <div id="sn3_sub" className="scrolled_nav_item subbed">
                <a id="linkbtnReportsprofile" href='/MSRReports' >REPORTS</a>
              </div>
              <div id="sn2_sub" className="scrolled_nav_item subbed">
              <a  
              // style={{ color: '#b9b9b9' }} 
              id="lnkbtnprofile" className='lnkbtnprofileT' >PROFILE</a>
              </div>
					</div>
          </div>
        </div>
      </div>

      <div id="modify_details" className='modify_detailsT'
      // style={{ display: 'block' }}
      >
        <p>
          <span className="title_text">Modify profile</span>
          <span id="alert_text"><span className="flash">&nbsp;</span></span>
        </p>

        <label className="field_label"><span>First name</span></label>
        <input
          id="txtFirstname"
          type="text"
          tabIndex={1}
          className="mod_details_field mod_details_first_name"
          maxLength={50}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />

        <div className="divider"></div>

        <div id="gender_select_div">
          <label className="field_label"><span>Gender</span></label>
          <select
            id="ddlGender"
            className="gender_select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>
              -- Select --
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="divider"></div>

        <label className="field_label"><span>Date of birth</span></label>
        <input
          id="txtDob"
          type="date"
          className="mod_details_field"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          size={20}
        />

        <div className="divider"></div>

        <div id="grade_select_div">
          <label className="field_label"><span>Grade/Year</span></label>
          <select
            id="ddlGrade"
            className="grade_select"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="" disabled>
              -- Select --
            </option>
            <option value="0">Kindergarten</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
        </div>

        <div className="button_box">
          <div
            id='modify_details_cancel_btn'
            className="general_btn two_btn_lightbox two_btn_left"
            onClick={handleCancel}
          >
            <a>Cancel</a>
          </div>
          <div className="general_btn two_btn_lightbox">
            <a>Submit</a>
          </div>
          <div 
          // style={{ display: 'none' }} 
          id="modify_details_ok_btn" className="general_btn two_btn_lightbox single_btn">
					<a>OK</a>
				</div>
        </div>
      </div>
    </form>
    </>
  );
};

export default ModifyProfile;