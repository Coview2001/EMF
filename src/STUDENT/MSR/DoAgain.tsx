import React, { useEffect, useState } from 'react';
import './Style/common.css';
import './Style/header.css';
import './Style/DoAgain.css';
import activity_icon_lesson from './Image/activity_icon_lesson.png';

const DoAgainPage: React.FC = () => {
  const [activityList, setActivityList] = useState([
    {
      CssClassForCurrentDicFileName: "vsdgdg",
      CssClassForCurrentLessonCode: "",
      CssClassForCurrentActivity: "activity-className",
      CssClassForActivityType: "activity-icon-className",
      ActivityName: "Sample Activity",
      CssClassForGameCompleted: "completed-className",
      ActivityScore: "90%",
    },
  ]);

  useEffect(() => {
    const storedActivityList = JSON.parse(localStorage.getItem('activityList') || '[]');
    if (storedActivityList.length > 0) {
      setActivityList(storedActivityList);
    }
  }, []);

  const handleStartActivity = () => {
    // console.log('Start Activity');
  };

  const handleCancel = () => {
    // console.log('Cancel');
  };

  return (
    <form id='form1'>
      		<a href="#" className="back-to-top">Back to Top</a>
          <a href="#" className="back-to-bottom" id="back_to_bottom_link">Back to Top</a>
          <div id="main_top_container">
            <div id="header">
              <div className="section_div">
                <div id="mobile_menu">
                  <div id="mobile_box" className="mobile_dropdown">
                    <div className="mobile_nav_item"><a id='lnkbtnMobileStudyRoom' href="/StudyRoom">HOME</a></div>
                    <div className="mobile_nav_item"><a id='linkbtnReportsMobile' href="/MSRReports">REPORTS</a></div>
                    <div className="mobile_nav_item"><a id='linkbtnProfileMobile' href="/Profile">PROFILE</a></div>
                    <div className="mobile_nav_item mobile_nav_item_hidden"><a id='linkbtnChangeUserMobile' href="/SelectUser">CHANGE USER</a></div>
                    <div className="mobile_nav_item mobile_nav_item_hidden"><a id='linkbtnLogOutMobile' href="/LoggedOut">LOG OUT</a></div>
                  </div>
                </div>
                <div id="logout_btn"><a id='linkbtnLogOut' href="/LoggedOut">Log Out</a></div>
                <div id="divChangeUserSection"><a id='linkbtnChangeUser' href="/SelectUser">Change User</a></div>
                <label id="lblFName" className="header_text"></label>
                <div id="scrolled_nav_sub">
                  <div id="divLogo" className="scrolled_logo"></div>
                  <div className="scrolled_nav_item subbed"><a id='lnkbtnStudyRoom' href="/StudyRoom">HOME</a></div>
                  <div className="scrolled_nav_item subbed"><a id='linkbtnReports' href="/MSRReports">REPORTS</a></div>
                  <div className="scrolled_nav_item subbed"><a id='linkbtnProfile' href="/Profile">PROFILE</a></div>
                </div>
              </div>
            </div>

            {/* <div id="divSubjectContainer" className="subject_container" >
              <div id="wlp_add_activity">
                <p>
                  <span className="title_text wlp_add_activity_title_text">
                    Select your activity to Do Again
                  </span>
                </p>

                <div className="activity_btn_and_tip_container">
                  <div className="tip_container"><label id='lblWLPText'>Practice activity</label></div>
                  <button className="activity_btn" onClick={handleStartActivity}>
                    <span id="spnWLPicon" className="activity_icon"></span>
                    <label id="lblActivityName">Activity Name</label>
                    <span className="button_right_text">
                      <span id="lblWLPHeading">GET STARTED</span>
                    </span>
                  </button>
                </div>

                <div id="divWLPCompletedContainer" className="completed_box">
                  <a>Weekly lesson plan completed</a>
                </div>

                <div id="english_lesson_plan_list" className="lesson_plan_list_container">
                  {activityList.map((activity, index) => (
                    <div
                      key={index}
                      className="wlp_list_item_row"
                      id={`content_${index + 1}`}
                    >
                      <div className={activity.CssClassForCurrentDicFileName}></div>
                      <div className={activity.CssClassForCurrentLessonCode}></div>
                      <div className={activity.CssClassForCurrentActivity}></div>
                      <div className={activity.CssClassForActivityType}></div>
                      <div className="wlp_list_current_activity_name">
                        <p>{activity.ActivityName}</p>
                      </div>
                      <div className="wlp_list_current_activity_percentage">
                        <p className={activity.CssClassForGameCompleted}>{activity.ActivityScore}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="subject_middle_gap"></div>

                <div className="button_box">
                  <div
                    id="wlp_add_activity_cancel_btn"
                    className="general_btn two_btn_lightbox"
                    onClick={handleCancel}
                  >
                    <a href="" id='lnkbtnCancel'>Cancel</a>
                  </div>
                </div>
              </div>
            </div> */}
            			<div id="divSubjectContainer" className="subject_container" >
				<div id="wlp_add_activity" >
					<p>
						<span className="title_text wlp_add_activity_title_text">Select your activity to Do Again</span>
					</p>
					<div className="activity_btn_and_tip_container">
						<div className="tip_container">
							<label id="lblWLPText" >Practice activity</label>
						</div>
						<a id="lnkStartActivity"   className="activity_btn" >
							<span id="spnWLPicon" className="activity_icon" 



              style={{ backgroundImage: `url(${activity_icon_lesson})` }}  



              
              > </span>
							<label id="lblActivityName" >Activity Name</label>
							<span className="button_right_text">
								<span id="lblWLPHeading" >GET STARTED</span>
							</span>
						</a>
					</div>
					<div id="divWLPCompletedContainer" className="completed_box" 
          // style={{ display: "none" }} 
          >
						<a>Weekly lesson plan completed</a>
					</div>
					<div id="english_lesson_plan_list" className="lesson_plan_list_container" >
						{/* <asp:Repeater id="rptWLPActivityList" >
							<ItemTemplate>
								<div className="wlp_list_item_row" id='content_<%# Container.ItemIndex + 1 %>'>
									<div onshow="false" className="wlp_list_current_activity_DicFileName">
										<p onshow ="false"><%# Eval("CssClassForCurrentDicFileName")%></p></div>
									<div onshow="false" className="wlp_list_current_activity_LessonCode">
										<p onshow ="false"><%# Eval("CssClassForCurrentLessonCode")%></p></div>
									<div className="wlp_list_current_activity_box <%# Eval("CssClassForCurrentActivity") %>"></div>
									<div className='wlp_list_current_activity_icon <%# Eval("CssClassForActivityType") %>'></div>
									<div className="wlp_list_current_activity_name">
										<p><%# Eval("ActivityName")%></p>
									</div>
									<div className="wlp_list_current_activity_percentage">
										<p className='<%# Eval("CssClassForGameCompleted")%>'><%# Eval("ActivityScore")%></p>
									</div>
								</div>
							</ItemTemplate>
						</asp:Repeater> */}
					</div>
					<div className="subject_middle_gap"></div>

					<div className="button_box">
						<div id="wlp_add_activity_cancel_btn" className="general_btn two_btn_lightbox">
							{/* <a id="lnkbtnCancel"  Font-Underline="false">Cancel</a> */}
              {/* <a id="lnkbtnCancel" href='/StudyRoom' style={{ textDecoration: 'underline' }}>Cancel</a> */}
              <a id="lnkbtnCancel" href='/StudyRoom' >Cancel</a>
              {/* <div id="lnkbtnCancel" style={{ textDecoration: 'underline' }}>Cancel</div> */}
						</div>
					</div>
				</div>
			</div>
          </div>
    </form>
  );
};

export default DoAgainPage;
