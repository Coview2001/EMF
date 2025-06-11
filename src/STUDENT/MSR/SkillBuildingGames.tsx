import React from "react";
import { useState, useEffect } from "react";
import './Style/common.css';
import "./Style/header.css";
import "./Style/SkillBuildingGames.css";
import "./Style/trophy_club.css"
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';


const SkillBuildingGames: React.FC = () => {
      const [weeklyProgress, setWeeklyProgress] = useState(50);
      const [myPoints, setMyPoints] = useState(0);
      const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
      const [weekCount, setWeekCount] = useState(0);
      const [trophyData, setTrophyData] = useState<string[]>([]);
      const [userName, setUserName] = useState<string>("");
      const [purchases, setPurchases] = useState<any[]>([6405]);
			const [imageSrc, setImageSrc] = useState('');

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
  
    const handlePurchase = (storeID: string) => {
    //   console.log(`Purchase confirmed for StoreID: ${storeID}`);
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
            <nav id="mobile_menu">
              <div id="mobile_box" className="mobile_dropdown">
                <div className="mobile_nav_item">
                  <a href="/StudyRoom" id="hlinkStudyRoomMobile">HOME</a>
                </div>
                <div className="mobile_nav_item">
                  <a href="MSRReports" id="hlinkReportsMobile">REPORTS</a>
                </div>
                <div className="mobile_nav_item">
                  <a href="Profile" id="hlnkbtnProfileMobile">PROFILE</a>
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
            <label id="lblFName" className="header_text">Varun</label>
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

        <div id="msr_sbg_banner" className="subject_banner">
          <div id="msr_sbg_banner_text_img"></div>
        </div>
      </div>

      <div id="msr_sbg_page_btn_container">
        <div id="msr_sbg_page_btn_store" className="msr_sbg_page_btn_last">
          <a>
            <label id="lblMathsPlan">Maths</label>
          </a>
        </div>
        <div id="msr_sbg_page_btn_purchase" className="msr_sbg_page_btn msr_sbg_page_btn_last">
          <a>ENGLISH</a>
        </div>
      </div>

      <div id="msr_sbg_page_store" className="contents section_container msr_sbg_page_bg">
        <div id="msr_sbg_store_container" className="section_div">
          <div id="wiz_game_message" className="subject_container_title subject_container_title_sbg">
            <p>Games are added as you learn. These games reinforce skills learnt.</p>
          </div>
          <div id="msr_sbg_single_box_01" className="msr_sbg_single_box">
            <p className="msr_sbg_single_box_bottom_title">Fun Sums Level 1</p>
            <p className="msr_sbg_single_box_bottom_pb">Reach The Target</p>
            <div id="msr_sbg_single_box_image_01" className="msr_sbg_single_box_image"></div>
            <div className="msr_sbg_single_box_bottom_container">
              <div className="play_game_btn">
                <p>PLAY</p>
              </div>
              <div className="leaderboard_row_container">
                <span className="msr_sbg_single_box_bottom_lb">
                  <p>Leaderboard</p>
                  <span id="leaderboard_expand_collapse_01" className="leaderboard_expand_collapse">
                    <p></p>
                  </span>
                </span>
                <span id="month_btn_01" className="month_btn btn_selected_bgcolor">
                  <p>This Month</p>
                </span>
                <span id="alltime_btn_01" className="alltime_btn btn_unselected_bgcolor">
                  <p>All Time</p>
                </span>
                <div id="leaderboard_month_container_01">
                  <div className="leaderboard_row">
                    <span className="leaderboard_icon leaderboard_icon_gold"></span>
                    <span className="leaderboard_score">
                      <p>01:23:05</p>
                    </span>
                    <span className="leaderboard_name">
                      <p>Lars Milton</p>
                    </span>
                  </div>
                  <div className="leaderboard_row">
                    <span className="leaderboard_icon leaderboard_icon_silver"></span>
                    <span className="leaderboard_score">
                      <p>01:25:33</p>
                    </span>
                    <span className="leaderboard_name">
                      <p>Jozo Aleksandrov</p>
                    </span>
                  </div>
                  <div className="leaderboard_row leaderboard_row_last leaderboard_row_bronze">
                    <span className="leaderboard_icon leaderboard_icon_bronze"></span>
                    <span className="leaderboard_score">
                      <p>01:28:17</p>
                    </span>
                    <span className="leaderboard_name">
                      <p>Zoran McNiel</p>
                    </span>
                  </div>

                  <div className="expanded_leaderboard_container">
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>4.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:30:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Simba Spurling</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>5.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:30:43</p>
										</span>
										<span className="leaderboard_name">
											<p>Daiki Alesio</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:32:02</p>
										</span>
										<span className="leaderboard_name">
											<p>Joel Beulen</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:33:45</p>
										</span>
										<span className="leaderboard_name">
											<p>Melissa Bendtsen</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>7.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:36:49</p>
										</span>
										<span className="leaderboard_name">
											<p>Janna Meaney</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>8.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:37:11</p>
										</span>
										<span className="leaderboard_name">
											<p>Barb Arkema</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>9.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:37:55</p>
										</span>
										<span className="leaderboard_name">
											<p>Eder Holst</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>10.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:38:02</p>
										</span>
										<span className="leaderboard_name">
											<p>Selene Koole</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>11.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:39:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Kimberley Malone</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>12.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:40:45</p>
										</span>
										<span className="leaderboard_name">
											<p>Bergliot Napoleoni</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>13.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:41:12</p>
										</span>
										<span className="leaderboard_name">
											<p>Arthur Novak</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>14.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:42:26</p>
										</span>
										<span className="leaderboard_name">
											<p>Garrick Barros</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>15.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:43:09</p>
										</span>
										<span className="leaderboard_name">
											<p>Paskal Braband</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>16.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:44:45</p>
										</span>
										<span className="leaderboard_name">
											<p>Pam Molnar</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>17.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:44:59</p>
										</span>
										<span className="leaderboard_name">
											<p>Aileas Kahler</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>18.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:45:01</p>
										</span>
										<span className="leaderboard_name">
											<p>Darren Cokes</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>19.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:45:13</p>
										</span>
										<span className="leaderboard_name">
											<p>Adamina Stein</p>
										</span>
									</div>
									<div className="leaderboard_row leaderboard_row_last">
										<span className="leaderboard_icon">
											<p>20.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:45:27</p>
										</span>
										<span className="leaderboard_name">
											<p>Reese Potenza</p>
										</span>
									</div>
								</div>
                </div>

                <div id="leaderboard_alltime_container_01">
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_gold"></span>
									<span className="leaderboard_score">
										<p>00:59:15</p>
									</span>
									<span className="leaderboard_name">
										<p>Donna Mendelsohn</p>
									</span>
								</div>
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_silver"></span>
									<span className="leaderboard_score">
										<p>00:59:58</p>
									</span>
									<span className="leaderboard_name">
										<p>Nicolau Burton</p>
									</span>
								</div>
								<div className="leaderboard_row leaderboard_row_last leaderboard_row_bronze">
									<span className="leaderboard_icon leaderboard_icon_bronze"></span>
									<span className="leaderboard_score">
										<p>01:00:16</p>
									</span>
									<span className="leaderboard_name">
										<p>Augustine Davin</p>
									</span>
								</div>

								<div className="expanded_leaderboard_container">
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>4.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:00:28</p>
										</span>
										<span className="leaderboard_name">
											<p>Orson Sebastino</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>5.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:00:59</p>
										</span>
										<span className="leaderboard_name">
											<p>Connor Oakley</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:01:12</p>
										</span>
										<span className="leaderboard_name">
											<p>Oswald Law</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:01:18</p>
										</span>
										<span className="leaderboard_name">
											<p>Kegan Pickle</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>7.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:01:26</p>
										</span>
										<span className="leaderboard_name">
											<p>Faye Segreti</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>8.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:01:39</p>
										</span>
										<span className="leaderboard_name">
											<p>Doriano Yeung</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>9.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:01:48</p>
										</span>
										<span className="leaderboard_name">
											<p>Julia Seelenfreund</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>10.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:02:48</p>
										</span>
										<span className="leaderboard_name">
											<p>Henry Tomasson</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>11.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:02:56</p>
										</span>
										<span className="leaderboard_name">
											<p>Florette Pilkvist</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>12.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:00</p>
										</span>
										<span className="leaderboard_name">
											<p>Bonifacy Feldt</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>13.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:04</p>
										</span>
										<span className="leaderboard_name">
											<p>Alethea Roderick</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>14.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Annie Schneider</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>15.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:24</p>
										</span>
										<span className="leaderboard_name">
											<p>Fawziya Marchand</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>16.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:46</p>
										</span>
										<span className="leaderboard_name">
											<p>Marcas Donnell</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>17.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:49</p>
										</span>
										<span className="leaderboard_name">
											<p>Kyung-Hee Lee</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>18.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:03:55</p>
										</span>
										<span className="leaderboard_name">
											<p>Perlie Head</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>19.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:04:04</p>
										</span>
										<span className="leaderboard_name">
											<p>Benedetto Rossini</p>
										</span>
									</div>
									<div className="leaderboard_row leaderboard_row_last">
										<span className="leaderboard_icon">
											<p>20.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:04:25</p>
										</span>
										<span className="leaderboard_name">
											<p>Buddy Hambleton</p>
										</span>
									</div>
								</div>
							</div>
              </div>
            </div>
          </div>

          <div id="msr_sbg_single_box_02" className="msr_sbg_single_box">
					<p className="msr_sbg_single_box_bottom_title">Tiger Puzzle</p>
					<p className="msr_sbg_single_box_bottom_pb">Reach The Target</p>
					<div id="msr_sbg_single_box_image_02" className="msr_sbg_single_box_image"></div>
					<div className="msr_sbg_single_box_bottom_container">
						<div className="play_game_btn">
							<p>PLAY</p>
						</div>
						<div className="leaderboard_row_container">
							<span className="msr_sbg_single_box_bottom_lb">
								<p>Leaderboard</p>
								<span id="leaderboard_expand_collapse_02" className="leaderboard_expand_collapse">
									<p></p>
								</span>
							</span>
							<span className="month_btn btn_selected_bgcolor">
								<p>This Month</p>
							</span><span className="alltime_btn btn_unselected_bgcolor">
								<p>All Time</p>
							</span>
							<div id="">
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_gold"></span>
									<span className="leaderboard_score">
										<p>01:22:17</p>
									</span>
									<span className="leaderboard_name">
										<p>Jonathan Driessen</p>
									</span>
								</div>
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_silver"></span>
									<span className="leaderboard_score">
										<p>01:28:02</p>
									</span>
									<span className="leaderboard_name">
										<p>Laura Episcopo</p>
									</span>
								</div>
								<div className="leaderboard_row leaderboard_row_last leaderboard_row_bronze">
									<span className="leaderboard_icon leaderboard_icon_bronze"></span>
									<span className="leaderboard_score">
										<p>01:28:36</p>
									</span>
									<span className="leaderboard_name">
										<p>Brunilda Hall</p>
									</span>
								</div>

								<div className="expanded_leaderboard_container">
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>4.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:29:47</p>
										</span>
										<span className="leaderboard_name">
											<p>Jacob Aalders</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>5.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:29:49</p>
										</span>
										<span className="leaderboard_name">
											<p>Katalinka Abbing</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:30:12</p>
										</span>
										<span className="leaderboard_name">
											<p>Shaquila Vemulakonda</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:31:24</p>
										</span>
										<span className="leaderboard_name">
											<p>Nicola Burns</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>7.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:33:36</p>
										</span>
										<span className="leaderboard_name">
											<p>Calum Ashley</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>8.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:35:17</p>
										</span>
										<span className="leaderboard_name">
											<p>Vilma Frank</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>9.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:35:40</p>
										</span>
										<span className="leaderboard_name">
											<p>Layton MacEachern</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>10.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:37:10</p>
										</span>
										<span className="leaderboard_name">
											<p>Zan Liu</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>11.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:38:01</p>
										</span>
										<span className="leaderboard_name">
											<p>Manuel Kassmeyer</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>12.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:38:58</p>
										</span>
										<span className="leaderboard_name">
											<p>Valerie Dibra</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>13.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:39:12</p>
										</span>
										<span className="leaderboard_name">
											<p>Jie Huang</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>14.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:40:00</p>
										</span>
										<span className="leaderboard_name">
											<p>Oinone Gouveia</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>15.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:41:03</p>
										</span>
										<span className="leaderboard_name">
											<p>Shandar Gardinier</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>16.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:42:45</p>
										</span>
										<span className="leaderboard_name">
											<p>Evelina Rosenfeld</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>17.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:43:13</p>
										</span>
										<span className="leaderboard_name">
											<p>Serafima Nussbaum</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>18.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:44:13</p>
										</span>
										<span className="leaderboard_name">
											<p>Rufina Weaver</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>19.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:44:28</p>
										</span>
										<span className="leaderboard_name">
											<p>Karen Deasun</p>
										</span>
									</div>
									<div className="leaderboard_row leaderboard_row_last">
										<span className="leaderboard_icon">
											<p>20.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:45:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Yevgeniy Comtois</p>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div id="msr_sbg_single_box_03" className="msr_sbg_single_box">
					<p className="msr_sbg_single_box_bottom_title">Square Puzzle</p>
					<p className="msr_sbg_single_box_bottom_pb">Reach The Target</p>
					<div id="msr_sbg_single_box_image_03" className="msr_sbg_single_box_image"></div>
					<div className="msr_sbg_single_box_bottom_container">
						<div className="play_game_btn">
							<p>PLAY</p>
						</div>
						<div className="leaderboard_row_container">
							<span className="msr_sbg_single_box_bottom_lb">
								<p>Leaderboard</p>
								<span id="leaderboard_expand_collapse_03" className="leaderboard_expand_collapse">
									<p></p>
								</span>
							</span>
							<span className="month_btn btn_selected_bgcolor">
								<p>This Month</p>
							</span><span className="alltime_btn btn_unselected_bgcolor">
								<p>All Time</p>
							</span>
							<div id="">
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_gold"></span>
									<span className="leaderboard_score">
										<p>01:23:05</p>
									</span>
									<span className="leaderboard_name">
										<p>Wandalin Lawerenz</p>
									</span>
								</div>
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_silver"></span>
									<span className="leaderboard_score">
										<p>01:25:33</p>
									</span>
									<span className="leaderboard_name">
										<p>Jengo Sas</p>
									</span>
								</div>
								<div className="leaderboard_row leaderboard_row_last leaderboard_row_bronze">
									<span className="leaderboard_icon leaderboard_icon_bronze"></span>
									<span className="leaderboard_score">
										<p>01:28:17</p>
									</span>
									<span className="leaderboard_name">
										<p>Alin Addison</p>
									</span>
								</div>

								<div className="expanded_leaderboard_container">
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>4.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:28:25</p>
										</span>
										<span className="leaderboard_name">
											<p>Hannah Bullock</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>5.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:28:34</p>
										</span>
										<span className="leaderboard_name">
											<p>Misha Boucher</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:28:59</p>
										</span>
										<span className="leaderboard_name">
											<p>Jens Parry</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:29:12</p>
										</span>
										<span className="leaderboard_name">
											<p>Bo Xun</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>7.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:29:46</p>
										</span>
										<span className="leaderboard_name">
											<p>Taisiya Machado</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>8.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:29:54</p>
										</span>
										<span className="leaderboard_name">
											<p>Vittore Olander</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>9.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:30:07</p>
										</span>
										<span className="leaderboard_name">
											<p>Hafsa Greene</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>10.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:30:42</p>
										</span>
										<span className="leaderboard_name">
											<p>Gennady Tamboia</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>11.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:32:22</p>
										</span>
										<span className="leaderboard_name">
											<p>Loan Killam</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>12.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:33:08</p>
										</span>
										<span className="leaderboard_name">
											<p>Lamberto McNiven</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>13.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:33:28</p>
										</span>
										<span className="leaderboard_name">
											<p>Kamryn Tan</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>14.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:34:01</p>
										</span>
										<span className="leaderboard_name">
											<p>Tracie Mulloy</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>15.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:34:59</p>
										</span>
										<span className="leaderboard_name">
											<p>Purnima Reyer</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>16.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:36:36</p>
										</span>
										<span className="leaderboard_name">
											<p>Brent Raskob</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>17.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:38:24</p>
										</span>
										<span className="leaderboard_name">
											<p>Su-Jin Leonardsson</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>18.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:39:20</p>
										</span>
										<span className="leaderboard_name">
											<p>Tullio Murgatroyd</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>19.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:45:46</p>
										</span>
										<span className="leaderboard_name">
											<p>Severino Silvestri</p>
										</span>
									</div>
									<div className="leaderboard_row leaderboard_row_last">
										<span className="leaderboard_icon">
											<p>20.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:48:09</p>
										</span>
										<span className="leaderboard_name">
											<p>Adam Alexander</p>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="msr_sbg_single_box_04" className="msr_sbg_single_box">
					<p className="msr_sbg_single_box_bottom_title">Memory Game</p>
					<p className="msr_sbg_single_box_bottom_pb">Reach The Target</p>
					<div id="msr_sbg_single_box_image_04" className="msr_sbg_single_box_image"></div>
					<div className="msr_sbg_single_box_bottom_container">
						<div className="play_game_btn">
							<p>PLAY</p>
						</div>
						<div className="leaderboard_row_container">
							<span className="msr_sbg_single_box_bottom_lb">
								<p>Leaderboard</p>
								<span id="leaderboard_expand_collapse_04" className="leaderboard_expand_collapse">
									<p></p>
								</span>
							</span>
							<span className="month_btn btn_selected_bgcolor">
								<p>This Month</p>
							</span><span className="alltime_btn btn_unselected_bgcolor">
								<p>All Time</p>
							</span>
							<div id="">
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_gold"></span>
									<span className="leaderboard_score">
										<p>01:23:05</p>
									</span>
									<span className="leaderboard_name">
										<p>Yeong-Suk Wan</p>
									</span>
								</div>
								<div className="leaderboard_row">
									<span className="leaderboard_icon leaderboard_icon_silver"></span>
									<span className="leaderboard_score">
										<p>01:25:33</p>
									</span>
									<span className="leaderboard_name">
										<p>Shani Ybarra</p>
									</span>
								</div>
								<div className="leaderboard_row leaderboard_row_last leaderboard_row_bronze">
									<span className="leaderboard_icon leaderboard_icon_bronze"></span>
									<span className="leaderboard_score">
										<p>01:28:17</p>
									</span>
									<span className="leaderboard_name">
										<p>Nick Carver</p>
									</span>
								</div>

								<div className="expanded_leaderboard_container">
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>4.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:28:58</p>
										</span>
										<span className="leaderboard_name">
											<p>Anuj Aquino</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>5.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:28:45</p>
										</span>
										<span className="leaderboard_name">
											<p>Jozo Aleksandrov</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:28:49</p>
										</span>
										<span className="leaderboard_name">
											<p>Burgundy Hampson</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>6.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:30:12</p>
										</span>
										<span className="leaderboard_name">
											<p>Casimir Arnoni</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>7.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:31:05</p>
										</span>
										<span className="leaderboard_name">
											<p>Phillip Halloran</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>8.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:33:49</p>
										</span>
										<span className="leaderboard_name">
											<p>Yeong-Ho Chang</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>9.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:35:45</p>
										</span>
										<span className="leaderboard_name">
											<p>Josefine Fabian</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>10.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:37:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Fiachra Ahearn</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>11.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:37:27</p>
										</span>
										<span className="leaderboard_name">
											<p>Georgina Dickson</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>12.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:38:20</p>
										</span>
										<span className="leaderboard_name">
											<p>Pauline Hase</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>13.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:40:05</p>
										</span>
										<span className="leaderboard_name">
											<p>Geffrey Schuhart</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>14.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:42:21</p>
										</span>
										<span className="leaderboard_name">
											<p>Vera Stringer</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>15.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:43:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Vera Stringer</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>16.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:44:23</p>
										</span>
										<span className="leaderboard_name">
											<p>Benedita Rocco</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>17.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:47:16</p>
										</span>
										<span className="leaderboard_name">
											<p>Lars Milton</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>18.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:48:04</p>
										</span>
										<span className="leaderboard_name">
											<p>Ralph Mondadori</p>
										</span>
									</div>
									<div className="leaderboard_row">
										<span className="leaderboard_icon">
											<p>19.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:49:36</p>
										</span>
										<span className="leaderboard_name">
											<p>Victor Rupertson</p>
										</span>
									</div>
									<div className="leaderboard_row leaderboard_row_last">
										<span className="leaderboard_icon">
											<p>20.</p>
										</span>
										<span className="leaderboard_score">
											<p>01:52:54</p>
										</span>
										<span className="leaderboard_name">
											<p>Conan Biermann</p>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="subject_container_title subject_container_title_sbg">
					<p>
						See if you can beat your personal best time
					</p>
				</div>

        {/* <asp:Repeater ID="rptGameTitle" runat="server">
					<ItemTemplate>
						<asp:HiddenField ID="hidFileID" runat="server" Value='<%#Eval("FileID") %>' />
						<div id="divGameBlock<%#Container.ItemIndex%>" className="msr_sbg_single_box">
							<p className="msr_sbg_single_box_bottom_title"><%#Eval("ChildShortDesc")%></p>
							<p className="msr_sbg_single_box_bottom_pb">My Best: 00:28:02</p>
							<div id="msr_sbg_single_box_image_0<%#Container.ItemIndex + 1%>" className="msr_sbg_single_box_image" style="background-image: url('<%#Eval("ImgSrc")%>')"></div>
							<div className="msr_sbg_single_box_bottom_container">
								<asp:LinkButton runat="server" OnClick="lnkbtnPlay_Click" CommandArgument='<%#Eval("FileID") + "," + Eval("DICFileName") %>'>
                        <div className="play_game_btn">
									<p>Play</p>
                        </div>
								</asp:LinkButton>
								<div className="leaderboard_row_container">
									<span className="msr_sbg_single_box_bottom_lb">
										<p>Leaderboard</p>
										<span id="leaderboard_expand_collapse_05" className="leaderboard_expand_collapse">
											<p></p>
										</span>
									</span>
									<span className="month_btn btn_selected_bgcolor">
										<p>This Month</p>
									</span><span className="alltime_btn btn_unselected_bgcolor">
										<p>All Time</p>
									</span>
									<div id="">
										<div className="leaderboard_row">
											<span className="leaderboard_icon leaderboard_icon_gold"></span>
											<span className="leaderboard_score">
												<p>00:19:56</p>
											</span>
											<span className="leaderboard_name">
												<p>Chichi Germano</p>
											</span>
										</div>
										<div className="leaderboard_row">
											<span className="leaderboard_icon leaderboard_icon_silver"></span>
											<span className="leaderboard_score">
												<p>00:20:21</p>
											</span>
											<span className="leaderboard_name">
												<p>Remigio Franklyn</p>
											</span>
										</div>
										<div className="leaderboard_row leaderboard_row_last leaderboard_row_bronze">
											<span className="leaderboard_icon leaderboard_icon_bronze"></span>
											<span className="leaderboard_score">
												<p>00:20:59</p>
											</span>
											<span className="leaderboard_name">
												<p>Delta Macey</p>
											</span>
										</div>

										<div className="expanded_leaderboard_container">
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>4.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:21:05</p>
												</span>
												<span className="leaderboard_name">
													<p>Thu Simen</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>5.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:21:16</p>
												</span>
												<span className="leaderboard_name">
													<p>Faustina Ash</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>6.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:21:25</p>
												</span>
												<span className="leaderboard_name">
													<p>Solange Ajello</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>6.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:21:33</p>
												</span>
												<span className="leaderboard_name">
													<p>Presley Woodham</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>7.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:22:24</p>
												</span>
												<span className="leaderboard_name">
													<p>Augustin Gross</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>8.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:22:54</p>
												</span>
												<span className="leaderboard_name">
													<p>Cesar Gilliam</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>9.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:22:59</p>
												</span>
												<span className="leaderboard_name">
													<p>Jane Kristoffersen</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>10.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:23:03</p>
												</span>
												<span className="leaderboard_name">
													<p>Rosa Heinrichs</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>11.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:23:18</p>
												</span>
												<span className="leaderboard_name">
													<p>Derren Plank</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>12.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:23:55</p>
												</span>
												<span className="leaderboard_name">
													<p>Hanna MacBride</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>13.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:24:08</p>
												</span>
												<span className="leaderboard_name">
													<p>Albino Belmont</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>14.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:24:36</p>
												</span>
												<span className="leaderboard_name">
													<p>Daniel Lindgren</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>15.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:24:54</p>
												</span>
												<span className="leaderboard_name">
													<p>Marlene Rennoll</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>16.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:25:17</p>
												</span>
												<span className="leaderboard_name">
													<p>Kazimir Fletcher</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>17.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:25:25</p>
												</span>
												<span className="leaderboard_name">
													<p>Clint Raith</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>18.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:25:48</p>
												</span>
												<span className="leaderboard_name">
													<p>Prabhakara Rahan</p>
												</span>
											</div>
											<div className="leaderboard_row">
												<span className="leaderboard_icon">
													<p>19.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:25:59</p>
												</span>
												<span className="leaderboard_name">
													<p>Joakim Segreti</p>
												</span>
											</div>
											<div className="leaderboard_row leaderboard_row_last">
												<span className="leaderboard_icon">
													<p>20.</p>
												</span>
												<span className="leaderboard_score">
													<p>00:26:24</p>
												</span>
												<span className="leaderboard_name">
													<p>Ben Weber</p>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ItemTemplate>
				</asp:Repeater> */}

        <div className="subject_middle_gap"></div>
        <div className="subject_bottom_gap"></div>
        </div>
      </div>
    </form>
  );
};

export default SkillBuildingGames;
