import React, { useState, useEffect} from "react";
import "./Style/StudyRoom.css";
import "./Style/common.css";
import "./Style/header.css";
import Loading from "../../Common/Loading";
import Header from "../../Common/Header";
import Section from "../../Common/Section";

import trophy_club_0 from './trophy_club/trophy_club_0.png';
import trophy_club_10 from './trophy_club/trophy_club_10.png';
import trophy_club_25 from './trophy_club/trophy_club_25.png';
import trophy_club_50 from './trophy_club/trophy_club_50.png';
import trophy_club_75 from './trophy_club/trophy_club_75.png';
import trophy_club_100 from './trophy_club/trophy_club_100.png';
import trophy_club_150 from './trophy_club/trophy_club_150.png';
import trophy_club_200 from './trophy_club/trophy_club_200.png';
import trophy_club_250 from './trophy_club/trophy_club_250.png';
import trophy_club_300 from './trophy_club/trophy_club_300.png';
import trophy_club_350 from './trophy_club/trophy_club_350.png';
import trophy_club_400 from './trophy_club/trophy_club_400.png';

interface TrophyRange {
  totalTrophyCount: number;
  min: number;
  max?: number;  
  points: number;
}

const StudyRoom: React.FC = () => {
  const [trophyVisible, setTrophyVisible] = useState(false);
  const [wtaVisible, setWtaVisible] = useState(false);
  const [setWorkVisible, setSetWorkVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);
  const [trophy, setTrophy] = useState<string | null>(null);
  const [setWork, setSetWork] = useState<any[]>([]);
  const [weeklyProgress, setWeeklyProgress] = useState(50);
  const [myPoints, setMyPoints] = useState(0);
  const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const [trophyData, setTrophyData] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [purchases, setPurchases] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [totalTrophyCount, setTotalTrophyCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");



      useEffect(() => {
        sessionStorage.setItem("CurrentPage", "StudyRoom");

        const UserName = sessionStorage.getItem('FName');
        const UserLogin = sessionStorage.getItem('login');
        const UserAvatar = sessionStorage.getItem('CurrentAvatar');
        // console.log("totalTrophyCount222", totalTrophyCount)
        setPurchases(sessionStorage.getItem("CurrentPoints"));
        if (UserName !== null) {
          setUserName(UserName);
        }
        try {
          if (UserAvatar) {
            setImageSrc(`${UserAvatar}`);
          }
        } catch (error) {
          console.error('Error loading image:', error);
        }
        document.body.classList.add('StudyRoom-background');
        return () => {
          document.body.classList.remove('StudyRoom-background');
        };
      }, []);
      
    
        useEffect(() => {
          setMyPoints(1200);
          setOverallWeeklyProgress(75);
          setWeekCount(10);
          setTrophyData(["Gold", "Silver", "Bronze"]);
          // setUserName("Varun");
        }, []);
        
        
        const handleTrophyClick = () => {
          const trophyClubLegend = document.getElementById("trophy_club_legend");
          if (trophyClubLegend) {
            trophyClubLegend.style.display = 
              trophyClubLegend.style.display === "none" ? "block" : "none";
          }
        };

  const handleWtaClick = () => {
  };

  const handleSetWorkClick = (workDetails: string) => {
  };

  const handleTrophyOkClick = () => {
    setTrophyVisible(false); 
  };

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    if (!(e.target instanceof Element)) return; 

    if (!e.target.closest('#mobile_box') && !e.target.closest('#mobile_menu')) {
      setIsMenuVisible(false); 
    }
  };

  const handleMobileBoxClick = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation(); 
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('touchend', handleClickOutside);

    return () => {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('touchend', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  // if (loading) return (<Loading />)

  return (
    <form>
      <a href="#" className="back-to-top">
        Back to Top
      </a>
      <a href="#" className="back-to-bottom" id="back_to_bottom_link">
        Back to Bottom
      </a>

      <div id="main_top_container">
     
        <div>
          <Header />  
        </div>    
            <Section />

        <div id="divSubjectBanner" className="subject_banner" >
          <div className="subject_arrow_left_container" id="divsubject_arrow_left" >
            <div className="subject_arrow_text subject_arrow_text_left">
              <label id="lblArrowLeftText" ></label>
            </div>
            <a id="linkbtnArrowLeft" ><div id="english_subject_arrow_left_0101a" className="subject_arrow subject_arrow_left"></div></a>
          </div>
          <div className="subject_arrow_right_container" id="divsubject_arrow_right" >
            <div className="subject_arrow_text subject_arrow_text_right">
              <label id="lblArrowRightText" >SCIENCE</label>
            </div>
            <a id="linkbtnArrowRight" ><div id="english_subject_arrow_right_0101a" className="subject_arrow subject_arrow_right"></div></a>
          </div>
        </div>


        <div id="divSubjectContainer" className="subject_container">
          <div className="subject_middle_gap"></div>

          {/* <div id="trophy_club_rank_up_overlay"   >
                <div className="trophy_club_rank_up_container_title">
                	<p>CONGRATULATIONS. WELCOME TO CLUB <span id="spnClub"  className="bonus_points_text"></span>!</p>
                </div>
                <div id="WLP_completed_english_reward_div1">
                	<div id="trophy_rays1">
                    </div>
                	<div id="trophy_club_rank_up_trophy" >
                    </div>
                	<div id="trophy_club_rank_up_shadow">
                    </div>

                	<div id="dot_container1">
                        <div className="dot" id="dot011"></div>
                        <div className="dot" id="dot021"></div>
                        <div className="dot" id="dot031"></div>
                        <div className="dot" id="dot041"></div>
                        <div className="dot" id="dot051"></div>
                        <div className="dot" id="dot061"></div>
                        <div className="dot" id="dot071"></div>
                        <div className="dot" id="dot081"></div>
                    </div>
                    
                    <div className="subject_container_text">
                		<p>You will now receive <br /><span id="spnpoints"  className="bonus_points_text"></span><br /> bonus points for each trophy you earn.</p>
                	</div>
                    
                    <div className="trophy_club_rank_up_button_box">
                        <div id="trophy_club_rank_up_ok_btn" className="general_btn trophy_club_rank_up_btn trophy_club_rank_up_ok_btn_english">
                            <a>OK</a>
                        </div>
                    </div>
                </div>
            </div>  */}

          <div id="WLP_completed_english_reward_overlay"   data-example-completed-wlp-only="no"> 
                          <div className="subject_container_title">
                            <p>WELL DONE ON COMPLETING YOUR WEEKLY LESSON PLAN</p>
                          </div>
                  <div className="subject_container_text">
                            <span id="spntrophycoins" ></span>
                          </div>
                          <div id="WLP_completed_english_reward_div">
                            <div id="trophy_rays">
                              </div>
                    <div id="wlp_reward_trophy" className="wlp_reward_trophy_trophy wlp_reward_trophy_coins">
                                <div id="wlp_reward_trophy_amount_spacer" ></div>
                                <div id="wlp_reward_trophy_amount"  className="wlp_reward_trophy_amount_font_colour_02"></div>
                                  <div id="wlp_reward_trophy_amount_subtitle"  className="wlp_reward_trophy_amount_subtitle_font_colour_02"></div>
                              </div>                
                            <div id="trophy_shadow">
                              </div>
                              <div id="trophy_coin_container">
                                  <div id="trophy_coin01" className="trophy_coin">
                                  </div>
                                  <div id="trophy_coin02" className="trophy_coin">
                                  </div>
                                  <div id="trophy_coin03" className="trophy_coin">
                                  </div>
                                  <div id="trophy_coin04" className="trophy_coin">
                                  </div>
                                  <div id="trophy_coin05" className="trophy_coin">
                                  </div>
                                  <div id="trophy_coin06" className="trophy_coin">
                                  </div>
                              </div>
                            <div id="dot_container">
                                  <div className="dot" id="dot01"></div>
                                  <div className="dot" id="dot02"></div>
                                  <div className="dot" id="dot03"></div>
                                  <div className="dot" id="dot04"></div>
                                  <div className="dot" id="dot05"></div>
                                  <div className="dot" id="dot06"></div>
                                  <div className="dot" id="dot07"></div>
                                  <div className="dot" id="dot08"></div>
                              </div>
                          </div>
                      </div>

          <div id="divWTASection">
                    <div id="WTATitle" className="subject_container_title" >
                      <p>Your Tutor Has Set Writing Task Activity For You</p>
                    </div>
                      <a id="libkbtnWTA" className="activity_btn setwork_btn" >
                        <span id="WTALeson_Text" className="lesson-text" 
                        // style={{textAlign:'center'}} 
                        ></span>
                        <span className="button_right_text">
                          <span id="lblStartWTAText" >GET STARTED</span>
                        </span>
                      </a>				
                    <hr className="subject_inner_hr" />
                  </div>


          <div id="divSetWorkSection" >

                  <div id="divSetWorkTitle" className="subject_container_title" >
                    <p>Your Teacher/Tutor Has Set Work For You</p>
                  </div>

                  <div id="divSetWorkTitleContainer" className="setwork_dropdown" >
                    <div className="setwork_title_container">
                      <span id="spanSetWorkListContainerHeading">Select a set work from the list</span>
                    </div>
                  </div>

                  <div id="divSetWorkListContainer" className="setwork_groups_list_container" >
                    {/* <asp:Repeater id="rptSetWorkSection" >
                      <ItemTemplate>
                        <div id="divSetWorkActivityList<%# Container.ItemIndex + 1 %>" className="setwork_groups_list_item_row">
                          <div className="setwork_groups_list_current_activity_name">
                            <p id="pSetWork<%# Container.ItemIndex + 1 %>"><%# Eval("WorkTitle") %></p>
                          </div>
                          <div className="setwork_groups_list_current_activity_duedate">
                            <p><span id="spanDue<%# Container.ItemIndex + 1 %>" className='<%# Eval("CssClassForDue") %>'><%# Eval("Due") %></span></p>
                          </div>
                        </div>
                      </ItemTemplate>
                    </asp:Repeater> */}
                  </div>

                  {/* <asp:Repeater id="rptSetWorkList" >
                    <ItemTemplate>
                      <asp:HiddenField id="hidHomeWorkID" Value='<%# Eval("HomeWorkID") %>' />
                      <asp:HiddenField id="hidDICFileName" Value='<%# Eval("DICFileName") %>' />
                      <asp:HiddenField id="hidActivities" Value='<%# Eval("Activities") %>' />

                      <div id="divSetworkCompletedContainer<%# Container.ItemIndex + 1 %>" className="subject_container_text setwork_container">
                        <p id="math_setwork_selected_set_text"></p>
                      </div>

                      <div id="divActivityBtnContainer<%# Container.ItemIndex + 1 %>" className="activity_btn_and_tip_container activity_btn_and_tip_container_set">
                        <a OnClick="linkbtnStartActivity_Click" CommandArgument='<%# Eval("ActivityDetails") %>' className="activity_btn setwork_btn">
                                <p className='activity_icon <%# Eval("CssClassForActivityIcon") %>'></p>
                                <p id="pLessonText" className="lesson-text"><%# Eval("CurrentActivty") %></p>
                                <span className="button_right_text">
                                  <span><%# Eval("CurrentActivtyStatus") %></span>
                                </span>
                        </a>
                      </div>
                      <div id="divSetWorkCompletedContainer<%# Container.ItemIndex + 1 %>" className='completed_box <%# Eval("CssClassForSetWorkCompleted") %>'>
                        <p>This set work is completed</p>
                      </div>

                      <div id="divSetWorkCompletedProgressContainer<%# Container.ItemIndex + 1 %>" className="setwork_progress_container">
                        <div id="divSetWorkCompletedProgress<%# Container.ItemIndex + 1 %>" className="setwork_progress_bar" <%# Eval("ActivityDoneProgress") %>></div>
                      </div>

                      <div id="divSetWorkDropDownBar<%# Container.ItemIndex + 1 %>" className="view_full_plan_bar">
                        <span>View list of activities </span><span className="setwork_text"><%# Eval("ActivityDoneText") %></span>
                      </div>

                      <div id="divSetworkActivityList<%# Container.ItemIndex + 1 %>" className="setwork_list_container">
                        <asp:Repeater id="rptSetWorkActivityList" >

                          <ItemTemplate>
                            <div className="setwork_list_item_row">
                              <div className='setwork_list_current_activity_box <%# Eval("CssClassForCurrentActivity") %>'></div>
                              <div className='setwork_list_current_activity_icon <%# Eval("CssClassActivityIcon") %>'></div>
                              <div className="setwork_list_current_activity_name">
                                <p><%# Eval("Title") %></p>
                              </div>
                              <div className="setwork_list_current_activity_percentage">
                                <p className='<%# Eval("CssClassForGame") %>'><%# Eval("Score") %></p>
                              </div>
                            </div>
                          </ItemTemplate>

                        </asp:Repeater>

                      </div>
                    </ItemTemplate>
                  </asp:Repeater> */}
                  <hr className="subject_inner_hr" />
            </div>

            <div id="panelSetWorkMDContainer"  >
                <div className="subject_container_title">
                  <p>Your Teacher/Tutor Has Set Work For You</p>
                </div>

                <div id="math_setwork_dropdown" className="setwork_dropdown">
                  <div className="setwork_title_container">
                    <span id="math_setwork_title" ></span>							
                  </div>
                </div>
                <div id="math_list_setwork_groups" className="setwork_groups_list_container">
                  <div id="math_setwork_groups_list_item_msr_s_0601a_row_01" className="setwork_groups_list_item_row_md">
                    <div className="setwork_groups_list_current_activity_name">
                      <p><span id="maths_setwork" ></span></p>
                    </div>
                    <div className="setwork_groups_list_current_activity_duedate">
                      <p><span className="">-</span></p>
                    </div>
                  </div>
                </div>
                <div className="subject_container_text">
                  <p id="math_setwork_selected_set_text"></p>
                </div>
                  <a id="linkbtnStartMDSetWork" className="activity_btn setwork_btn" >
                    <span id="math_wlp_icon" className="activity_icon activity_icon_md"></span>
                    <span id="MathsLeson_Text" className="lesson-text" ></span>
                    <span className="button_right_text">
                      <span id="lblStartMDSetWorkText" >GET STARTED</span>
                    </span>
                  </a>
                <div className="subject_inner_hr"></div>
				      </div>

              <div id="linkbtnStartAndSearchActivityFor11And12" className="activity_btn single_btn">
                <span className="activity_icon activity_icon_search"></span>
                <label id="lblbtnStartActivity11And12HeaderText" className="lesson-text">
                  Search for topics or select activities
                </label>
                <span className="button_right_text">
                  <a href="ExploreActivities" style={{ textAlign: "center" }}>GET STARTED</a>
                </span>
              </div>

              <div id="divWLPSection" >
					<div id="divgenerate_wlp_div_english" >
                <div id="divWLPReschedulingTitle" className="subject_container_title" >
                    <p>New Week's Activities</p>
                </div>
						<div id="divWLPReschedulingImage" className="subject_WLP" >
						</div>
                <div id="divWLPStatusText" className="subject_container_text" >
                    <p>Your new week’s activities are being generated</p>
                </div>
					</div>
					<div id="divWLPActivity" >
					<div id="divWLPSubjectContainerTitle" className="subject_container_title" >
						<p id="pSubjectContainerTitle" >This Week's Activities</p>
					</div>
						<div id="divWLPSubjectContainerTextMD" className="subject_container_text" >
						<p id="pSubjectContainerTextMD" >Math Doctor has been set by your teacher/tutor. Please complete Math Doctor, and we will create a new lesson plan for you.</p>
					</div>
					<div id="divWLPSubjectContainerTextParent" className="subject_container_text" >
						<p id="pSubjectContainerTextParent" >Do your best to finish before Sunday night</p>
					</div>

{/*  					<div id="divWLPSubjectContainerText" className="subject_container_text" >
						<p id="pSubjectContainerText" >Do your best to finish before Sunday night</p>
					</div>
          */}

					<div id="divWLPCompletedContainer" className="WLP_completed_box" >
						<p>Weekly lesson plan completed</p>
					</div>

					<div id="divWLPActivityTipContainer" className="activity_btn_and_tip_container_WLP" >
						<div className="tip_container">
							<label id="lblWLPHeading" >Here is your first activity</label>
						</div>
						<a id="linkbtnWLPStartActivity"   className="activity_btn">
							<label id="lblWLPActivityIcon" ></label>
							<label id="lblWLPActivityText" className="lesson-text" ></label>
							<span className="button_right_text">
								<label id="lblStartBtnText" >GET STARTED</label>
							</span>
						</a>
					</div>
					<div id="divlesson_plan_progress_container_WLP" className="lesson_plan_progress_container_WLP" >
						<div id="user_lesson_plan_progress_bar" className="lesson_plan_progress_bar" 
            // style={{ width: "0%" }}
            ></div>
					</div>
					<div id="divWLPDropDownMenuBar" className="view_full_plan_bar_WLP" >
						<span>Weekly Lesson Plan </span>
						<label id="lblWLPText" className="wlp_text" ></label>
					</div>
					<div id="english_lesson_plan_list" className="lesson_plan_list_container">
						{/* <asp:Repeater id="rptWLPActivityList" >
							<ItemTemplate>
								<div className="wlp_list_item_row">
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

						<div className="wlp_list_item_row wlp_list_added_activities" id="divExtraWLPActivity" >
							<a id="spnExtraActivites" >Extra activities (max 5)</a><span id="wlpText"></span>
							<span className="list_smileicon" id="spnLogo" ></span>
						</div>
						{/* <asp:Repeater id="rptExtraWLPActivity" >
							<ItemTemplate>
								<div className="wlp_list_item_row">
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
					<div className="add_activity_container" id="divDoAgainActivityBtn" >
						<div id="wlp_DoAgain_btn" className="add_activity_btn">
							<a id="lnkDoAgain" href="/DoAgainPage" >Do again (optional)</a>
              {/* <div id="lnkDoMore" style={{ textDecoration: 'underline' }}>Do again (optional)</div> */}
						</div>
						<div id="wlp_add_activity_btn" className="add_activity_btn" >
							<a id="lnkDoMore" href="/DoMore" >Do more (optional)</a>
              {/* <div id="lnkDoMore" style={{ textDecoration: 'underline' }}>Do again (optional)</div> */}
						</div>
					</div>
					</div>					
					<hr className="subject_inner_hr" />					
				</div>

        </div>

        {trophyVisible && (
          <div id="trophy_club_rank_up_overlay">
            <div className="trophy_club_rank_up_container_title">
              <p>
                CONGRATULATIONS. WELCOME TO CLUB{" "}
                <span className="bonus_points_text">{trophy}</span>!
              </p>
            </div>
            <div id="WLP_completed_english_reward_div1">
              <div id="trophy_rays1"></div>
              <div id="trophy_club_rank_up_trophy">
              </div>
              <div id="trophy_club_rank_up_shadow"></div>
              <div id="dot_container1">
              </div>
              <div className="subject_container_text">
                <p>
                  You will now receive <br />
                  <span className="bonus_points_text">{rewardPoints}</span> bonus
                  points for each trophy you earn.
                </p>
              </div>
              <div className="trophy_club_rank_up_button_box">
                <button onClick={handleTrophyOkClick}>OK</button>
              </div>
            </div>
          </div>
        )}

        <div id="WLP_completed_english_reward_overlay">
          <div className="subject_container_title">
            <p>WELL DONE ON COMPLETING YOUR WEEKLY LESSON PLAN</p>
          </div>
          <div className="subject_container_text">
            <span>{rewardPoints}</span>
          </div>
          <div id="WLP_completed_english_reward_div">
            <div id="trophy_rays"></div>
            <div id="wlp_reward_trophy" className="wlp_reward_trophy_trophy">
            </div>
            <div id="trophy_shadow"></div>
            <div id="trophy_coin_container">
            </div>
            <div id="dot_container">
            </div>
          </div>
        </div>

        {wtaVisible && (
          <div id="divWTASection">
            <div id="WTATitle" className="subject_container_title">
              <p>Your Tutor Has Set Writing Task Activity For You</p>
            </div>
            <button onClick={handleWtaClick} className="activity_btn setwork_btn">
              <span className="lesson-text">GET STARTED</span>
            </button>
            <hr className="subject_inner_hr" />
          </div>
        )}

        {setWorkVisible && (
          <div id="divSetWorkSection">
            <div id="divSetWorkTitle" className="subject_container_title">
              <p>Your Teacher/Tutor Has Set Work For You</p>
            </div>
            <div id="divSetWorkListContainer">
              {setWork.map((workItem, index) => (
                <div
                  key={index}
                  className="setwork_groups_list_item_row"
                >
                  <div className="setwork_groups_list_current_activity_name">
                    <p>{workItem.WorkTitle}</p>
                  </div>
                  <div className="setwork_groups_list_current_activity_duedate">
                    <p>{workItem.Due}</p>
                  </div>
                  <div className="activity_btn_and_tip_container">
                    <button
                      onClick={() => handleSetWorkClick(workItem.ActivityDetails)}
                      className="activity_btn setwork_btn"
                    >
                      <span className="activity_icon"></span>
                      <p className="lesson-text">{workItem.CurrentActivty}</p>
                      <span className="button_right_text">
                        <span>{workItem.CurrentActivtyStatus}</span>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="subject_inner_hr" />
          </div>
        )}



      </div>
    </form>
  );
};

export default StudyRoom;

