// import React, { useState, useEffect } from "react";
// import "./Style/common.css";
// import "./Style/header.css";
// import "./Style/ChangeAvatar.css";
// import courage from  '../../DummyImgs/courage.png';
// import monkey from '../../DummyImgs/monkey.png';
// import sunshine from '../../DummyImgs/sunshine.png';

// const ChangeAvatar: React.FC = () => {
//   const [userName, setUserName] = useState<string>("");
//   const [imageSrc, setImageSrc] = useState('');
//   const [avatars, setAvatars] = useState(
//     [
//       { key: "url1", value: "selected" },
//       { key: "url2", value: "" },
//       { key: "url3", value: "" }
//     ]
//   );

//   const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);


//         useEffect(() => {
//           const UserName = sessionStorage.getItem('fName');
//           const UserLogin = sessionStorage.getItem('login');
//           const UserAvatar = sessionStorage.getItem('CurrentAvatar');

//           if (UserName !== null) {
//             setUserName(UserName);
//           }
//           try {
//             if (UserAvatar) {
//               const img = require(`../../DummyImgs/${UserAvatar}`);
//               setImageSrc(`${UserAvatar}`);
//             }
//           } catch (error) {
//             console.error('Error loading image:', error);
//           }
//           document.body.classList.add('StudyRoom-background');
//           return () => {
//             document.body.classList.remove('StudyRoom-background');
//           };
//         }, []);

//   const handleAvatarClick = (index: number) => {
//     const updatedAvatars = avatars.map((avatar, i) => ({
//       ...avatar,
//       value: i === index ? "selected" : "",
//     }));
//     setAvatars(updatedAvatars);
//     setSelectedAvatar(avatars[index].key);
//   };

//   const handleSave = () => {
//     console.log("Saved Avatar:", selectedAvatar);
//   };

//   const handleCancel = () => {
//     console.log("Cancelled Avatar Change");
//   };

//   const handleBack = () => {
//     console.log("Navigating Back");
//   };

//   return (
//     <form id="form1">
//       <div className="main_top_container">
//         <div id="header">
//           <div className="section_div">
//               <div id="mobile_menu">
//                 <div id="mobile_box" className="mobile_dropdown">
//                   <div className="mobile_nav_item">
//                     <a href="/StudyRoom">HOME</a>
//                   </div>
//                   <div className="mobile_nav_item">
//                     <a href="/MSRReports">REPORTS</a>
//                   </div>
//                   <div className="mobile_nav_item" style={{ color: "#b9b9b9" }}>
//                     PROFILE
//                   </div>
//                   <div className="mobile_nav_item mobile_nav_item_hidden">
//                     <a href="/SelectUser">CHANGE USER</a>
//                   </div>
//                   <div className="mobile_nav_item mobile_nav_item_hidden">
//                     <a href="/LoggedOut">LOG OUT</a>
//                   </div>
//                 </div>
//               </div>
//               <div id="logout_btn">
//                 <a href="/LoggedOut">Log Out</a>
//               </div>
//               <div id="change_user_btn">
//                 <a href="/SelectUser">Change User</a>
//               </div>
//               <p id="username_text" className="header_text"><label id="lblUserName" className="header_text">{userName}</label></p>
//               <div id="scrolled_nav_sub">
//                 <div id="divlogo" className="scrolled_logo" ></div>
//                 <div id="sn4_sub" className="scrolled_nav_item subbed">
//                   <a  id="linkstudy" href="/StudyRoom">HOME</a>
//                 </div>
//                 <div id="sn3_sub" className="scrolled_nav_item subbed">
//                   <a id="linkbtnreport" href="/MSRReports" >REPORTS</a>
//                 </div>
//                 <div id="sn2_sub" className="scrolled_nav_item subbed">
//                   <a id="lnkbtnProfile" href="/Profile"  style={{ color: "#b9b9b9" }}>PROFILE</a>
//                 </div>
//               </div>
//           </div>
//         </div>
//       </div>

//       <div id="change_avatar" style={{display: 'block'}}>
//           <p>
//             <span className="title_text">Change avatar</span>
//           </p>
//           <div id="change_avatar_collection">
//             {avatars.map((avatar, index) => (
//               <div key={index} id={`divAvatar_${index + 1}`} className={`change_avatar_item ${avatar.value}`} style={{ backgroundImage: `url(${avatar.key})` }} onClick={() => handleAvatarClick(index)}>
//                 <span id={`tick_check_${index + 1}`} className={avatar.value} ></span>
//               </div>
//             ))}
//           </div>
//           <div className="a_box">
//             <div id="change_avatar_cancel_btn" className="general_btn two_btn_lightbox single_btn" onClick={handleCancel}>
//               <a id="lnkbtnCancel" > Cancel </a>
//             </div>
//             <div id="change_avatar_cancel_btn" className="general_btn two_btn_lightbox single_btn" onClick={handleCancel}>
//               <a id="lnkbtnSave" > Save </a>
//             </div>
//             <div id="change_avatar_back_btn" className="general_btn two_btn_lightbox single_btn" onClick={handleBack}>
//               <a id="lnkbtnBack">Back</a>
//             </div>
//           </div>
//         </div>
//     </form>
//   );
// };

// export default ChangeAvatar;



import React, { useState, useEffect } from "react";
import "./Style/common.css";
import "./Style/header.css";
import "./Style/ChangeAvatar.css";
// import courage from '../../DummyImgs/courage.png';
// import monkey from '../../DummyImgs/monkey.png';
// import sunshine from '../../DummyImgs/sunshine.png';

