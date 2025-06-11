import React, { useState, useEffect } from "react";
import "./Style/MSRReports.css";
import "./Style/common.css";
import "./Style/header.css";
import "./Style/trophy_club.css";
import trophy_club_0 from './Image/trophy_club/trophy_club_0.png';
import Loading from "../../Common/Loading";
import Header from "../../Common/Header";
import Section from "../../Common/Section";

const MSRReports: React.FC = () => {
  const [myPoints, setMyPoints] = useState(0);
  const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const [trophyData, setTrophyData] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [purchases, setPurchases] = useState<any[]>([6405]);
  const [imageSrc, setImageSrc] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  

  useEffect(() => {

    setMyPoints(1200);
    setOverallWeeklyProgress(75);
    setWeekCount(10);
    setTrophyData(["Gold", "Silver", "Bronze"]);
    // setUserName("Varun");
  }, []);

  useEffect(() => {
    const UserName = sessionStorage.getItem('FName');
    const UserLogin = sessionStorage.getItem('login');
    const UserAvatar = sessionStorage.getItem('CurrentAvatar');
    sessionStorage.setItem("CurrentPage", "StudyRoom");


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

  return (
    <form>
      		<a href="#" className="back-to-top">Back to Top</a>
          <a href="#" className="back-to-bottom" id="back_to_bottom_link">Back to Top</a>
        <div id="main_top_container">
          <Header />
          <Section />


            <div id="divSubjectBanner" className="subject_banner">
                <div className="subject_arrow_left_container" id="divsubject_arrow_left" >
                <div className="subject_arrow_text subject_arrow_text_left">
                  <label id="lblArrowLeftText"></label>
                </div>
                <a id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left"></a>
              </div>
                <div className="subject_arrow_right_container" id="divsubject_arrow_right" >
                <div className="subject_arrow_text subject_arrow_text_right">
                  <label id="lblArrowRightText"></label>
                </div>
                <a id="linkbtnArrowRight" className="subject_arrow subject_arrow_right"></a>
              </div>
            </div>
        </div>

        <div id="divSubjectContainer" className="subject_container">
            <div id="subject_container_right_bg_images_math" className="subject_container_right_bg_images"></div>
            <div className="subject_top_gap"></div>

            <a id="linkbtnStudentActivityReport" className="activity_btn">
                          <span id="md_wlp_icon" className="activity_icon activity_icon_mdreport"></span>
                          <span className="lesson-text"><a href="/StudentActivityReport">View your Student Report</a></span>
                          <span className="button_right_text">
                              <span>VIEW NOW</span>
                          </span>
            </a>

            <a id="linkbtnUserDiary" className="activity_btn">
                          <span id="md_wlp_icon" className="activity_icon activity_icon_mdreport"></span>
                          <span className="lesson-text"><a href="/UserDiary">View your User Diary</a></span>
                          <span className="button_right_text">
                              <span>VIEW NOW</span>
                          </span>
            </a>

            <a id="linkbtnMDReport" className="activity_btn">
                          <span id="md_wlp_icon" className="activity_icon activity_icon_mdreport"></span>
                    <span id="MDReport" className="lesson-text"><a href="/StudentMathsDoctorReport">View your Maths Doctor Report</a></span>
                          <span className="button_right_text">
                              <span>VIEW NOW</span>
                          </span>
            </a>

            <div className="subject_bottom_gap"></div>
          </div>
    </form>
  );
};

export default MSRReports;
