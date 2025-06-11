// import React, { useState, useEffect} from 'react'
// import '../Common/Style/Header.css'

// const Header: React.FC = () => {
//   const [userName, setUserName] = useState<string>("");
//   const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
//   const [pageName, setPageName] = useState<string>("");


//   useEffect(() => {
//     const pageName = sessionStorage.getItem('CurrentPage') as string; 
//     setPageName(pageName);
//     console.log(pageName); 
//   }, []);
  

//     const toggleMenu = () => {
//       setIsMenuVisible((prevState) => !prevState);
//     };
  
//   return (
//     <div id="header">
//     <div className="section_div">
//       <nav
//         id="mobile_menu"
//         onClick={toggleMenu}
//         style={{ backgroundPosition: isMenuVisible ? '0 100%' : '0 0' }}
//       >
//         <div
//           id="mobile_box" className="mobile_dropdown"
//           style={{ display: isMenuVisible ? 'block' : 'none' }}
//           // onMouseUp={handleMobileBoxClick}
//           // onTouchEnd={handleMobileBoxClick}
//         >
//           <li className="mobile_nav_item">
//             <a href="/StudyRoom" id="hlinkStudyRoomMobile" >HOME</a>
//           </li>
//           <li className="mobile_nav_item">
//             <a href="/MSRReports" id="hlinkReportsMobile">REPORTS</a>
//           </li>
//           <li className="mobile_nav_item">
//             <a href="/Profile" id="hlnkbtnProfileMobile">PROFILE</a>
//           </li>
//           <li className="mobile_nav_item">
//             <a href="/SelectUser" id="linkbtnChangeUserMobile">CHANGE USER</a>
//           </li>
//           <li className="mobile_nav_item">
//             <a href="/LoggedOut" id="linkbtnLogOutMobile">LOG OUT</a>
//           </li>
//         </div>
//       </nav>


//       <div id="logout_btn">
//         <a href="/LoggedOut" id="linkbtnLogOut">Log Out</a>
//       </div>
//       <div id="divChangeUserSection">
//         <a href="/SelectUser" id="linkbtnChangeUser">Change User</a>
//       </div>
//       <label id="lblFName" className="header_text">{userName}</label>
//       <div id="scrolled_nav_sub">
//         {/* <div id="divLogo" className="scrolled_logo" style={{ backgroundImage: `url(${'/Storage/assets/Image/DistributorLogo/WebsiteLogo/${sessionStorage.getItem('DistributorLogo')}'})` }}></div> */}
//         <div id="divLogo" className="scrolled_logo"
//          style={{ backgroundImage: localStorage.getItem('DistributorLogo') ? `url(${localStorage.getItem('DistributorLogo')})`: 'none'}}>
//         </div>

//         <li id="sn4_sub" className="scrolled_nav_item subbed">
//           <a href="/StudyRoom" id="hlinkStudyRoom" style={{color: '#b9b9b9'}}>HOME</a>
//         </li>
//         <li id="sn3_sub" className="scrolled_nav_item subbed">
//           <a href="/MSRReports" id="hlinkReports">REPORTS</a>
//         </li>
//         <li id="sn2_sub" className="scrolled_nav_item subbed">
//           <a href="/Profile" id="hlnkbtnProfile">PROFILE</a>
//         </li>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Header


import React, { useState, useEffect } from 'react';
import '../Common/Style/Header.css';

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [pageName, setPageName] = useState<string>("");

  useEffect(() => {
    const currentPage = window.location.pathname;
    setPageName(currentPage);
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const isActive = (path: string) => (pageName === path ? { color: '#b3b3b3' } : {});

  return (
    <div id="header">
      <div className="section_div">
        <nav
          id="mobile_menu"
          className='mobile_menuT'
          onClick={toggleMenu}
          // style={{ backgroundPosition: isMenuVisible ? '0 100%' : '0 0' }}
        >
          <div
            id="mobile_box"
            className="mobile_dropdownT"
            style={{ display: isMenuVisible ? 'block' : 'none' }}
          >
            <li className="mobile_nav_item">
              <a href="/StudyRoom" id="hlinkStudyRoomMobile" style={isActive('/StudyRoom')}>HOME</a>
            </li>
            <li className="mobile_nav_item">
              <a href="/MSRReports" id="hlinkReportsMobile" style={isActive('/MSRReports')}>REPORTS</a>
            </li>
            <li className="mobile_nav_item">
              <a href="/Profile" id="hlnkbtnProfileMobile" style={isActive('/Profile')}>PROFILE</a>
            </li>
            <li className="mobile_nav_item">
              <a href="/SelectUser" id="linkbtnChangeUserMobile" style={isActive('/SelectUser')}>CHANGE USER</a>
            </li>
            <li className="mobile_nav_item">
              <a href="/LoggedOut" id="linkbtnLogOutMobile" style={isActive('/LoggedOut')}>LOG OUT</a>
            </li>
          </div>
        </nav>

        <div id="logout_btn">
          <a href="/LoggedOut" id="linkbtnLogOut">Log Out</a>
        </div>
        <div id="divChangeUserSection">
          <a href="/SelectUser" id="linkbtnChangeUser">Change User</a>
        </div>
        <label id="lblFName" className="header_text">{sessionStorage.getItem("FName")}</label>
        <div id="scrolled_nav_sub">
          <div id="logo_container" className="scrolled_logo">
          </div>

          <li id="sn4_sub" className="scrolled_nav_item subbed">
            <a href="/StudyRoom" id="hlinkStudyRoom" style={isActive('/StudyRoom')}>HOME</a>
          </li>
          <li id="sn3_sub" className="scrolled_nav_item subbed">
            <a href="/MSRReports" id="hlinkReports" style={isActive('/MSRReports')}>REPORTS</a>
          </li>
          <li id="sn2_sub" className="scrolled_nav_item subbed">
            <a href="/Profile" id="hlnkbtnProfile" style={isActive('/Profile')}>PROFILE</a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
