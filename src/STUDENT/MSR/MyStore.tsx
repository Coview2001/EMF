import React, { useState, useEffect } from "react";
import "./Style/common.css";
import "./Style/header.css";
import "./Style/MyStore.css";
import "./Style/trophy_club.css";
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import Header from "../../Common/Header";
import Section from "../../Common/Section";
import { data } from "jquery";

interface StoreDetails {
  StoreID: string;
  StoreTitle: string;
  TermsAndCondition: string;
  StoreImageLink : string;
}

interface PurchaseStore {
  StoreID: string;
  StoreTitle: string;
  Price: string;
  StoreImageLink: string;
}

interface Store {
  StoreTitle: string;
  Points: number;
  Image : string;
}

interface Trophy {
  TrophyRange: string;
}



const MyStore: React.FC = () => {
  

  const [storeDetails] = useState<StoreDetails[]>([
    {
      StoreID: "1",
      StoreTitle: "Example Item",
      TermsAndCondition: "Example Terms and Conditions",
      StoreImageLink : "Smiggle.png",
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
    const [purchases, setPurchases] = useState<Trophy[]>([]);
    const [imageSrc, setImageSrc] = useState('');
    const [stores, setStores] = useState<Store[]>([
      { StoreTitle: "DONATION_starlight", Image: "DONATION_starlight", Points: 15000},
      { StoreTitle: "ITEM_smiggle20", Image: "ITEM_smiggle20", Points: 60000},
      { StoreTitle: "ITEM_myer20", Image: "ITEM_myer20", Points: 60000},
      { StoreTitle: "ITEM_wish20", Image: "ITEM_wish20", Points: 60000},
      { StoreTitle: "ITEM_wish10", Image: "ITEM_wish10", Points: 35000}
    ]);

    

    const handlePurchase = (storeID: string) => {
      // console.log(`Purchase confirmed for StoreID: ${storeID}`);
    };
  
    useEffect(() => {
      fetch("http://localhost:5000/Mystore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Login: "Child1", FamilyCode: "kedemo", SchoolCode: "DLR_KE_AU"}),
      })
      .then(response => response.json())
      .then(data => {
        setStores(data);
        // console.log(data.map((data: { Image: any; }) => data.Image));
      })
      .catch(err => console.error("Error fetching title:", err));
    
      setMyPoints(60000);
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

          const handlePurchaseStoreItem = (title: string) => {
            alert(`Purchased store item: ${title}`);
            const i = stores.findIndex((stores) => stores.StoreTitle === title);
            setMyPoints((prevPoints) => prevPoints - stores[i].Points); 
          };


  return (
    <form>
      {storeDetails.map((detail) => (
        <div
          key={detail.StoreID}
          id={`mi_store_details_lightbox${detail.StoreID}`}
          className="mi_store_details_lightbox"
        >
          <p>
            <span
              id={`mi_store_details_lightbox_main_title${detail.StoreID}`}
              className="title_text wlp_add_activity_title_text"
            >
              Store Item Terms and Conditions
            </span>
          </p>
          <p>
            <span
              id={`mi_store_details_lightbox_title${detail.StoreID}`}
              className="mi_store_details_lightbox_title"
            >
              {detail.StoreTitle}
            </span>
            <span className="mi_store_details_lightbox_text">
              {detail.TermsAndCondition}
            </span>
          </p>
          <div className="button_box">
            <div
              id={`mi_store_details_lightbox_ok_btn${detail.StoreID}`}
              className="general_btn two_btn_lightbox"
            >
              <a className={detail.StoreID}>OK</a>
            </div>
          </div>
        </div>
      ))}

      {purchaseStore.map((store) => (
        <div
          key={store.StoreID}
          id={`mi_store_lightbox${store.StoreID}`}
          className="mi_store_lightbox"
        >
          <p>
            <span
              id={`mi_store_confirm_main_title${store.StoreID}`}
              className="title_text wlp_add_activity_title_text"
            >
              Confirm Item Purchase
            </span>
          </p>
          <div
            id={`confirm_store_item_img${store.StoreID}`}
            className="confirm_store_item_img"



            style={{ backgroundImage: `url(${store.StoreImageLink})` }}


            
          >
            <div
              id={`store_item_tick${store.StoreID}`}
              className="store_tick"
            ></div>
          </div>
          <p>
            <span
              id={`mi_store_lightbox_title${store.StoreID}`}
              className="mi_store_lightbox_title"
            >
              {store.StoreTitle}
            </span>
            <span className="confirm_purchase_store_price">
              <span
                id={`confirm_purchase_store_price_id${store.StoreID}`}
                className="confirm_purchase_store_price_blue"
              >
                {store.Price}
              </span>
            </span>
          </p>
          <div className="button_box">
            <div
              id={`mi_store_lightbox_cancel_btn${store.StoreID}`}
              className="general_btn two_btn_lightbox two_btn_left mi_store_lightbox_cancel_btn"
            >
              <a id={`lca${store.StoreID}`}>Cancel</a>
            </div>
            <div
              id={`mi_store_lightbox_confirm_btn${store.StoreID}`}
              className="general_btn two_btn_lightbox mi_store_lightbox_confirm_btn"
            >
              <button onClick={(e) => { e.preventDefault(); handlePurchase(store.StoreID); }}>
                Confirm
              </button>

            </div>
            <div
              id={`mi_store_lightbox_ok_btn${store.StoreID}`}
              className="general_btn two_btn_lightbox mi_store_lightbox_ok_btn"
            >
              <a id={`lco${store.StoreID}`}>OK</a>
            </div>
          </div>
        </div>
      ))}


        <a href="#" className="back-to-top">Back to Top</a>
        <a href="#" className="back-to-bottom" id="back_to_bottom_link">Back to Top</a>
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
                <div id="mi_page_btn_store" className="mi_page_btn mi_page_btn_selected">
                    <a id="hlinkStore" href="/MyStore" >Store</a></div>
                            <div id="mi_page_btn_avatars" className="mi_page_btn ">
                    <a id="hlinkMyIncentives" href="/MyIncentives">Avatars</a></div>
                <div id="mi_page_btn_comp" className="mi_page_btn">
                    <a href="/MyCompsCurrent">Comps</a></div>            
                <div id="mi_page_btn_purchase" className="mi_page_btn mi_page_btn_last">
                    <a id="hlinkPurchases" href="/AllPurchases" >Purchases</a></div>
            </div>

            <div id="mi_page_store" className="contents section_container mi_page_bg" > 
            <div id="mi_avatars_container" className="section_div  d-flex justify-content-center">


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
                
          {/* <div className="contents section_container mi_page_bg"> */}
            {/* <div className="section_div d-flex justify-content-center" > */}
              {(stores || []).map((store) => (
                <div className="mi_store_single_box mi_store_single_box_expand" key={store.StoreTitle}>
                  <img
                  className="mi_store_single_box_image"
                    src={`https://www.elearnoncloud.com/Storage/assets/Store/${store.Image}.png`}
                    alt={store.StoreTitle}
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://www.elearnoncloud.com/Storage/assets/Avatar/reading.png";
                      }}
                  />
                  <div className="mi_store_single_box_right_container">
                  <p className="mi_store_single_box_right_title">
                    {store.StoreTitle}
                  </p>
                  <p className="mi_store_single_box_right_price">
                    {store.Points} Points
                  </p>
                  <div className="mi_store_single_box_right_btn mi_store_single_box_right_buy_btn">
                  <a onClick={() => handlePurchaseStoreItem(store.StoreTitle)}>
                    {myPoints < store.Points ? "EARN MORE POINTS" : "BUY"}
                  </a>
                  </div>
                  <div className="mi_store_single_box_right_btn mi_store_single_box_right_details">
                    <a>DETAILS</a>
                  </div>
                  </div>
                </div>
              ))}

            {/* </div> */}
            {/* </div> */}
            </div>
            <div className="subject_middle_gap"></div>
            <div className="subject_middle_gap"></div>
        </div>

          </div>
    </form>
  );
};

export default MyStore;