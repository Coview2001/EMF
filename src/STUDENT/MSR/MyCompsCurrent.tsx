import React, { useState, useEffect } from "react";
import './Style/common.css';
import './Style/header.css';
import "./Style/MyCompsCurrent.css";
import './Style/trophy_club.css';
// import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import Header from "../../Common/Header";
import Section from "../../Common/Section";

// interface Competition {
//   CompID: number;
//   CompTitle: string;
//   TermsAndConditions: string;
//   CompImageLink: string;
//   Points: number;
// }

const MyCompsCurrent: React.FC = () => {
  // const [competitions, setCompetitions] = useState<Competition[]>([]); 
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
  const [
    // userName
    , setUserName] = useState<string>("");
  // const [purchases, setPurchases] = useState<any[]>([6405]);
  const [
    // imageSrc
    , setImageSrc] = useState('');



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
  

  // const handleEnterCompetition = (compID: number) => {
  //   // console.log(`Entering competition with id: ${compID}`);
  // };
  
    useEffect(() => {
      setMyPoints(1200);
      setOverallWeeklyProgress(75);
      setWeekCount(10);
      setTrophyData(["Gold", "Silver", "Bronze"]);
      // setUserName("Varun");
    }, []);
  
    
    // const handleTrophyClick = () => {
    //   const trophyClubLegend = document.getElementById("trophy_club_legend");
    //   if (trophyClubLegend) {
    //     trophyClubLegend.style.display = 
    //       trophyClubLegend.style.display === "none" ? "block" : "none";
    //   }
    // };

  return (
    <form>

          {/* {competitions.map((comp) => (
              <div key={comp.CompID} className="mi_comps_tandc_lightbox">
                <p>
                  <span className="title_text">Competition Terms and Conditions</span>
                </p>
                <p>
                  <span className="mi_comps_tandc_lightbox_title">{comp.CompTitle}</span>
                  <span className="mi_comps_tandc_lightbox_text">{comp.TermsAndConditions}</span>
                </p>
                <div className="button_box">
                  <a className="mi_comps_tandc_lightbox_ok_btn">OK</a>
                </div>
              </div>
            ))}

            {competitions.map((comp) => (
              <div key={comp.CompID} className="mi_comps_current_lightbox">
                <p>
                  <span className="title_text">Confirm Entry Purchase</span>
                </p>
                <div className="confirm_comps_entry_img" style={{ backgroundImage: `url(${comp.CompImageLink})` }}>
                  <div className="comps_tick"></div>
                </div>
                <p>
                  <span className="mi_comps_current_lightbox_title">{comp.CompTitle}</span>
                  <span className="confirm_purchase_entry_price">
                    <span className="confirm_purchase_entry_price_blue">{comp.Points}</span>
                  </span>
                </p>
                <div className="button_box">
                  <a className="mi_comps_current_lightbox_cancel_btn">Cancel</a>
                  <a className="mi_comps_current_lightbox_confirm_btn">Confirm</a>
                  <a
                    onClick={() => handleEnterCompetition(comp.CompID)}
                    className="mi_comps_current_lightbox_ok_btn"
                  >
                    OK
                  </a>
                </div>
              </div>
            ))} */}

            
<a href="/MyCompsCurrent" className="back-to-top">Back to Top</a>
<a href="/MyCompsCurrent" className="back-to-bottom" id="back_to_bottom_link">Back to Top</a>

        <div id="main_top_container">
          {/* <div id="header">
            <div className="section_div">
              <div id="mobile_menu">
                <div id="mobile_box" className="mobile_dropdown">
                  <div className="mobile_nav_item">
                    <a id="hlinkStudyRoomMobile" href="/StudyRoom">HOME</a>
                  </div>
                  <div className="mobile_nav_item">
                    <a href="/MSRReports" id="hlinkReportsMobile" >REPORTS</a>
                  </div>
                  <div className="mobile_nav_item">
                    <a href="/Profile" id="lnkprofilemobile">PROFILE</a>
                  </div>
                  <div id="divChangeUserSectionMobile" className="mobile_nav_item mobile_nav_item_hidden">
                    <a href="/SelectUser" id="linkbtnChangeUserMobile">CHANGE USER</a>
                  </div>
                  <div className="mobile_nav_item mobile_nav_item_hidden">
                    <a href="/LoggedOut" id="linkbtnLogOutMobile">LOG OUT</a>
                  </div>
                </div>
              </div>
              <div id="logout_btn">
                <a href="/LoggedOut" id="linkbtnLogOut">Log Out</a>
              </div>
              <div id="divChangeUserSection">
                <a href="/SelectUser" id="linkbtnChangeUser">Change User</a>
              </div>
              <label id="lblFName" className="header_text">{userName}</label>
              <div id="scrolled_nav_sub">
                  <div id="divlogo" className="scrolled_logo" ></div>
                  <div id="sn4_sub" className="scrolled_nav_item subbed">
                    <a  id="hlinkStudyRoom" href="/StudyRoom">HOME</a>
                  </div>
                  <div id="sn3_sub" className="scrolled_nav_item subbed">
                    <a  id="hlinkReports" href="/MSRReports">REPORTS</a>
                  </div>
                  <div id="sn2_sub" className="scrolled_nav_item subbed">
                  <a  id="lnkbtnprofile" href="/Profile" >PROFILE</a>
                  </div>
              </div>
            </div>
          </div>
          <div id="user_banner">
              <div className="section_div">
                <div id="achievements_btn">
                  <a href="#">ACHIEVEMENTS</a>
                </div>
                <div id="user_strip_right_container">
                <div id="divAvatarContainer" className="avatar_container"><img id="imgAvatar" src={imageSrc} alt="Avatar" /></div>

                  <div id="trophy_club_container" >
                    <div id="trophy_club_section">
                      <p className="trophy_club_section_title">CLUB</p>
                      <div id="trophy_club_current" onClick={handleTrophyClick} style={{ backgroundImage: `url(${trophy_club_0})`}}></div>
                      <div id="trophy_club_legend" style={{ display:'none'}}>
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
                    <a id="hlinkUseMyPoints">USE MY POINTS</a>
                  </div>
                </div>
                <div id="user_strip_left_container">
                  <div id="user_strip_weekly_progress_container">
                    <div id="user_strip_weekly_progress_text">
                      OVERALL WEEKLY PROGRESS: <label id="lblOverAllWeeklyProgress"></label>%
                    </div>
                    <div id="user_strip_weekly_progress_bar">
                      <div id="user_strip_weekly_progress_bar_progress" style={{ width: '0px' }}></div>
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
            </div> */}
            <Header />
            <Section />

            <div id="mi_banner" className="subject_banner">
                <div id="mi_banner_text_img"></div>
            </div>


            <div id="mi_page_btn_container">
                <div id="mi_page_btn_store" className="mi_page_btn">
                    <a id="hlinkStore" href="/MyStore" >Store</a></div>
                            <div id="mi_page_btn_avatars" className="mi_page_btn">
                    <a id="hlinkMyIncentives" href="/MyIncentives" >Avatars</a></div>
                <div id="mi_page_btn_comp" className="mi_page_btn mi_page_btn_selected">
                    <a href="/MyCompsCurrent">Comps</a></div>            
                <div id="mi_page_btn_purchase" className="mi_page_btn mi_page_btn_last">
                    <a id="hlinkPurchases" href="/AllPurchases" >Purchases</a></div>
            </div>



            <div id="mi_page_comps_current" className="contents section_container mi_page_bg">
                <div id="mi_comps_current_container" className="section_div">
                    <div id="mi_comps_toggle_row">
                        <div id="mi_comps_toggle_container">
                        <div className="mi_comps_toggle_button" id="mi_comps_toggle_buttonT"
                        // style={{float:'left'}}
                        >
                                <a href="/MyCompsCurrent" >Current Comps</a>
                            </div>
                        <div className="mi_comps_toggle_button mi_comps_toggle_button_clear">
                                <a id="hlinkPastComps" href="/MyCompsPast" >Past Comps</a>
                              </div>
                        </div>
                    </div>

                    {/* <asp:Repeater id="rptCurrentComps" >
                        <ItemTemplate>

                            <div id='mi_comps_single_box_0<%# Container.ItemIndex + 1 %>' className="mi_comps_single_box">
                                <div id='mi_comps_single_box_image_0<%# Container.ItemIndex + 1 %>' className="mi_comps_single_box_image" <%# Eval("CompImageLink") %>></div>
                                <div className="mi_comps_single_box_right_container">
                                    <p className="mi_comps_single_box_right_title"><%# Eval("CompTitle") %></p>
                                    <p className="mi_comps_single_box_right_entry_close">Entry closes: <span data-countdown='<%# Eval("EntryCloseTimeText") %>'></span></p>
                                    <p className="mi_comps_single_box_right_price"><%# Eval("Points") %></p>
                                    <div id='mi_comps_single_box_right_btn_0<%# Container.ItemIndex + 1 %>' data-value='<%# Container.ItemIndex + 1 %>' className='mi_comps_single_box_right_btn <%# Eval("CssClassForEnterBtn") %>'>
                                        <a id='a<%# Eval("CompID") %>'><%# Eval("EnterBtnText") %></a>
                                    </div>
                                    <div id="mi_comps_single_box_right_tc_btn_0<%# Container.ItemIndex + 1 %>" data-value='<%# Eval("CompTitle") %>' className="mi_comps_single_box_right_btn mi_comps_single_box_right_tc_btn"><a id='TC<%# Eval("CompID") %>'>Ts & Cs</a></div>
                                    <div className="mi_comps_single_box_entries_container">
                                        <div className="mi_comps_single_box_total_entries_box">
                                            <p>
                                                entries<br>
                                                <span id="mi_comps_single_box_0<%# Container.ItemIndex + 1 %>_total_entries"><%# Eval("NoOfEntries") %></span>
                                            </p>
                                        </div>
                                        <div className="mi_comps_single_box_my_entries_box">
                                            <p>
                                                me<br>
                                                <span id="mi_comps_single_box_0<%# Container.ItemIndex + 1 %>_my_entries"><%# Eval("NoOfEntriesByMe") %></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='<%# Eval("CssClassForNewEntry") %>'>
                                    <p><%# Eval("NewEntryText") %></p>
                                </div>
                            </div>

                        </ItemTemplate>
                    </asp:Repeater> */}

                    <div className="subject_middle_gap"></div>
                    <div className="subject_bottom_gap"></div>
                </div>
            </div>


            <div id="divSubjectBanner" className="subject_banner">
                <div className="subject_arrow_left_container" id="divsubject_arrow_left" >
                <div className="subject_arrow_text subject_arrow_text_left">
                  <label id="lblArrowLeftText"></label>
                </div>
                <div
                
                
                id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left"></div>
              </div>
                <div className="subject_arrow_right_container" id="divsubject_arrow_right" >
                <div className="subject_arrow_text subject_arrow_text_right">
                  <label id="lblArrowRightText"></label>
                </div>
                <div id="linkbtnArrowRight" className="subject_arrow subject_arrow_right"></div>
              </div>
            </div>
          </div>

    </form>
  );
};

export default MyCompsCurrent;
