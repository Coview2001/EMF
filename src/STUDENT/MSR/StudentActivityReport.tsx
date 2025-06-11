import React, { useState, useEffect } from 'react';
import './Style/common.css';
import "./Style/header.css";
import './Style/StudentActivityReport.css';
import './Style/trophy_club.css';
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import { now } from 'jquery';

interface Student {
  id: number;
  name: string;
  completed: number;
  pending: number;
}

const students: Student[] = [
  { id: 1, name: 'Varun Sharma', completed: 5, pending: 3 },
  { id: 2, name: 'Arun Kumar', completed: 7, pending: 1 },
  { id: 3, name: 'Manish Sharma', completed: 10, pending: 0 },
];
interface StudentActivity {
  DICFileName: string;
  ChildShortDesc: string;
  ActivityType: string;
  LastScore: number;
  LastDoneOn: string;
  WeekendDate: string;
  TotalQnAnsTime: number;
  NoInCorAns: number;
}
const StudentActivityReport: React.FC = () => {
    const nowDate = new Date();
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [weeklyProgress, setWeeklyProgress] = useState(50);
  const [myPoints, setMyPoints] = useState(0);
  const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const [trophyData, setTrophyData] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [purchases, setPurchases] = useState<any[]>([6405]);
  const [selectedOption, setSelectedOption] = useState<string>("Weekly");
  const [fromDate, setFromDate] = useState<string>(nowDate.toISOString().split('T')[0]);
  const [toDate, setToDate] = useState<string>(nowDate.toISOString().split('T')[0]);
  const [imageSrc, setImageSrc] = useState('');
  const [data, setData] = useState<StudentActivity[]>([]);

  


    useEffect(() => {
    const fetchReport = async () => {
        const response = await fetch("http://localhost:5000/StudentActivityReport", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                SchoolCode: "DLR_KE_AU",
                FamilyCode: "Login00001",
                Login: "Child1",
                Subject: "Mathematics",
                WeekendDate: "2023-11-19 00:00:00.000",
                WeekNumber: "2"
            }),
        }); 

    const result = await response.json();
        setData(result);
        // console.log("Result:",result);
    };
    fetchReport();
}, []);


  useEffect(() => {
    const UserName = sessionStorage.getItem('FName');
    const UserLogin = sessionStorage.getItem('login');
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

  useEffect(() => {
    const handleResize = () => {
      document.body.style.height = `${window.innerHeight - 40}px`;
      document.body.style.width = `${window.innerWidth}px`;
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.backgroundSize = 'cover';
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);
useEffect(() => {

// document.body.style.backgroundImage = `url(${})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundColor = '#ffffff';
document.body.style.minWidth = '100%';
document.body.style.minHeight = '100%';

const btLoginElement = document.getElementById('bt_login');
if (btLoginElement) {
  // btLoginElement.style.backgroundImage = `url(${})`;
}
const handleResize = () => {
  document.body.style.height = `${window.innerHeight - 40}px`;
  document.body.style.width = `${window.innerWidth}px`;
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.backgroundSize = 'cover';
};

handleResize(); 

window.addEventListener('resize', handleResize);

return () => {
  window.removeEventListener('resize', handleResize); 
};
}, []);

  const handlePurchase = (storeID: string) => {
    // console.log(`Purchase confirmed for StoreID: ${storeID}`);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

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

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleDownloadReport = (student: Student) => {
    alert(`Downloading report for ${student.name}`);
  };

  return (
    <form>

<a href="#" className="back-to-top">
        Back to Top
      </a>
      <a href="#" className="back-to-bottom" id="back_to_bottom_link">
        Back to Top
      </a>

      <div id="main_top_container">
      <div id="header">
                <div className="section_div">
                    <div id="mobile_menu">
                        <div id="mobile_box" className="mobile_dropdown">
                            <div className="mobile_nav_item">
										 <a id="hlinkStudyRoomMobile" href='/StudyRoom' >HOME</a>
                            </div>
                            <div className="mobile_nav_item"><a id="hlinkReportsMobile" href='/MSRReports' >REPORTS</a></div>
                            <div className="mobile_nav_item"><a id="hlinkProfileMobile" href='/Profile' >PROFILE</a></div>
                            <div id="divChangeUserSectionMobile" className="mobile_nav_item mobile_nav_item_hidden" >
                                <a id="linkbtnChangeUserMobile" href='/SelectUser' >CHANGE USER</a>
                            </div>
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
                    <label id="lblFName" className="header_text" >{userName}</label>
                    <div id="scrolled_nav_sub">

							  <div id="divLogo" className="scrolled_logo" ></div>
                        <div id="sn4_sub" className="scrolled_nav_item subbed">
									<a id="hlinkStudyRoom" href='/StudyRoom' >HOME</a>
                        </div>
                        <div id="sn3_sub" className="scrolled_nav_item subbed"><a id="hlinkReports" href='/MSRReports' >REPORTS</a></div>
                        <div id="sn2_sub" className="scrolled_nav_item subbed"><a id="hlinkProfile" href='/Profile' >PROFILE</a></div>
                    </div>
                </div>
            </div>

        <div id="user_banner">
            <div className="section_div">
              <div id="achievements_btn">
                <a href="#">ACHIEVEMENTS</a>
              </div>
              <div id="user_strip_right_container">
              <div id="divAvatarContainer" className="avatar_container">
                {/* <img id="imgAvatar" src={imageSrc} alt="Avatar" /> */}
                <img
                  id="imgAvatar"
                  src={imageSrc || "fallback-avatar.png"} // path to a fallback image
                  alt="Avatar"
                />
                </div>
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
                    <div id="user_strip_weekly_progress_bar_progress" className='user_strip_weekly_progress_bar_progressT'
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
              <a id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left" ></a>
            </div>
            <div className="subject_arrow_right_container" id="divsubject_arrow_right"  >
              <div className="subject_arrow_text subject_arrow_text_right">
                <label id="lblArrowRightText" ></label>
              </div>
              <a id="linkbtnArrowRight" className="subject_arrow subject_arrow_right" ></a>
            </div>
          </div>
      </div>

      <div className="section-container" id="student-reports-collapse">
            <div className="content-container">
                <div className="content-top">
                    <div className="report-heading-container">
                        <a id="linkbtnReportLeft" className="report-arrow-left" ></a>
                        <label id="lblReportText" className="report-heading" >Student Reports</label>
                        <a id="linkbtnReportRight" className="report-arrow-right" ></a>
                    </div>
                    <div className="report-displayed-select">
                        <div className="report-displayed-heading"
                        >Report Displayed:</div>
                        {/* <br /> */}
                        <div className="radio-mobile-container">
                          <div className="radio-container">
                            <input
                              type="radio"
                              id="rdoWeekly"
                              name="toggler"
                              value="Weekly"
                              checked={selectedOption === "Weekly"}
                              onChange={handleRadioChange}
                            />
                            <label htmlFor="rdoWeekly">Weekly</label>
                          </div>
                          <div className="radio-container">
                            <input
                              type="radio"
                              id="rdoViewFrom"
                              name="toggler"
                              value="Between"
                              checked={selectedOption === "Between"}
                              onChange={handleRadioChange}
                            />
                            <label htmlFor="rdoViewFrom">View From:</label>
                          </div>
                          {selectedOption === "Between" && (
                            <div>
                              <input
                                type="date"
                                id="txtCalFromDate"
                                placeholder="dd/mm/yyyy"
                                value={fromDate}
                                onChange={(e) => setFromDate(e.target.value)}
                              />
                              <span>To:</span>
                              <input
                                type="date"
                                id="txtCalToDate"
                                placeholder="dd/mm/yyyy"
                                value={toDate}
                                onChange={(e) => setToDate(e.target.value)}
                              />
                            </div>
                          )}
                        </div>
                    </div>
                    <div id="divWeekEndingText" className="week-ending-container" >
                        <a className="arrow-left" id="linkbtnPreviousWeek" ></a>
                        <div className="wk-ending-text" id="divWeekEndingDate" >Week ending { toDate }</div>
                        {/* <a className="arrow-right" id="linkbtnNextWeek" ></a> */}
                    </div>
                </div>
                <div id="divWLPSection" className="student-report-left" >

                    <div id="divWLPViewWeekly" className="widget-container toggle-wlp" >
                        <div className="widget-wrapper">
                            <div className="heading">
                                Weekly Lesson Plan Summary
                            </div>
                            <div className="wlp-report-weekly">
                                <div className="circles-container">
                                    <div className="progress-circles" id="divWeeklyWLPAverageScoreCanvas">
                                        <div className="animated-circles-text">
                                            <div className="blue-circle-large-text" id="divWLPSummaryAverageScore" ></div>
                                            <br />
                                            <div className="larger-small-text">Average Score</div>
                                        </div>
                                    </div>
                                    <div className="progress-circles purple-circle">
                                        <div className="filled-circles-text">
                                            <div id="divWLPSummaryTotalActivities" className="purple-circle-large-text" ></div>
                                            <br />
                                            <div className="circle-small-text">Total Activities</div>
                                        </div>
                                    </div>
                                    <div className="progress-circles blue-circle">
                                        <div className="filled-circles-text">
                                            <div id="divWLPSummaryTotalTimeTaken" className="blue-circle-large-text" ></div>
                                            <br />
                                            <div className="circle-small-text">Total Time Taken</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="expanded-container">
                                    <div className="5-weeks-container">
                                        <div className="prev-5-heading">Previous 5 Weeks History</div>
                                        <table className="prev-5-table">
                                            <thead>
                                                <tr>
                                                    <th id="thWeekZero" ></th>
                                                    <th id="thWeekMinusOne" ></th>
                                                    <th id="thWeekMinusTwo" ></th>
                                                    <th id="thWeekMinusThree" ></th>
                                                    <th id="thWeekMinusFour" ></th>
                                                    <th className="history-avg">Avg Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div id="divWeekZero" className="g-circle" ></div>
                                                    </td>
                                                    <td>
                                                        <div id="divWeekMinusOne" className="o-circle" ></div>
                                                    </td>
                                                    <td>
                                                        <div id="divWeekMinusTwo" className="r-circle" ></div>
                                                    </td>
                                                    <td>
                                                        <div id="divWeekMinusThree" className="g-circle" ></div>
                                                    </td>
                                                    <td>
                                                        <div id="divWeekMinusFour" className="g-circle" ></div>
                                                    </td>
                                                    <td id="divAverageScore" className="history-avg" ></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="show-hide-btn" id="wlp-weekly-btn"><a className="btn blue">Show Details<span className="btn-expand">+</span></a></div>
                                <div className="report-table-container" id="wlp-weekly-expanded">
                                    <div className="wlp-table-container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Activity<div className="sort sort-down"></div>
                                                    </th>
                                                    <th>Grade Level<div className="sort sort-down"></div>
                                                    </th>
                                                    <th>Score Achieved<div className="sort sort-down"></div>
                                                    </th>
                                                    <th>Time Taken (mins)<div className="sort sort-down"></div>
                                                    </th>
                                                </tr>
                                            </thead>


                                            <tbody>
                                                {/* <asp:Repeater id="rptWLPWeeklyExpandedTable" ViewStateMode="Disabled" >
                                                    <ItemTemplate>

                                                        <tr>
                                                            <td>
                                                                <div className='<%# Eval("ActivityIcon") %>'></div>
                                                                <span id="wlp-lsn-1-name"><%# Eval("ActivityName") %></span>
                                                            </td>
                                                            <td className="table-column-centered"><%# Eval("GradeLevel") %></td>
                                                            <td className="table-column-centered"><%# Eval("ScoreAchieved")%></td>
                                                            <td className="table-column-centered"><%# Eval("TimeTaken")%></td>
                                                        </tr>

                                                    </ItemTemplate>
                                                </asp:Repeater> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="divWLPViewFrom" className="widget-container toggle-wlp" >
                        <div className="widget-wrapper">
                            <div className="heading">
                                Weekly Lesson Plan Summary | <span id="spanViewFromWLPSummaryFromDate" ></span>- <span id="spanViewFromWLPSummaryToDate" ></span>
                            </div>
                            <div className="wlp-report-between">
                                <div className="expanded-container">
                                    <div className="circles-container">
                                        <div id="divViewFromWLPSummaryWLPCompletedCanvas" className="progress-circles">
                                            <div className="animated-circles-text">
                                                <div id="divViewFromWLPSummaryWLPCompleted" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">
                                                    Weekly Lesson Plans
                                                    <br />
                                                    Completed
                                                </div>
                                            </div>
                                        </div>
                                        <div id="divViewFromWLPSummaryAverageScoreCanvas" className="progress-circles">
                                            <div className="animated-circles-text">
                                                <div id="divViewFromWLPSummaryAverageScore" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="larger-small-text">Average Score</div>
                                            </div>
                                        </div>
                                        <div className="progress-circles purple-circle">
                                            <div className="filled-circles-text">
                                                <div id="divViewFromWLPSummaryTotalActivities" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">Total Activities</div>
                                            </div>
                                        </div>
                                        <div className="progress-circles blue-circle">
                                            <div className="filled-circles-text">
                                                <div id="divViewFromWLPSummaryTotalTimeTaken" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">Total Time Taken</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="show-hide-btn" id="wlp-between-btn"><a className="btn blue">Show Details<span className="btn-expand">+</span></a></div>

                                <div className="report-table-container" id="wlp-between-expanded">
                                    <div className="heading wlp-details-heading">
                                        Weekly Lesson Plan Details | <span id="spanViewFromWLPExpandedFromDate" ></span>- <span id="spanViewFromWLPExpandedToDate" ></span>
                                    </div>
                                    <div className="wlp-table-container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="header-double-line">WLP
                                                        <br />
                                                        Completed<div className="sort sort-down"></div>
                                                    </th>
                                                    <th className="header-double-line table-column-centered">Week Ending<div className="sort sort-down"></div>
                                                    </th>
                                                    <th className="header-double-line table-column-centered">Average Score
                                                        <div className="sort sort-down" id='sortT'
                                                            // style={{ marginLeft: "20px" }}
                                                        ></div>
                                                        </th>
                                                        <th className="header-double-line table-column-centered">Activities Completed<div className="sort sort-down"></div>
                                                        </th>
                                                    <th className="header-double-line table-column-centered">Time Taken (h:m:s)
                                                        <div className="sort sort-down" id='sort2T'
                                                    // style={{ marginLeft: "30px" }} 
                                                    ></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <asp:Repeater id="rptWLPViewFromExpandedTable" >
                                                    <ItemTemplate>
                                                        <tr>
                                                            <td className="<%# Eval("WLPCompleted") %>"></td>
                                                            <td className="table-column-centered"><span id="week-ending-1"><%# Eval("WeekendDate")%></span></td>
                                                            <td className="table-column-centered"><%# Eval("AverageScore")%></td>
                                                            <td className="table-column-centered"><%# Eval("ActivitiesCompleted") %></td>
                                                            <td className="last-col table-column-centered"><%# Eval("TimeTaken")%></td>

                                                        </tr>
                                                    </ItemTemplate>
                                                </asp:Repeater> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wlp-between-view-more widget-container">
                        <div>
                            <div className="show-hide-btn wlp-back"><a className="btn blue" id="between-wlp1-back">Back</a></div>
                            <div className="heading wlp-details-heading">
                                Weekly Lesson Plan Details | Week Ending: { (nowDate).toString().split('1')[0] }
                            </div>
                        </div>
                        <div className="report-table-container no-border-top" id="wlp-weekly-expanded">
                            <div className="wlp-table-container">
                                <div className="viewmore-progress-container">
                                    <div className="wlp-progress">
                                        <div className="progressbar">
                                            <div className="dot-wrapper">
                                                <div className="avg-score-dot" id="viewmore-dot"></div>
                                            </div>
                                            <div className="weekly-progress" id="viewmore-bar"></div>
                                        </div>
                                    </div>
                                    <div className="wlp-viewmore-text">
                                        <div className="wlp-progress-icon wlp-icon"></div>
                                        <span className="wlp-progress-progress">Progress: 50%</span>
                                        <div className="wlp-score-icon wlp-icon"></div>
                                        <span className="wlp-progress-score wlp-icon">Avg Score: 85%</span>
                                    </div>
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Activity<div className="sort sort-down"></div>
                                            </th>
                                            <th>Grade Level<div className="sort sort-down"></div>
                                            </th>
                                            <th>Score Achieved<div className="sort sort-down"></div>
                                            </th>
                                            <th>Time Taken (mins)<div className="sort sort-down"></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="activity-lesson"></div>
                                                <span>Expected Value and Variance of Discrete Random Variable</span></td>
                                            <td className="table-column-centered">5</td>
                                            <td className="table-column-centered">50%</td>
                                            <td className="last-col table-column-centered">11:30</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-game"></div>
                                                <span>+1 Sums</span></td>
                                            <td className="table-column-centered">4</td>
                                            <td className="table-column-centered">67%</td>
                                            <td className="last-col table-column-centered">9:03</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="activity-test"></div>
                                                Expected Value and Variance of Discrete Random Variable</td>
                                            <td className="table-column-centered">5</td>
                                            <td className="table-column-centered">71%</td>
                                            <td className="last-col table-column-centered">5:05</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="divManualSection" className="student-report-left" >
                    <div className="widget-container">
                        <div className="widget-wrapper">
                            <div className="heading">
                                Manually Selected Lessons
                                <div id="divManuallySelectedLessonsBetweenDates" className="date-info between-dates" >| 
                                    <span id="spanManuallySelectedLessonsFromDate" >{ fromDate }</span> - <span id="spanManuallySelectedLessonsToDate" >{ toDate }</span></div>
                            </div>
                            <div className="manual-selection-container">
                                <div className="expanded-container">
                                    <div className="circles-container">
                                        <div className="progress-circles" id="divManuallySelectedLessonsAverageScoreCanvas">
                                            <div className="animated-circles-text">
                                                <div id="divManuallySelectedLessonsAverageScore" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="larger-small-text">Average Score</div>
                                            </div>
                                        </div>
                                        <div className="progress-circles purple-circle">
                                            <div className="filled-circles-text">
                                                <div id="divManuallySelectedLessonsTotalActivities" className="purple-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">Total Activities</div>
                                            </div>
                                        </div>
                                        <div className="progress-circles blue-circle">
                                            <div className="filled-circles-text">
                                                <div id="divManuallySelectedLessonsTotalTimeTaken" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">Total Time Taken</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="show-hide-btn" id="manual-selection-btn"><a className="btn blue">Show Details<span className="btn-expand">+</span></a></div>
                                <div className="report-table-container" id="manual-selection-expanded">
                                    <div className="wlp-table-container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Activity<div className="sort sort-down"></div>
                                                    </th>
                                                    <th>Grade Level<div className="sort sort-down"></div>
                                                    </th>
                                                    <th>Score Achieved<div className="sort sort-down"></div>
                                                    </th>
                                                    <th>Time Taken (mins)<div className="sort sort-down"></div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            {data.map((activity, index) => (
                                                    <tr key={index}>
                                                    <td>{activity.DICFileName}</td>
                                                    <td>{activity.ChildShortDesc}</td>
                                                    <td className="table-column-centered">
                                                        {activity.LastScore !== null && activity.LastScore !== undefined ? activity.LastScore : 0}%
                                                    </td>
                                                    <td className="table-column-centered">
                                                    {Math.floor(activity.TotalQnAnsTime / 60)}:{(activity.TotalQnAnsTime % 60).toString().padStart(2, '0')}
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                            <tbody>
                                                {/* <asp:Repeater id="rptManuallySelectedLessons" ViewStateMode="Disabled" >
                                                    <ItemTemplate>
                                                        <tr>
                                                            <td>
                                                                <div className='<%# Eval("ActivityIcon") %>'></div>
                                                                <span id="wlp-lsn-1-name"><%# Eval("ActivityName") %></span>
                                                            </td>
                                                            <td className="table-column-centered"><%# Eval("GradeLevel") %></td>
                                                            <td className="table-column-centered"><%# Eval("ScoreAchieved")%></td>
                                                            <td className="table-column-centered"><%# Eval("TimeTaken")%></td>
                                                        </tr>
                                                    </ItemTemplate>
                                                </asp:Repeater> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="divSetWorkSection" className="student-report-left"  
                // style={{ marginBottom: "44px" }} 
                >
                    <div className="widget-container">
                        <div className="widget-wrapper">
                            <div className="heading">
                                Set Work
                                <div id="divSetWorkBetweenDates" className="date-info between-dates" >| <span id="spanSetWorkFromDate" >01/01/16</span> - <span id="spanSetWorkToDate" >10/04/16</span></div>
                            </div>
                            <div className="wlp-report-between">
                                <div className="expanded-container">
                                    <div className="circles-container">
                                        <div className="progress-circles" id="divSetWorkSummaryNoOfCompletedCanvas">
                                            <div className="animated-circles-text">
                                                <div id="divSetWorkSummaryNoOfCompleted" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">
                                                    Set Works
                                       <br />
                                                    Completed
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-circles" id="divSetWorkSummaryAverageScoreCanvas">
                                            <div className="animated-circles-text">
                                                <div id="divSetWorkSummaryAverageScore" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="larger-small-text">Average Score</div>
                                            </div>
                                        </div>
                                        <div className="progress-circles purple-circle">
                                            <div className="filled-circles-text">
                                                <div id="divSetWorkSummaryTotalActivities" className="purple-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">Total Activities</div>
                                            </div>
                                        </div>
                                        <div className="progress-circles blue-circle">
                                            <div className="filled-circles-text">
                                                <div id="divSetWorkSummaryTotalTimeTaken" className="blue-circle-large-text" ></div>
                                                <br />
                                                <div className="circle-small-text">Total Time Taken</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="show-hide-btn" id="set-work-btn"><a className="btn blue">Show Details<span className="btn-expand">+</span></a></div>
                                <div className="report-table-container" id="set-work-expanded">
                                    <div className="wlp-table-container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="header-double-line">Set Work Title
                                                    </th>
                                                    <th className="table-column-centered">Score
                                                    </th>
                                                    <th className="header-double-line table-column-centered"><span className="ml-minus-20">Activities Completed</span>
                                                    </th>
                                                    <th className="table-column-centered">Due Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <asp:Repeater id="rptSetWork" ViewStateMode="Disabled" >

                                                    <ItemTemplate>
                                                        <tr>
                                                            <td><%# Eval("WorkTitle") %></td>
                                                            <td className="table-column-centered"><%# Eval("Score")%></td>
                                                            <td className="table-column-centered"><%# Eval("ActivitiesCompleted") %></td>
                                                            <td className="table-column-centered"><%# Eval("DueDate")%></td>
                                                        </tr>
                                                    </ItemTemplate>
                                                </asp:Repeater> */}
                                            </tbody>
                                        </table>
                                    </div>
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

export default StudentActivityReport;