import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Common.css';
import './Style/Header.css';
import './Style/SelectUser.css';
import $ from 'jquery';
import wallImg from './Image/wall.jpg';
import Loading from '../Common/Loading';

interface User {
  Login: string;
  FName: string;
  LName?: string;
  ActivityStatus: string;
  Std: string;
  CurrentAvatar: string;
  Name: string;
  PhoneNo: string;
  Website: string;
}

const SelectUser: React.FC = () => {
  const [UserData, setUserData] = useState<User[]>([]);
  const [avatars, setAvatars] = useState<{ name: string, url: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [trophyCount, setTrophyCount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); 
  
    fetch("http://localhost:5000/SelectUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ FamilyCode: "login00001", SchoolCode: "DLR_KE_AU" }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
  
        const avatarNames = data.map((user: { CurrentAvatar: any }) => user.CurrentAvatar).filter(Boolean);
        const output = { avatarNames };
  
        return fetch("http://localhost:5000/getAvatarsImages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(output),
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data not found");
        }
        return response.json();
      })
      .then((resAvatar) => {
        setAvatars(resAvatar.avatars);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
 

      fetch("http://localhost:5000/getWebsiteLogo")
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("WebsiteLogo", data.imageUrl);
        // console.log(data.imageUrl)
        const websiteLogo = data[0].WebsiteLogo;
        sessionStorage.setItem("WebsiteLogo", websiteLogo);
      })
      .catch((err) => {
        setError(err.message);
      })
  }, []);

  useEffect(() => {
    document.body.style.background = `url(${wallImg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.classList.add('SelectUser-background');

    return () => {
      document.body.classList.remove('SelectUser-background');
    };
  }, []);

  const handleUserClick = (login: string, fName: string, CurrentAvatar: string,) => {
    sessionStorage.setItem('Login', login);
    sessionStorage.setItem('FName', fName.trim());
    fetch("http://localhost:5000/TotalTrophyCount_Points", {
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Login: sessionStorage.getItem("Login") , FamilyCode: "kedemo", SchoolCode: "login00001" }), 
    })
      .then((response) => response.json()) 
      .then((responseData) => {
        // console.log("responseData", responseData);
        setTrophyCount(responseData[0].TotalTrophyCount);
        // console.log("TrophyCount", responseData[0].TotalTrophyCount);
        const points = responseData[0].CurrentPoints;
        const tropies = responseData[0].TotalTrophyCount;
        sessionStorage.setItem("CurrentPoints", points);
        sessionStorage.setItem("TrophyCount", tropies);
      })
      .catch((err) => {
        setError(err.message);
      });
    
    const avatarObj = avatars.find((avatar) => avatar.name === CurrentAvatar);
    const avatarUrl = avatarObj ? avatarObj.url : CurrentAvatar; 
  
    sessionStorage.setItem('CurrentAvatar', avatarUrl);
    navigate('/StudyRoom');
  };
  
  return (
    <form id='form1'>
      <div>
        <a href="#" className="back-to-top">Back to Top</a>
        <div id="main_top_container">
          <div id="header">
            <div className="section_div">
              <div id="logo_container" className="scrolled_logo">
                
              </div>
              <div id="logout_btn">
                <a href='/LoggedOut' id="linkbtnLogOut" className='linkbtnLogOutT'
                // style={{ border: 'none', color: 'white', textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', textAlign: 'center' }}
                >Log Out</a>
              </div>
            </div>
          </div>
          
          <div id="select_user_title_bar" className="section_container section_title_bar">
					<div id="bt_select_user" className="section_div bar_section">
						<p className="bar_title"></p>
					</div>
				</div>
        </div>

        <div id="users" className="section_container"
        // style={{ backgroundColor: '#3F78BD' }}
        >
          <div className="section_divT" 
          // style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row-reverse', alignContent:'center', flexWrap:'wrap', paddingTop:'10px' , backgroundColor: 'transparent' }}
          >
            <div id="user_container" className='user_container' 
            // style={{ cursor: 'pointer', display: 'contents', backgroundColor: 'transparent' }}
            >
              {loading ? <Loading /> : 
                UserData.map((user, index) => {
                  const avatarUrl = avatars.find((avatar) => avatar.name === user.CurrentAvatar)?.url || user.CurrentAvatar;
                  return (
                    <div key={index} id={`divUser${index}`} className="user" data-counter={index + 1} 
                    // style={{ cursor: 'pointer' }}
                    >
                      <button onClick={() => handleUserClick(user.Login, user.FName, user.CurrentAvatar)} 
                      className="userselectT" 
                      // style={{ cursor: 'pointer' }}
                      >
                        <div className="user_avatar">
                          <img
                            id={`imgUserAvatar${index}`}
                            src={avatarUrl}
                            alt="User Avatar"
                            className='imgUserAvatar'
                            style={{ backgroundColor: 'transparent' }}
                          />
                        </div>
                        <div className="user_name">{user.FName.trim()}</div>
                        <div className="user_grade">Grade {user.Std}</div>
                      </button>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SelectUser;