const ChangeAvatar: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [
    // selectedAvatar
    , setSelectedAvatar] = useState<string | null>(null);
  // const [avatars, setAvatars] = useState(
  //   [
  //     { key: courage, value: "" },
  //     { key: monkey, value: "" },
  //     { key: sunshine, value: "" }
  //   ]
  // );
  // const [isAvatarSelected, setIsAvatarSelected] = useState(false); 

  // const [currentAvatar, setCurrentAvatar] = useState<string | null>(null); 
  // const [newAvatar, setNewAvatar] = useState<string | null>(null); 

  useEffect(() => {
    const UserName = sessionStorage.getItem('FName');
    const UserAvatar = sessionStorage.getItem('CurrentAvatar');

    if (UserName !== null) {
      setUserName(UserName);
    }
    if (UserAvatar) {
      setSelectedAvatar(UserAvatar);
    }

    document.body.classList.add('StudyRoom-background');
    return () => {
      document.body.classList.remove('StudyRoom-background');
    };
  }, []);

  // const handleAvatarClick = (index: number) => {
  //   const selectedAvatar = avatars[index].key;
  //   setSelectedAvatar(selectedAvatar);

  //   if (currentAvatar !== selectedAvatar) {
  //     setIsAvatarSelected(true); 
  //   } else {
  //     setIsAvatarSelected(false); 
  //   }

  //   setCurrentAvatar(selectedAvatar);
  //   setNewAvatar(selectedAvatar);
  // };

  // const handleSave = () => {
  //   if (newAvatar) {
  //     sessionStorage.setItem('CurrentAvatar', newAvatar); 
  //     console.log("Saved Avatar:", newAvatar);
  //     setIsAvatarSelected(false); 
  //   }
  // };

  // const handleCancel = () => {
  //   setIsAvatarSelected(false); 
  //   setSelectedAvatar(currentAvatar || null); 
  // };

  // const handleBack = () => {
  //   // console.log("Navigating Back");
  // };

  return (
    <form id="form1">
      <div className="main_top_container">
        <div id="header">
          <div className="section_div">
            <div id="mobile_menu">
              <div id="mobile_box" className="mobile_dropdown">
                <div className="mobile_nav_item">
                  <a href="/StudyRoom">HOME</a>
                </div>
                <div className="mobile_nav_item">
                  <a href="/MSRReports">REPORTS</a>
                </div>
                <div id="mobile_nav_item" className="mobile_nav_item" 
                // style={{ color: "#b9b9b9" }}
                >
                  PROFILE
                </div>
                <div className="mobile_nav_item mobile_nav_item_hidden">
                  <a href="/SelectUser">CHANGE USER</a>
                </div>
                <div className="mobile_nav_item mobile_nav_item_hidden">
                  <a href="/LoggedOut">LOG OUT</a>
                </div>
              </div>
            </div>
            <div id="logout_btn">
              <a href="/LoggedOut">Log Out</a>
            </div>
            <div id="change_user_btn">
              <a href="/SelectUser">Change User</a>
            </div>
            <p id="username_text" className="header_text">
              <label id="lblUserName" className="header_text">{userName}</label>
            </p>
          </div>
        </div>
      </div>

      <div id="change_avatar" className="change_avatarT"
      // style={{ display: 'block' }}
      >
        <p>
          <span className="title_text">Change avatar</span>
        </p>
        {/* <div id="change_avatar_collection">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              id={`divAvatar_${index + 1}`}
              className={`change_avatar_item ${selectedAvatar === avatar.key ? "selected" : ""}`}
              style={{ backgroundImage: `url(${avatar.key})` }}
              onClick={() => handleAvatarClick(index)}
            >
              <span id={`tick_check_${index + 1}`} className={selectedAvatar === avatar.key ? "avatar_tick" : ""}></span>
            </div>
          ))}
        </div> */}
        {/* <div className="button_box">
          {isAvatarSelected ? (
            <div style={{ display: 'inline-table' }}>
              <div
                id="change_avatar_cancel_btn"
                className="general_btn two_btn_lightbox single_btn"
                onClick={handleCancel}
              >
                <a id="lnkbtnCancel">Cancel</a>
              </div>
              <div
                id="change_avatar_save_btn"
                className="general_btn two_btn_lightbox single_btn"
                onClick={handleSave}
              >
                <a id="lnkbtnSave">Save</a>
              </div>
            </div>
          ) : (
            <div
              id="change_avatar_back_btn"
              className="general_btn two_btn_lightbox single_btn"
              onClick={handleBack}
              style={{ display: isAvatarSelected ? 'none' : 'inline-block' }}
            >
              <a id="lnkbtnBack">Back</a>
            </div>
          )}
        </div> */}
        <div className="button_box">
          <div id="change_avatar_cancel_btn" className="general_btn two_btn_lightbox two_btn_left">
            <a 
            href="/Profile" 
            id="lnkbtnCancel" >Cancel</a>
          </div>
          <div id="change_avatar_save_btn" className="general_btn two_btn_lightbox">
            <a 
            href="/Profile"
            id="lnkbtnSave" >Save</a>
          </div>
          <div id="change_avatar_back_btn" className="general_btn two_btn_lightbox single_btn">
            <a 
            href="/Profile"
            id="lnkbtnBack" >Back</a>
          </div>
			</div>
      </div>
    </form>
  );
};

export default ChangeAvatar;




