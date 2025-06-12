import React, { useState, useEffect } from 'react';
import './Style/common.css';
import "./Style/header.css";
import './Style/StudentMathsDoctorReport.css';
import "./Style/trophy_club.css"
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';

const StudentMathsDoctorReport: React.FC = () => {
    const [selectedReport, setSelectedReport] = useState<string>('');
    const [passLevelVisible, 
      // setPassLevelVisible
    ] = useState<boolean>(false);
    const [scoreAnalysisVisible, 
      // setScoreAnalysisVisible
    ] = useState<boolean>(false);
    // const [weeklyProgress, setWeeklyProgress] = useState(50);
    const [
      // myPoints
      , setMyPoints] = useState(0);
    const [
      // overallWeeklyProgress
      , setOverallWeeklyProgress] = useState(0);
    const [
      // weekCount
      , setWeekCount] = useState(0);
    const [
      // trophyData
      , setTrophyData] = useState<string[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [purchases, 
      // setPurchases
    ] = useState<any[]>([6405]);
    const [imageSrc, setImageSrc] = useState('');


    useEffect(() => {
      const UserName = sessionStorage.getItem('FName');
      // const UserLogin = sessionStorage.getItem('login');
      const UserAvatar = sessionStorage.getItem('CurrentAvatar');

      if (UserName !== null) {
        setUserName(UserName);
      }
      try {
        if (UserAvatar) {
          // const img = require(`${UserAvatar}`);
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
    // const handlePurchase = (storeID: string) => {
    //   console.log(`Purchase confirmed for StoreID: ${storeID}`);
    // };
  
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

    return (
      <form>
      <a href="/StudentMathsDoctorReport" className="back-to-top">
        Back to Top
      </a>
      <a href="/StudentMathsDoctorReport" className="back-to-bottom" id="back_to_bottom_link">
        Back to Top
      </a>

      <div id="main_top_container">
        <div id="header">
          <div className="section_div">
            <nav id="mobile_menu">
              <div id="mobile_box" className="mobile_dropdown">
                <div className="mobile_nav_item">
                  <a href="/StudyRoom" id="hlinkStudyRoomMobile">HOME</a>
                </div>
                <div className="mobile_nav_item">
                  <a href="/MSRReports" id="hlinkReportsMobile">REPORTS</a>
                </div>
                <div className="mobile_nav_item">
                  <a href="/Profile" id="hlnkbtnProfileMobile">PROFILE</a>
                </div>
                <div
                  id="divChangeUserSectionMobile"
                  className="mobile_nav_item mobile_nav_item_hidden"
                >
                  <a href="/SelectUser" id="linkbtnChangeUserMobile">CHANGE USER</a>
                </div>
                <div className="mobile_nav_item mobile_nav_item_hidden">
                  <a href="/LoggedOut" id="linkbtnLogOutMobile">LOG OUT</a>
                </div>
              </div>
            </nav>

            <div id="logout_btn">
              <a href="/LoggedOut" id="linkbtnLogOut">Log Out</a>
            </div>
            <div id="divChangeUserSection">
              <a href="/SelectUser" id="linkbtnChangeUser">Change User</a>
            </div>
            <label id="lblFName" className="header_text">{userName}</label>
            <div id="scrolled_nav_sub">
              <div id="divLogo" className="scrolled_logo"></div>
              <div id="sn4_sub" className="scrolled_nav_item subbed">
                <a href="/StudyRoom" id="hlinkStudyRoom">HOME</a>
              </div>
              <div id="sn3_sub" className="scrolled_nav_item subbed">
                <a href="/MSRReports" id="hlinkReports">REPORTS</a>
              </div>
              <div id="sn2_sub" className="scrolled_nav_item subbed">
                <a href="/Profile" id="hlnkbtnProfile">PROFILE</a>
              </div>
            </div>
          </div>
        </div>

        <div id="user_banner" className='user_bannerT'
        // style={{marginTop:'80px'}}
        >
            <div className="section_div">
              <div id="achievements_btn">
                <a href="/StudentMathsDoctorReport">ACHIEVEMENTS</a>
              </div>
              <div id="user_strip_right_container">
              <div id="divAvatarContainer" className="avatar_container"><img id="imgAvatar" src={imageSrc} alt="Avatar" /></div>
                <div id="trophy_club_container" >
                  <div id="trophy_club_section">
                    <p className="trophy_club_section_title">CLUB</p>
                    <div id="trophy_club_current" onClick={handleTrophyClick} 
                    
                    
                    
                    style={{ backgroundImage: `url(${trophy_club_0})`}}
                    
                    
                    
                    ></div>
                    <div id="trophy_club_legend" className='trophy_club_legendT'
                    // style={{ display:'none'}}
                    >
                      <p className="trophy_club_legend_title" >TROPHY CLUB</p>
                      <div id="trophy_club_progress_container" >
                        <div id="trophy_club_progress_trophy_current" className="trophy_club_progress_trophy"></div>
                        <div id="trophy_club_progress_bar_div">
                          <div id="trophy_club_progress_bar_div_progress" data-progress="0"></div>
                        </div>
                        <div id="trophy_club_progress_trophy_next" className="trophy_club_progress_trophy"></div>
                      </div>
                      <p className="trophy_club_legend_text">
                        <span id="next_club"></span>
                      </p>
                      <div className="trophy_club_legend_spacing"></div>
                      <table id="trophy_club_legend_spacing_table">
                        <thead>
                          <tr>
                            <th className="tfr">CLUB</th>
                            <th className="tsr">TROPHY<br />TOTAL</th>
                            <th>BONUS<br />POINTS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {purchases.map((purchase, index) => (
                            <tr key={index}>
                              <td>{purchase.TrophyRange}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div id="my_points_container">
                  <div id="my_points_text">MY POINTS</div>
                  <label id="lblMyPoints" className="my_points_amount">{purchases}</label>
                </div>
                <div id="ump_btn">
                  <a href="/MyIncentives"  id="linkbtnUseMyPoints" >USE MY POINTS</a>
                </div>
              </div>

              <div id="user_strip_left_container">
                <div id="user_strip_weekly_progress_container">
                  <div id="user_strip_weekly_progress_text">
                    OVERALL WEEKLY PROGRESS: <label id="lblOverAllWeeklyProgress"></label>%
                  </div>
                  <div id="user_strip_weekly_progress_bar">
                    <div id="user_strip_weekly_progress_bar_progress" className='user_strip_weekly_progress_barT'
                    // style={{ width: '0px' }}
                    ></div>
                  </div>
                </div>
                <div id="user_strip_weekly_achievements_container">
                  <div id="user_strip_weekly_achievements_text">
                    WEEKLY ACHIEVEMENTS:
                  </div>
                  <div id="divEnglishTrophyContainer" className="user_strip_weekly_achievements_item user_strip_weekly_achievements_item_first">
                    <div id="divEnglishTrophy" className="trophy"></div>
                    <div className="trophy_text">English Plan</div>
                  </div>

                  <div id="divMathsTrophyContainer" className="user_strip_weekly_achievements_item">
                    <div id="divMathsTrophy" className="trophy"></div>
                    <div className="trophy_text">
                      <span id="spnMathOrMathsPlan"></span>
                    </div>
                  </div>

                  <div id="divScienceTrophyContainer" className="user_strip_weekly_achievements_item">
                    <div className="trophy"></div>
                    <div className="trophy_text">Science Plan</div>
                  </div>

                  <div className="user_strip_weekly_achievements_item">
                    <div className="trophy_text">
                      <span className="trophy_total_slash">/&nbsp;&nbsp;</span>TOTAL:&nbsp;&nbsp;
                    </div>
                    <div className="trophy trophy_gold"></div>
                    <div className="trophy_text">x&nbsp;<span id="spnTrophyText">{purchases.length}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="divSubjectBanner" className="subject_banner" >
					<div className="subject_arrow_left_container" id="divsubject_arrow_left"  >
                    <div className="subject_arrow_text subject_arrow_text_left">
                        <label id="lblArrowLeftText" ></label>
                    </div>
                    <div id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left" ></div>
                </div>
					      <div className="subject_arrow_right_container" id="divsubject_arrow_right"  >
                    <div className="subject_arrow_text subject_arrow_text_right">
                        <label id="lblArrowRightText" ></label>
                    </div>
                    <div id="linkbtnArrowRight" className="subject_arrow subject_arrow_right" ></div>
                </div>
            </div>
      </div>

          <div className="section-container" id="divStudentMDSection">
            <div className="content-container">
                <div className="content-top responsive-divider">
                    <div className="report-heading-container">
                        <div id='linkbtnReportLeft' className="report-arrow-left"></div>
                        <div className="report-heading">
                            <span id="spnMathOrMathsReportHeader"></span>
                        </div>
                        <div id='linkbtnReportRight' className="report-arrow-right"></div>
                    </div>
                    <div className="report-displayed-select">
                        <div className="report-displayed-heading">Report Displayed:</div>
                        <select 
                            id='ddlReports'
                            value={selectedReport} 
                            onChange={(e) => setSelectedReport(e.target.value)} 
                            className="report-displayed" 
                            name="refer"
                            // style={{fontSize: "14px", fontWeight: "normal"}}
                        >
                            <option value="report1">Latest Report</option>
                            <option value="report2">Old Report</option>
                        </select>
                    </div>

                    {passLevelVisible && (
                        <div id="divPassLevel" className="pass-level-container">
                            <div className="pass-level-heading">
                                <div className="help-icon help-click" id="set-pass-click">
                                    <div className="tooltip">
                                        <div className="expand-close"></div>
                                        Changes the set pass level to adjust the following charts:
                                        <ul>
                                            <li>Grade Level Achieved</li>
                                            <li>Area of Study Achieved</li>
                                        </ul>
                                        <strong>Note:</strong> Only the school administrator has the rights to change this level for the entire school.
                                    </div>
                                </div>
                                Set Pass Level:
                            </div>
                            <input type="text" id="txtMDPassLevel" className="pass-level-text" disabled />
                        </div>
                    )}
                </div>

                <div className="left">
                    <div className="widget-container" id="divBrickwallHeader">
                        <div className="widget-wrapper">
                            <div className="heading">
                                <div className="help-icon help-click" id="brick-wall-click">
                                    <div className="tooltip">
                                        <div className="expand-close"></div>
                                        <p>This report shows the student's understanding of their current Grade level, up to 3 grades prior (if applicable), and the 2 grades above.</p>
                                    </div>
                                </div>
                                Results by Grade
                            </div>
                            <div id="wall_container">
                                <div className="grades">
                                    <div className="brick-row">
                                        <div id="whitetext2"></div>
                                        <div className="grade-box">
                                            <p>Grade <span className="grade2">Grade 1</span> (<span className="percent2">85%</span>)</p>
                                        </div>
                                        <div className="grade-box2">
                                            <p>G<span className="grade2">Grade 1</span> (<span className="percent2">85%</span>)</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="divBrickwall"></div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-container">
                        <div className="widget-wrapper">
                            <div className="heading">
                                <div className="help-icon help-click" id="grade-achieved-click">
                                    <div className="tooltip">
                                        <div className="expand-close"></div>
                                        <p>The blue boxes show the grade level achieved for each of the areas of study assessed.</p>
                                    </div>
                                </div>
                                Grade Achievement by Area of Study and Overall
                            </div>
                            <div className="graph-container">
                                <div className="y-achieve-container">
                                    <div className="y-rows-rotate">
                                        <div className="y-label-blocks-rotate">
                                            Achievement<br />Grades
                                        </div>
                                    </div>
                                </div>
                                <div className="graph">
                                    <div className="graph-rows">
                                        <div className="graph-blocks r6">
                                            <div  className="graph-block-text" id="divAchievedArea_1">-</div>
                                        </div>
                                        <div className="graph-blocks r6">
                                            <div  className="graph-block-text" id="divAchievedArea_2">-</div>
                                        </div>
                                        <div className="graph-blocks r6">
                                            <div  className="graph-block-text" id="divAchievedArea_3">-</div>
                                        </div>
                                        <div className="graph-blocks r6">
                                            <div  className="graph-block-text" id="divAchievedArea_4">-</div>
                                        </div>
                                        <div className="graph-blocks r6">
                                            <div  className="graph-block-text" id="divAchievedArea_5">-</div>
                                        </div>
                                        <div className="graph-blocks overall-block">
                                            <div  className="graph-block-text" id="divAchievedArea_6">-</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="x-label-rows">
                                    <div className="x-label-blocks x-label-first">
                                        <div className="x-label-text">Space</div>
                                    </div>
                                    <div className="x-label-blocks">
                                        <div className="x-label-text">Number</div>
                                    </div>
                                    <div className="x-label-blocks">
                                        <div className="x-label-text">Algebra</div>
                                    </div>
                                    <div className="x-label-blocks">
                                        <div className="x-label-text">Measurement</div>
                                    </div>
                                    <div className="x-label-blocks">
                                        <div className="x-label-text">Probability & Statistics</div>
                                    </div>
                                    <div className="x-label-blocks x-label-last">
                                        <div className="x-label-text">Overall</div>
                                    </div>
                                </div>
                                <div className="x-label-rows">
                                    <div className="x-label-blocks studyarea-container">
                                        <div className="x-label-text">Areas of Study</div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    {scoreAnalysisVisible && (
                        <div id="divScoreAnalysis" className="widget-container">
                            <div className="widget-wrapper">
                                <div className="heading">
                                    <div className="help-icon help-click" id="score-analysis-click">
                                        <div className="tooltip">
                                            <div className="expand-close"></div>
                                            <p>We have developed our own scoring system to help differentiate between student's results and improve the way we monitor progress.</p>
                                            <p>This report shows the score obtained by the student and how they compare to other students in your School in the same Grade.</p>
                                            <p>If the student has previously completed Maths Doctor it will also display how much they improved (or not) since the previous assessment.</p>
                                        </div>
                                    </div>
                                    Score Analysis <span className="not-available" id="spanScoreAnalysisHeading">(Not Available for Old Reports)</span>
                                </div>
                                <div className="analysis-legend" id="divAnalisysLegend">
                                    <div className="score-container">
                                        <div className="latest-score-icon legend-icon"></div>
                                        <div className="score-display-style">
                                          <div  className="score-text-bold">(<span  className="" id="spanDateLatest"></span>) Score:</div>
                                          <span  id="spanLatestScore"></span>
                                        </div>
                                    </div>
                                    <div className="score-container">
                                        <div className="previous-score-icon legend-icon"></div>
                                        <div className="score-display-style">
                                            <div className="score-text-bold">
                                                (<span  className="" id="spanDatePrevious"></span>) Previous Score:
                                            </div>
                                            <span  id="spanPreviousScore"></span>
                                        </div>
                                    </div>
                                    <div className="score-container">
                                        <div className="score-display-style improvement-container">|</div>
                                        <div className="score-display-style">
                                            <div className="score-display-style score-text-bold">Improvement:</div>
                                            <div  className="score-display-style" id="divImprovementIndicator"></div>
                                            <div  className="score-display-style" id="divImprovementScore"></div>
                                        </div>
                                    </div>
                                    <div className="score-container">
                                        <div className="score-display-style improvement-container total-students-analysis">|</div>
                                        <div className="score-display-style">
                                            <div className="score-display-style score-text-bold total-students-analysis">Total Students:</div>
                                            <div  className="score-display-style" id="divTotalStudents"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="analysis-graph-container" id="divAnalisysGraph" >
                                      <div className="analysis-graph">
                                          <div className="analysis-graph-bg">
                                              <div  className="icon-wrapper" id="divScoreAnalysisIndicators">
                                                  <div  className="latest-score-icon graph-icon" id="divLatestScorePosition"></div>
                                                  <div  className="previous-score-icon graph-icon" id="divPreviousScorePosition"></div>
                                                  <div  id="divDottedLineGradeAverage">
                                                      <div className="school-dotted-line"></div>
                                                      <div className="dotted-text">Grade Avg</div>
                                                  </div>
                                                  <div  id="divDottedLineGradeTop">
                                                      <div className="dotted-text-top">Grade Top</div>
                                                      <div className="school-dotted-line"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="analysis-label-rows">
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">0</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">100</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">200</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">300</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">400</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">500</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">600</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">700</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">800</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">900</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">1000</div>
                                          </div>
                                          <div className="analysis-label-blocks">
                                              <div className="analysis-label-text">1100</div>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="right">
                    <div className="widget-container">
                        <div className="widget-wrapper">
                            <div className="heading">
                                <div className="help-icon help-click" id="knowledge-gaps-click">
                                    <div className="tooltip">
                                        <div className="expand-close"></div>
                                        Lists all the topics identifed for revison by Grade Level.
                                    </div>
                                </div>
                                Knowledge Gaps Identified
                            </div>
                            <div className="knowledge-container"  id="divKnowledgeGapContainer">
                                <div className="gap-row-1">

                                    {/* <asp:Repeater id="rptKnowledgeGap" >
                                        <ItemTemplate>
                                            <div className="gaps-container" id="gap-<%# Container.ItemIndex + 1 %>-container">
                                                <div className="gaps-purple">
                                                    <p className="gap-1-grade"><%# Eval("GapsHeading") %></p>
                                                </div>
                                                <span className="gaps-text"><%# Eval("KnowledgeGaps") %></span>
                                            </div>
                                        </ItemTemplate>
                                    </asp:Repeater> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </form>
    );
};

export default StudentMathsDoctorReport;
