import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/common.css";
import "./Style/Profile.css";
import Header from "../../Common/Header";

const Profile: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [name, setName] = useState();
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("07/05/2001");
  const [grade, setGrade] = useState("Grade 12");
  const [subjectMinutes, setSubjectMinutes] = useState({
    subject1: 120,
    subject2: 90,
  });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const navigate = useNavigate();
  

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
    document.body.classList.add('custom-background');
    return () => {
      document.body.classList.remove('custom-background');
    };
  }, []);


  const handleModifyDetails = () => {
    // console.log("Modify details clicked");
  };

  const handleChangeAvatar = () => {
    // console.log("Change avatar clicked");
    navigate('/ChangeAvatar');
  };

  const handleModifyLessonPlan = () => {
    // console.log("Modify lesson plan clicked");
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
    <form id="form1">
      <div>
        <div id="main_top_container">
          <Header />
          <div id="msr_my_profile_title_bar" className="section_container section_title_bar">
            <div id="bt_msr_my_profile" className="section_div bar_section"></div>
          </div>
        </div>

        <div id="msr_my_profile" className="">
          <div className="section_div" id="section_div">
            <div className="centered_container">
                <div className="section_block">
                  <div id="section_icon_01" className="section_icon"></div>
                  <div className="right_content">
                    <p className="section_title">Profile</p>
                    <hr className="msr_my_profile_hr" />
                    <div className="left_text">
                      <p className="section_text">
                        <b>
                          Name<br />
                          Gender<br />
                          Date of birth<br />
                          Grade/Year<br />
                        </b>
                      </p>
                    </div>
                    <div className="right_text">
                      <p className="section_text">
                        {userName}<br />
                        {gender}<br />
                        {dob}<br />
                        {grade}<br />
                      </p>
                    </div>
                    <a className="section_link" onClick={handleModifyDetails}>
                      Modify details
                    </a>
                  </div>
                </div>

                <div className="section_block">
                  <div id="section_icon_02" className="section_icon"></div>
                  <div className="right_content">
                    <p className="section_title">My Avatar</p>
                    <hr className="msr_my_profile_hr" />
                    <div id="avatar_container">
                      <div id="divCurrentAvatar" className="avatar_box">
                        {imageSrc ? (
                          <img id="imgAvatar" src={imageSrc} alt="Avatar" />
                        ) : null}
                      </div>
                    </div>

                    <div id="mobile_Change">
                <div id="mobile_Avatar" className="mobile_dropdown">
                  <div className="mobile_nav_item">
                    <a id="lnkChangeAvatarMobile" className="section_link" onClick={handleChangeAvatar}>Change Avatar</a>
                    </div>
                  </div>
                        </div>
                    <a className="section_link" onClick={handleChangeAvatar}>
                      Change avatar
                    </a>
                    <a className="section_link" href="/MyIncentives">Get more avatars</a>
                  </div>
                </div>

                <div  id="divLPSettings" className="section_block last_section_block">
                  <div id="section_icon_03" className="section_icon"></div>
                  <div className="right_content">
                    <p className="section_title">Lesson Plan Settings</p>
                    <hr className="msr_my_profile_hr" />
                    <p className="section_text">Minutes to spend each week on your lesson plan</p>
                    <div className="left_text">
                    <p className="section_text">
                      <b>
                        <span id="subject_01" ></span><br />
                        <span id="subject_02">English</span><br />
                      </b>
                    </p>
                    </div>
                    <div className="right_text">
                      <p className="section_text">
                        <label id="lblsubmin01" className="subjects_minutes_01">{subjectMinutes.subject1} minutes</label><br />
                        <label id="lblsubmin02" className="subjects_minutes_02">{subjectMinutes.subject2} minutes</label><br />
                      </p>
                    </div>
                    <div id="mobile_Modify">
                      <div id="mobile_LessonPlan" className="mobile_dropdown">
                        <div className="mobile_nav_item">
                          <a id="lnkModifyLessonMobile" className="section_link" onClick={handleModifyLessonPlan}>Modify</a>
                        </div>
                      </div>
                    </div>
                    <a id="lnkModifyLesson" className="section_link" onClick={handleModifyLessonPlan}>
                      Modify
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
