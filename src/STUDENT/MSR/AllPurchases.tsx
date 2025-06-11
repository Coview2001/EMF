import React, { useState, useEffect } from 'react';
import './Style/common.css';
import './Style/header.css';
import './Style/AllPurchases.css';
import './Style/trophy_club.css';
import "./Style/SkillBuildingGames.css";
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import $ from 'jquery';
import Header from '../../Common/Header';
import Section from '../../Common/Section';


const AllPurchases: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [imageSrc, setImageSrc] = useState('');
  const [purchases, setPurchases] = useState<any[]>([
    { AvatarTitle: "reading", type: "avatar", PurchasedOn: "2023-04-25", PointsUsed: 0 },
  ]);


  useEffect(() => {
    fetch('http://localhost:5000/AllPurchases', {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({ Login: 'Child1',FamilyCode: "login00001", SchoolCode: "DLR_KE_AU" }),
    })
      .then(response => response.json())
      .then(data => {
        setPurchases(data);
        // console.log("DATA:",data)
      })
      .catch(err => console.error("Error fetching title:", err));
  }, []);

  useEffect(() => {
    $(document).ready(() => {
      $('.AllPurchases').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
      });
    });
  }, []);

  useEffect(() => {
    fetch('/api/purchases')
      .then(response => response.json())
      .then(data => setPurchases(data));
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

  function getAvatarUrl(avatarTitle: string): string {
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(avatarTitle);
    const fileName = hasExtension ? avatarTitle : `${avatarTitle}.png`;
    return `https://www.elearnoncloud.com/Storage/assets/Avatar/${fileName}`;
  }

  

  return (
    <form>
      {/* <a href="#" className="back-href-top">Back href Top</a> */}
      {/* <a href="#" className="back-href-bottom" id="back_to_bottom_link">Back href Top</a> */}

      <div id="main_top_container">
        {/* <div id="header">
          <div className="section_div">
            <div id="mobile_menu">
              <div id="mobile_box" className="mobile_dropdown">
                <div className="mobile_nav_item">
                  <a id="hlinkStudyRoomMobile" href="/StudyRoom">HOME</a>
                </div>
                <div className="mobile_nav_item">
                  <a id="hlinkReportsMobile" href="/MSRReports">REPORTS</a>
                </div>
                <div className="mobile_nav_item">
                  <a id="hlinkProfileMobile" href="/Profile">PROFILE</a>
                </div>
                <div id="divChangeUserSectionMobile" className="mobile_nav_item mobile_nav_item_hidden">
                  <a id="linkbtnChangeUserMobile" href='/SelectUser'>CHANGE USER</a>
                </div>
                <div className="mobile_nav_item mobile_nav_item_hidden">
                  <a id="linkbtnLogOutMobile" href='/LoggedOut'>LOG OUT</a>
                </div>
              </div>
            </div>

            <div id="logout_btn">
              <a id="linkbtnLogOut" style={{border: 'none', color:'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign:'center'}}>Log Out</a>
            </div>

            <div id="divChangeUserSection">
              <a id="linkbtnChangeUser" href='/SelectUser' style={{border: 'none', color:'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'center'}}>Change User</a>
            </div>

            <label id="lblFName" className="header_text">{userName}</label>

            <div id="scrolled_nav_sub">
              <div id="divLogo" className="scrolled_logo"></div>
              <div id="sn4_sub" className="scrolled_nav_item subbed">
                <a id='hlinkStudyRoom' href="/StudyRoom">HOME</a>
              </div>
              <div id="sn3_sub" className="scrolled_nav_item subbed">
                <a id='hlinkReports' href="/MSRReports">REPORTS</a>
              </div>
              <div id="sn2_sub" className="scrolled_nav_item subbed">
                <a id='hlinkProfile' href="/Profile">PROFILE</a>
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
                <a id="linkbtnStudyRoom" href="/home">HOME</a>
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

      </div>

      <div id="mi_page_btn_container">
          <div id="mi_page_btn_store" className="mi_page_btn">
            <a href="/MyStore">Store</a>
          </div>
          <div id="mi_page_btn_avatars" className="mi_page_btn">
            <a href="/MyIncentives">Avatars</a>
          </div>
          <div id="mi_page_btn_comp" className="mi_page_btn">
            <a href="/MyCompsCurrent">Comps</a>
          </div>
          <div id="mi_page_btn_purchase" className="mi_page_btn mi_page_btn_last mi_page_btn_selected">
            <a href="/AllPurchases">Purchases</a>
          </div>
        </div>

        <div id="mi_page_purchases" className="contents section_container mi_page_bg">
          <div id="mi_purchases_container" className="section_div">
            <div id="mi_purchases_table_container_01" className="mi_purchases_table_container">
              <div id="mi_purchases_table_row_top_00" className="mi_purchases_table_row mi_purchases_table_row_top">
                <div className="mi_purchases_table_row_image"></div>
                <div className="mi_purchases_table_row_type mi_purchases_table_row_text mi_purchases_table_row_text_bold">
                  <p>Type</p>
                </div>
                <div className="mi_purchases_table_row_date mi_purchases_table_row_text mi_purchases_table_row_text_bold">
                  <p>Date</p>
                </div>
                <div className="mi_purchases_table_row_item mi_purchases_table_row_text mi_purchases_table_row_text_bold">
                  <p>Items</p>
                </div>
                <div className="mi_purchases_table_row_points mi_purchases_table_row_text mi_purchases_table_row_text_bold">
                  <p>Points</p>
                </div>
                <div className="mi_purchases_table_row_status mi_purchases_table_row_text mi_purchases_table_row_text_bold">
                  <p>Status</p>
                </div>
              </div>
              {purchases.map((purchase, index) => (
                <div className="mi_purchases_table_row mi_purchases_table_row_expand"  key={index}>
                  <div className="mi_purchases_table_row_image" style={{ backgroundImage: `url(${getAvatarUrl(purchase.AvatarTitle)})` }}>
                    {/* <img className='mi_purchases_table_row_image' src={getAvatarUrl(purchase.AvatarTitle)} alt={purchase.Type || "avatar"} /> */}
                  </div>
                  <div className="mi_purchases_table_row_type ">
                    <p className='mi_purchases_table_row_type'>{purchase.Type || "avatar"}</p>
                  </div>
                  <div className="mi_purchases_table_row_date">
                    <p>{(purchase.PurchasedOn).toString().substring(0, 10)}</p>
                  </div>
                  <div className="mi_purchases_table_row_item">
                    <p>{purchase.AvatarTitle}</p>
                  </div>
                  <div className="mi_purchases_table_row_points">
                    <p>{purchase.PointsUsed}</p>
                  </div>
                  <div className="mi_purchases_table_row_status">
                    <p>{purchase.Status || "Avatar purchased"}</p>
                  </div>
                </div>
              ))}
              <div id="mi_purchases_table_row_00" className="mi_purchases_table_row"></div>
            </div>
            <div className="subject_bottom_gap"></div>
          </div>
        </div>
    </form>
  );
};

export default AllPurchases;
