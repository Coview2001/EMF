import React, { useState, useEffect } from "react";
import "./Style/common.css";
import "./Style/header.css";
import "./Style/MyIncentives.css";
import "./Style/trophy_club.css";
// import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import Header from "../../Common/Header";
import Section from "../../Common/Section";

const MyIncentives: React.FC = () => {

  function getAvatarUrl(avatarTitle: string): string {
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(avatarTitle);
    const fileName = hasExtension ? avatarTitle : `${avatarTitle}.png`;
    return `https://www.elearnoncloud.com/Storage/assets/Avatar/${fileName}`;
  }

  const [avatars, setAvatars] = useState([
    { AvatarLink: "avatar1.png", CurrentAvatar: "reading", Points: 0 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "gorilla", Points: 500 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "penguin", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "josh", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "monkey", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "rover", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "alien", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "bokwave", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "crab", Points: 2000 },
    { AvatarLink: "avatar2.png", CurrentAvatar: "eve", Points: 2000 },
  ]);

  // const [weeklyProgress, setWeeklyProgress] = useState(50);
  const [myPoints, setMyPoints] = useState(0);
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


  // useEffect(() => {
  //   fetch("http://localhost:5000/MyIncentives", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ Login: "Child1", FamilyCode: "kedemo", SchoolCode: "login00001" }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setAvatars(data);
  //     })
  //     .catch(err => console.error("Error fetching title:", err));


  //   setMyPoints(1200);
  //   setOverallWeeklyProgress(75);
  //   setWeekCount(10);
  //   setTrophyData(["Gold", "Silver", "Bronze"]);
  //   // setUserName("Varun");
  // }, []);

  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/MyIncentives", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           Login: "Child1",
  //           FamilyCode: "kedemo",
  //           SchoolCode: "DLR_KE_AU",
  //         }),
  //       });
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  
  //       const data = await response.json();
  //       setAvatars(data);
  //       console.log("Length:",data.length)
  //       console.log("Data:",data)
  
  //     } catch (err) {
  //       console.error("Error fetching incentives:", err);
  //     }
  //   })();
  
  //   setMyPoints(1200);
  //   setOverallWeeklyProgress(75);
  //   setWeekCount(10);
  //   setTrophyData(["Gold", "Silver", "Bronze"]);
  //   // setUserName("Varun");
  // }, []);

  useEffect(() => {
  (async () => {
    try {
      const response = await fetch("http://localhost:5000/MyIncentives", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Login: "Child1",
          FamilyCode: "kedemo",
          SchoolCode: "DLR_KE_AU",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const lowercasedData = data.map((avatar: any) => ({
        ...avatar,
        CurrentAvatar: avatar.CurrentAvatar?.toLowerCase()
      }));

      setAvatars(lowercasedData);
      // console.log("Length:", lowercasedData.length);
      // console.log("Data:", lowercasedData);
    } catch (err) {
      console.error("Error fetching incentives:", err);
    }
  })();
    setMyPoints(1200);
    setOverallWeeklyProgress(75);
    setWeekCount(10);
    setTrophyData(["Gold", "Silver", "Bronze"]);
    // setUserName("Varun");
}, []);

  

  const handlePurchaseAvatar = (title: string) => {
    alert(`Purchased avatar: ${title}`);
    const i = avatars.findIndex((avatar) => avatar.CurrentAvatar === title);
    setMyPoints((prevPoints) => prevPoints - avatars[i].Points); 
  };
  
  // const handleTrophyClick = () => {
  //   const trophyClubLegend = document.getElementById("trophy_club_legend");
  //   if (trophyClubLegend) {
  //     trophyClubLegend.style.display = 
  //       trophyClubLegend.style.display === "none" ? "block" : "none";
  //   }
  // };

  return (
    <form>

          <div id="avatar_list">
            
            {avatars.map((avatar, index) => (
              <div key={index} className="mi_avatar_lightbox">
                <p>
                  <span className="title_text">Confirm Purchase</span>
                </p>
                <div className="confirm_purchase_avatar_img">
                  <img src={avatar.AvatarLink} alt={avatar.CurrentAvatar} />
                </div>
                <p>
                  <span className="confirm_purchase_avatar_title">
                    {avatar.CurrentAvatar}
                  </span>
                  <span className="confirm_purchase_avatar_price">
                    <span className="confirm_purchase_avatar_price_blue">
                      {avatar.Points}
                    </span>
                  </span>
                </p>
                <div className="button_box">
                  <button className="general_btn two_btn_lightbox two_btn_left">
                    Cancel
                  </button>
                  <button
                    className="general_btn two_btn_lightbox"
                    onClick={() => handlePurchaseAvatar(avatar.CurrentAvatar)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            ))}
          </div>
        <a href="/MyIncentives" className="back-to-top">Back to Top</a>
        <a href="/MyIncentives" className="back-to-bottom" id="back_to_bottom_link">Back to Top</a>
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
                    <a id="hlinkStore" href="/MyStore" >Store</a>
                    </div>
                  <div id="mi_page_btn_avatars" className="mi_page_btn mi_page_btn_selected">
                    <a href="/MyIncentives" id="hlinkMyIncentives" >Avatars</a>
                  </div>
                <div id="mi_page_btn_comp" className="mi_page_btn">
                    <a href="/MyCompsCurrent">Comps</a></div>            
                <div id="mi_page_btn_purchase" className="mi_page_btn mi_page_btn_last">
                    <a id="hlinkPurchases" href="/AllPurchases" >Purchases</a></div>
            </div>



            <div id="mi_page_avatars" className="contents section_container mi_page_bg">
            <div id="mi_avatars_container" className="section_div">


                {/* <asp:Repeater ID="rptAvatar" runat="server">
                    <ItemTemplate>

                        <div id='mi_avatar_single_box_0<%# Container.ItemIndex + 1 %>' className="mi_avatar_single_box">
                            <div id='mi_avatar_single_box_image_0<%# Container.ItemIndex + 1 %>' className="mi_avatar_single_box_image" <%# Eval("AvatarLink")%>></div>
                            <div className="mi_avatar_single_box_right_container">
                                <p className="mi_avatar_single_box_right_title"><%# Eval("AvatarTitle")%></p>
                                <p className='mi_avatar_single_box_right_subtitle <%# Eval("CssClassForPoints")%>'><%# Eval("Points")%></p>
                                <div id='mi_avatar_single_box_right_btn_0<%# Container.ItemIndex + 1 %>' className='mi_avatar_single_box_right_btn <%# Eval("CssClassForBtnSetAvatar") %>'>
                                    <asp:LinkButton OnClick="linkSetAvatar_Click" CommandArgument='<%# Eval("AvatarTitle")%>' Enabled='<%# Eval("EnableBtn") %>' runat="server"><%# Eval("BtnText")%></asp:LinkButton>
                                </div>
                            </div>
                        </div>
                    </ItemTemplate>
                </asp:Repeater> */}

                <div className="mi_avatars_container d-flex justify-content-center">
                  {avatars.map((avatar, index) => (
                    <div key={index} className="mi_avatar_single_box mi_avatar_single_box_expand">
                      <img src={getAvatarUrl(avatar.CurrentAvatar)} alt={avatar.CurrentAvatar}  
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://www.elearnoncloud.com/Storage/assets/Avatar/reading.png";
                      }} 
                      className="mi_avatar_single_box_image"/>
                      <div className="mi_avatar_single_box_right_container">
                        <p className="mi_avatar_single_box_right_title" >
                          <b>{avatar.CurrentAvatar}</b>
                        </p>
                        <p className="mi_avatar_single_box_right_subtitle ">
                          {avatar.Points} Points
                        </p>
                        <button className="mi_avatar_single_box_right_btn " disabled={myPoints < avatar.Points}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePurchaseAvatar(avatar.CurrentAvatar);
                          }}
                        >
                          {myPoints < avatar.Points ? "EARN MORE POINTS" : "BUY"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
            <div className="subject_middle_gap"></div>
            <div className="subject_middle_gap"></div>
        </div>

          </div>
    </form>
  );
};

export default MyIncentives;
