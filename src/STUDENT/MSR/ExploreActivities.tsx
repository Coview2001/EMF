import React, { useState, useEffect } from "react";
import "./Style/common.css";
import "./Style/header.css";
import "./Style/StudyRoom.css";
import "./Style/ExploreActivities.css";
import "./Style/trophy_club.css";
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import Loading from "../../Common/Loading";


const ExploreActivities: React.FC = () => {
  const [purchases, 
    // setPurchases
  ] = useState<any[]>([6405]);
  // const [weeklyProgress, setWeeklyProgress] = useState<number>(0); 
  // const [points, setPoints] = useState<number>(0); 
  // const [loading, setLoading] = useState<boolean>(true);
  // const [weeklyAchievements, setWeeklyAchievements] = useState<{ english: boolean; math: boolean; science: boolean; total: number }>({
  //   english: true,
  //   math: true,
  //   science: true,
  //   total: 0,
  // });
  const [units, setUnits] = useState<Unit[]>([]);
  const [
    // userName
    , setUserName] = useState<string>("");
  const [imageSrc, setImageSrc] = useState('');
  
type Activity = {
  ActivityNumber: string;
  FileID: string;
  ChildShortDesc: string;
  CssClassForActivity: string;
  ActivityLink: string;
  Score: string;
};

type Chapter = {
  ChapterCode: string;
  ChapterNumber: number;
  ChildShortDesc: string;
  activities: Activity[];
};

type Unit = {
  DICFileName: string;
  UnitCode: string;
  ChildShortDesc: string;
  CurriculumHeading: string;
  chapters: Chapter[];
};


//   useEffect(() => {
//   fetch("http://localhost:5000/ExploreActivities", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       Login: sessionStorage.getItem("login"),
//       FamilyCode: sessionStorage.getItem("FamilyCode"),
//       SchoolCode: sessionStorage.getItem("SchoolCode"),
//       Subject: "Mathematics"
//     })
//   })
//     .then(res => res.json())
//     .then(data => setUnits(data))
//     .catch(err => console.error("Error loading units:", err));
// }, []);


useEffect(() => {
  fetch("http://localhost:5000/ExploreActivities", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      SchoolCode: 'DLR_KE_AU',
      FamilyCode: 'login00001',
      Login: 'child1',
      Subject: "Mathematics"
    })
  })
    .then(res => res.json())
    .then((data: Unit[]) => {
      // console.log("Fetched units:", data);
      setUnits(data);
    })
    .catch(err => console.error("Error fetching units:", err));
}, []);

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
  
  const handleTrophyClick = () => {
    const trophyClubLegend = document.getElementById("trophy_club_legend");
    if (trophyClubLegend) {
      trophyClubLegend.style.display = 
        trophyClubLegend.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <form id="form1">
        <div id="main_top_container">
          <div id="header">
            <div className="section_div">
              <div id="mobile_menu">
                <div id="mobile_box" className="mobile_dropdown">
                  <div className="mobile_nav_item">
                    <a id="hlinkStudyRoomMobile" href="/StudyRoom">HOME</a>
                  </div>
                  <div className="mobile_nav_item">
                    <a id="linkbtnReportsMobile" href="/MSRReports">REPORTS</a>
                  </div>
                  <div className="mobile_nav_item">
                    <a id="hlinkProfileMobile" href="/Profile">PROFILE</a>
                  </div>
                  <div id="divChangeUserSectionMobile" className="mobile_nav_item">
                    <a href="/SelectUser">CHANGE USER</a>
                  </div>
                  <div className="mobile_nav_item divChangeUserSectionMobile">
                    <a href="/LoggedOut">LOG OUT</a>
                  </div>
                </div>
              </div>
              <div id="logout_btn">
                <a id="linkbtnLogOut" href="/LoggedOut">Log Out</a>
              </div>
              <div id="divChangeUserSection">
                <a id="linkbtnChangeUser" href="/SelectUser">Change User</a>
              </div>
              <label id="lblFName" className="header_text">Varun</label>

              <div id="scrolled_nav_sub">

                <div id="linkbtnLogOut" className="scrolled_logo" ></div>
                <div id="sn4_sub" className="scrolled_nav_item subbed">
                  <a id="linkbtnStudyRoom" href="/StudyRoom" >HOME</a>
                </div>
                <div id="sn3_sub" className="scrolled_nav_item subbed">
                  <a id="linkbtnReports" href="/MSRReports" >REPORTS</a>
                </div>
                            <div id="sn2_sub" className="scrolled_nav_item subbed"><a id="hlinkProfile" href="/Profile" >PROFILE</a></div>
              </div>
            </div>
          </div>


          <div id="user_banner">
            <div className="section_div">
              <div id="achievements_btn">
                <a 
                href="/ExploreActivities"
                >ACHIEVEMENTS</a>
              </div>
              <div id="user_strip_right_container">
              <div id="divAvatarContainer" className="avatar_container"><img
                id="imgAvatar"
                src={imageSrc || "/images/default-avatar.png"}
                alt="Avatar"
              />
              </div>

                <div id="trophy_club_container" >
                  <div id="trophy_club_section">
                    <p className="trophy_club_section_title">CLUB</p>
                    <div id="trophy_club_current" onClick={handleTrophyClick} 
                    style={{ backgroundImage: `url(${trophy_club_0})`}}
                    ></div>
                    <div id="trophy_club_legend" className="trophy_club_legendT"
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
                  <label id="lblMyPoints" className="my_points_amount">{sessionStorage.getItem('CurrentPoints')}</label>
                </div>
                <div id="ump_btn">
                  <a href="/MyIncentives" id="linkbtnUseMyPoints" >USE MY POINTS</a>
                </div>
              </div>

              <div id="user_strip_left_container">
                <div id="user_strip_weekly_progress_container">
                  <div id="user_strip_weekly_progress_text">
                    OVERALL WEEKLY PROGRESS: { sessionStorage.getItem('WeeklyProgress') || 0 }<label id="lblOverAllWeeklyProgress"></label>%
                  </div>
                  <div id="user_strip_weekly_progress_bar">
                    <div id="user_strip_weekly_progress_bar_progress" className="user_strip_weekly_progress_bar_progressT"
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
              <div
              id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left">
              </div>
            </div>
            <div className="subject_arrow_right_container" id="divsubject_arrow_right"  >
              <div className="subject_arrow_text subject_arrow_text_right">
                <label id="lblArrowRightText" ></label>
              </div>
              <div
              id="linkbtnArrowRight" className="subject_arrow subject_arrow_right" ></div>
            </div>
          </div>
        </div>


        <div id="tool_bar">
            <div id="tool_bar_container" className="section_div">
              <select id="ddlGrade" name="grade-select" className="activities_grade_dropdownT">
                <option>Year 1</option>
                <option>Year 2</option>
              </select>
              <div className="search_activities_sml_btn"
              style={{ margin:"10px 0 0 10px" }}
              >
                <a id="linkbtnGotoSearchActivities" href="/SearchActivities"
                >Search for topic or lesson</a>
              </div>
            </div>
          </div>

          <div>
          </div>
          
          <div id="contents_math" className="contents section_container">
            
            <div className="grade_container">
              {units.length ?
              units.map((unit: Unit, unitIndex: number) => (
                <div key={`${unit.UnitCode}_${unitIndex}`}>
                <div className="unit_box">
                  <p className="grade_container_title">UNIT {unitIndex + 1}</p>
                </div>
                <p className="grade_container_curriculum">{unit.CurriculumHeading}</p>
              
                {unit.chapters.map((chapter: Chapter) => (
                  <div key={chapter.ChapterCode}>
                    <div className="chapter_title">
                      <p>CHAPTER {chapter.ChapterNumber}: {chapter.ChildShortDesc}</p>
                    </div>
                
                    <div className="row_container">
                      {chapter.activities.map((activity: Activity, idx: number) => (
                        <a key={idx} className="activity" href={activity.ActivityLink}>
                          <div className="activity_num">
                            <p>{activity.ActivityNumber}</p>
                          </div>
                          <div className="last_score_percentage">
                            <p>{activity.Score}</p>
                          </div>
                          <div
                            className={activity.CssClassForActivity}
                            style={{
                              backgroundImage: `url(${
                              activity.CssClassForActivity === "activity_icon_game"
                                ? "https://www.elearnoncloud.com/STUDENT/MSR/Image/games_icon_lrg.png"
                                : (activity.CssClassForActivity === "activity_icon_lesson"
                                  ? "https://www.elearnoncloud.com/STUDENT/MSR/Image/lessons_icon_lrg.png"
                                  : "https://www.elearnoncloud.com/STUDENT/MSR/Image/tests_icon_lrg.png"
                                )
                            })`
                            }}
                          ></div>

                          {/* <div className="activity_icon_lesson"
                          style={{ backgroundImage: `url(${"https://www.elearnoncloud.com/STUDENT/MSR/Image/lessons_icon_lrg.png"})` }}
                          >
                          </div> */}
                          <div className="activity_name">
                            <p>{activity.ChildShortDesc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="unit_break"></div>
              </div>
            ))
            : <Loading/>
          }
          

            </div>
            
            
            
              {/* <div className="grade_container">
                <div className="grade_container_content">
                  {units.map((unit, unitIndex) => (
                    <div key={unit.UnitCode}>
                      <div id={`expand_box${unitIndex + 1}`} className="expand_box">
                        <div className="contents-btn-icon contents-collapse" id="section-1-btn"></div>
                      </div>

                      <div className="unit_box">
                        <p className="grade_container_title">{unit.ChildShortDesc}</p>
                      </div>
                      <p className="grade_container_curriculum">{unit.CurriculumHeading}</p>

                      <input type="hidden" value={unit.DICFileName} />
                      <input type="hidden" value={unit.UnitCode} />

                      <div id={`content_${unitIndex + 1}`}>
                        {unit.chapters.map((chapter) => (
                          <div key={chapter.ChapterCode}>
                            <div className="chapter_title">
                              <p>
                                Chapter {chapter.ChapterNumber}: {chapter.ChildShortDesc}
                              </p>
                            </div>
                            <div className="row_container">
                              <input type="hidden" value={chapter.ChapterNumber} />
                              <input type="hidden" value={chapter.ChapterCode} />

                              {chapter.activities.map((activity, activityIndex) => (
                                <a key={activityIndex} className="activity" href={activity.ActivityLink}>
                                  <div className="activity_num">
                                    <p>{activity.ActivityNumber}</p>
                                  </div>
                                  <div className="last_score_percentage">
                                    <p>{activity.Score}</p>
                                  </div>
                                  <div className={activity.CssClassForActivity}></div>
                                  <div className="activity_name">
                                    <p>{activity.ChildShortDesc}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="unit_break"></div>
                      <div className="unit_break"></div>
                    </div>
                  ))}
                </div>
              </div> */}
          </div>
          <div id="contents_english" className="contents section_container">
          </div>
          <div id="contents_physics" className="contents section_container">
          </div>
          <div id="contents_chemistry" className="contents section_container">
          </div>
          <div id="contents_biology" className="contents section_container">
          </div> 
    </form>
  );
};

export default ExploreActivities;
