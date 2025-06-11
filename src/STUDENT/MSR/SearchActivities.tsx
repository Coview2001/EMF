import React, { useState, useEffect } from "react";
import "./Style/common.css";
import "./Style/header.css";
import "./Style/SearchActivities.css";
import "./Style/trophy_club.css";
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';

interface StoreDetails {
  StoreID: string;
  StoreTitle: string;
  TermsAndCondition: string;
}

interface PurchaseStore {
  StoreID: string;
  StoreTitle: string;
  Price: string;
  StoreImageLink: string;
}

interface Trophy {
  TrophyRange: string;
}
const SearchActivities: React.FC = () => {
  const [storeDetails] = useState<StoreDetails[]>([
    {
      StoreID: "1",
      StoreTitle: "Example Item",
      TermsAndCondition: "Example Terms and Conditions",
    },
  ]);

  const [purchaseStore] = useState<PurchaseStore[]>([
    {
      StoreID: "1",
      StoreTitle: "Example Purchase Item",
      Price: "$10",
      StoreImageLink: "url('image.jpg')",
    },
  ]);

  const [trophies] = useState<Trophy[]>([
    { TrophyRange: "0-50" },
    { TrophyRange: "51-100" },
  ]);


    const [weeklyProgress, setWeeklyProgress] = useState(50);
    const [myPoints, setMyPoints] = useState(0);
    const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
    const [weekCount, setWeekCount] = useState(0);
    const [trophyData, setTrophyData] = useState<string[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [purchases, setPurchases] = useState<any[]>([6405]);
    const [imageSrc, setImageSrc] = useState('');
    const [searchText, setSearchText] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

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
  if (searchText === "") {
    setSearchResults([]);
    return;
  }

  const delayDebounce = setTimeout(() => {
    fetch("http://localhost:5000/SearchActivities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Login: sessionStorage.getItem("login"),
        SchoolCode: sessionStorage.getItem("SchoolCode"),
        FamilyCode: sessionStorage.getItem("FamilyCode"),
        KeyWord: searchText, // This is correct!
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Search results:", data);
        setSearchResults(data);
      })
      .catch((err) => console.error("Search failed:", err));
  }, 300);

  return () => clearTimeout(delayDebounce);
}, [searchText]);



  const handlePurchase = (storeID: string) => {
    // console.log(`Purchase confirmed for StoreID: ${storeID}`);
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
          <a href="#" className="back-to-top">Back to Top</a>
          <a href="#" className="back-to-bottom" id="back_to_bottom_link">Back to Top</a>
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
                <a href="#">ACHIEVEMENTS</a>
              </div>
              <div id="user_strip_right_container">
              <div id="divAvatarContainer" className="avatar_container">
                <img
                  id="imgAvatar"
                  src={imageSrc || "/default-avatar.png"}
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

        <div id="tool_bar">
            <div id="tool_bar_container" className="section_div">
                <div className="back_sml_btn">
                    <a id="linkbtnBack" href="/ExploreActivities">Back</a>
                </div>
            </div>
        </div>

        <div id="contents_math" className="contents section_container">

            <div id="search_page_container" className="section_div">
                <div id="search_page_left_div">
                    <p className="search_page_title">
                        Search
                    </p>

                    <input id="txtSearchActivityText" name="search_text" className="txtSearchActivityTextT"
                      // style={{width:'90%', padding:'12px 20px', margin:'8px 0', display:'inline-block', border:'1px solid #ccc', borderRadius:'4px', boxSizing:'border-box'}}  
                    />

                    <p className="search_page_subtitle">
                      Search results
                    </p>

                    <div id="search_left_results_container" className="search_left_results">
  {searchResults.length === 0 && searchText !== "" && (
    <p>No results found.</p>
  )}

  {searchResults.map((item, index) => (
    <div
      key={index}
      className={`search-list ${item.CssClassForSearchItems ?? ''}`}
      onClick={() => console.log("Clicked:", item.LessonDetails)} // Simulate activity start
      style={{
        cursor: "pointer",
        padding: "6px 12px",
        borderBottom: "1px solid #ddd",
        fontSize: "16px",
      }}
    >
      {item.Activity || item.KeyWord} {/* Show ActivityName if available */}
    </div>
  ))}
</div>

                    {/* <asp:Repeater id="rptSearchResult" >
                        <HeaderTemplate>
                            <div id="search_left_results_container" className="search_left_results">
                                <p className="search_page_subtitle">
                                    Search results
                                </p>
                        </HeaderTemplate>

                        <ItemTemplate>
                            <asp:LinkButton OnClick="linkbtnActivity_Click" CommandArgument='<%# Eval("KeyWord") %>' >
                        <div id='divSelectedSearchListItem<%# Container.ItemIndex + 1 %>' className='<%# Eval("CssClassForSearchItems") %>'>
                           <p className="search-list"  enableviewstate="true"><%# Eval("KeyWord") %></p>
                        </div>                       
                            </asp:LinkButton>
                        </ItemTemplate>

                        <FooterTemplate>
                            </div>
                        </FooterTemplate>
                    </asp:Repeater> */}
                    </div>
                    <div className="subject_middle_gap search_middle_gap"></div>
                </div>

                <div id="search_page_right_div" >
                    <p id="pActivitySearchTitle" className="search_page_subtitle" ></p>

                    {/* <asp:Repeater id="rptUnitCode" >
                        <ItemTemplate>

                            <asp:HiddenField id="hidDICFileName"  Value='<%# Eval("DICFileName") %>' />
                            <asp:HiddenField id="hidKeyWord"  Value='<%# Eval("KeyWord") %>' />
                            <div id="" className="search_result_year">
                                <p><%# Eval("ShortDesc") %></p>
                            </div>

                            <asp:Repeater id="rptChapterCode" OnItemDataBound="rptChapterCode_ItemDataBound" >
                                <ItemTemplate>
                                    <asp:HiddenField id="hidDICFileName"  Value='<%# Eval("DICFileName") %>' />
                                    <asp:HiddenField id="hidKeyWord"  Value='<%# Eval("KeyWord") %>' />
                                    <asp:HiddenField id="hidUnitCode"  Value='<%# Eval("UnitCode") %>' />
                                    <asp:HiddenField id="hidUnitName"  Value='<%# Eval("UnitName") %>' />
                                    <asp:HiddenField id="hidChapterCode"  Value='<%# Eval("ChapterCode")%>' />
                                    <asp:HiddenField id="hidChapterName"  Value='<%# Eval("ChapterName") %>' />
                                    <div id="" className="search_result_unit">
                                        <p><%# Eval("ChildShortDesc1") %></p>
                                    </div>
                                    <div id="" className="search_result_chapter">
                                        <p><%# Eval("ChildShortDesc2") %></p>
                                    </div>

                                    <asp:Repeater id="rptActivityCode" >
                                        <ItemTemplate>

                                            <asp:LinkButton OnClick="linkbtnStartActivity_Click" CommandArgument='<%# Eval("LessonDetails") %>' CssClass="search_activity" >
                                    <div className="search_last_score_percentage">
                                       <p><%# Eval("Score") %></p>
                                    </div>
                                    <div className='<%# Eval("CssClassForActivity") %>'></div>
                                    <div className="activity_name">
                                       <p><%# Eval("Activity") %></p>
                                    </div>
                                            </asp:LinkButton>

                                        </ItemTemplate>
                                    </asp:Repeater>

                                </ItemTemplate>
                            </asp:Repeater>

                        </ItemTemplate>
                    </asp:Repeater> */}
                </div>

                <div className="subject_middle_gap"></div>
                <div className="subject_middle_gap"></div>
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

export default SearchActivities;
