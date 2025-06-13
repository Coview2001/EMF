import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./Style/common.css";
// import trophy_club_0 from './trophy_club/trophy_club_0.png';
// import trophy_club_10 from './trophy_club/trophy_club_10.png';
// import trophy_club_25 from './trophy_club/trophy_club_20.png';
// import trophy_club_50 from './trophy_club/trophy_club_50.png';
// import trophy_club_75 from './trophy_club/trophy_club_75.png';
// import trophy_club_100 from './trophy_club/trophy_club_100.png';
// import trophy_club_150 from './trophy_club/trophy_club_150.png';
// import trophy_club_200 from './trophy_club/trophy_club_200.png';
// import trophy_club_250 from './trophy_club/trophy_club_250.png';
// import trophy_club_300 from './trophy_club/trophy_club_300.png';
// import trophy_club_350 from './trophy_club/trophy_club_350.png';
// import trophy_club_400 from './trophy_club/trophy_club_400.png';

interface TrophyRange {
  totalTrophyCount: number;
  min: number;
  max?: number;  
  points: number;
}


const Section: React.FC = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>("");
  const [
    // userName
    , setUserName] = useState<string>("");
  const [
    // purchases
    , setPurchases] = useState<string | null>(null);
  const [totalTrophyCount, 
    // setTotalTrophyCount
  ] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState('');
  // const totalTrophy = Number(totalTrophyCount || 0);
  const location = useLocation();
  const hiddenPaths = [
    "/MyStore",
    "/MyIncentives",
    "/MyCompsCurrent",
    "/MyCompsPast",
    "/AllPurchases"
  ];


      useEffect(() => {

        const UserName = sessionStorage.getItem('FName');
        // const UserLogin = sessionStorage.getItem('login');
        const UserAvatar = sessionStorage.getItem('CurrentAvatar');
        // console.log("totalTrophyCount222", totalTrophyCount);
        setPurchases(sessionStorage.getItem("CurrentPoints"));
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

  const trophyRanges: TrophyRange[] = [
    {
      min: 0, max: 9, points: 500,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 10, max: 24, points: 750,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 25, max: 49, points: 1000,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 50, max: 74, points: 1250,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 75, max: 99, points: 1500,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 100, max: 149, points: 2000,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 150, max: 199, points: 2500,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 200, max: 249, points: 3000,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 250, max: 299, points: 3500,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 300, max: 349, points: 4000,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 350, max: 399, points: 4500,
      totalTrophyCount: totalTrophyCount
    },
    {
      min: 400, max: undefined, points: 5000,
      totalTrophyCount: totalTrophyCount
    }
  ];

  const selectedRangeIndex = trophyRanges.findIndex(range => {
    if (range.max === undefined) {
      return totalTrophyCount >= range.min;
    }
    return totalTrophyCount >= range.min && totalTrophyCount <= range.max!;
  });


  const calculateProgress = (): number => {
    const currentRange = trophyRanges[selectedRangeIndex];
    const nextRange = trophyRanges[selectedRangeIndex + 1];
    
    if (!nextRange || selectedRangeIndex === trophyRanges.length - 1) {
        return 100;
    }
    
    const rangeSize = currentRange.max! - currentRange.min + 1;
    const progress = ((totalTrophyCount - currentRange.min) / rangeSize) * 100;
    return Math.round(progress);
};

const calculateRemainingTrophies = (): number => {
    // const currentRange = trophyRanges[selectedRangeIndex];
    const nextRange = trophyRanges[selectedRangeIndex + 1];
    
    if (!nextRange || selectedRangeIndex === trophyRanges.length - 1) {
        return 0;
    }
    
    return nextRange.min - totalTrophyCount;
};

  const handleTrophyClick = () => {
    const trophyClubLegend = document.getElementById("trophy_club_legend");
    if (trophyClubLegend) {
      trophyClubLegend.style.display = 
        trophyClubLegend.style.display === "none" ? "block" : "none";
    }
  };


  return (
    <div id="user_banner" className='user_bannerT' 
    // style={{ marginTop: "80px", backgroundColor: "#171717" }}
    >
      <div className="section_div">
          <div id="achievements_btn">
            <a href="Section">ACHIEVEMENTS</a>
          </div>
          <div id="user_strip_right_container">
            <div id="divAvatarContainer" className="avatar_container">
              {/* <img id="imgAvatar" src={imageSrc} alt="Avatar" /> */}
              {imageSrc && (
                <img id="imgAvatar" src={imageSrc} alt="Avatar" />
              )}
            </div>
            <div id="trophy_club_container" >
              <div id="trophy_club_section">
                <p className="trophy_club_section_title">CLUB</p>
                <div id="trophy_club_current" onClick={handleTrophyClick} className='trophy_club_currentT'
                // style={{ backgroundImage: `url(${trophy_club_0})`}}
                ></div>
                <div id="trophy_club_legend" className='trophy_club_legendT'
                // style={{display: 'none'}}
                >
                  <p className="trophy_club_legend_title">TROPHY CLUB</p>
                  <div id="trophy_club_progress_container">
                      <div id="trophy_club_progress_trophy_current" className="trophy_club_progress_trophy"></div>
                      <div id="trophy_club_progress_bar_div">
                          {/* <div 
                              id="trophy_club_progress_bar_div_progress" 
                              data-progress={calculateProgress()}
                              style={{ width: `${calculateProgress()}%` }}
                          /> */}
                              <div 
        id="trophy_club_progress_bar_div_progress"



        style={{ width: `${calculateProgress()}%` }}



        className="trophy-progress-barT"
    />
                      </div>
                      <div id="trophy_club_progress_trophy_next" className="trophy_club_progress_trophy"></div>
                  </div>
                  <p className="trophy_club_legend_text">
                      <span id="next_club">{calculateRemainingTrophies()} more trophies to next club</span>
                  </p>
                  <div className="trophy_club_legend_spacing"></div>
                  <table id="trophy_club_legend_spacing_table">
                      <thead>
                          <tr>
                              <th className="tfr">CLUB</th>
                              <th className="tsr">TROPHY<br/>TOTAL</th>
                              <th>BONUS<br/>POINTS</th>
                          </tr>
                      </thead>
                      <tbody>
                          {trophyRanges.map((range, index) => {
                              const isSelected = index === selectedRangeIndex;
                              const rangeText = range.max === undefined
                                  ? `${range.min}+`
                                  : `${range.min} - ${range.max}`;
                              
                              return (
                                  <tr key={index} className={`legend_trophy_row${isSelected ? '_selected' : ''}`}>
                                      <td className="tfr">
                                          {isSelected && <div id="trophy_legend_marker"></div>}
                                          <span 
                                              id={`legend_trophy_icon_${String(index + 1).padStart(2, '0')}`}
                                              className="legend_trophy_icon"
                                          />
                                      </td>
                                      <td className="tsr">{rangeText}</td>
                                      <td>{range.points}</td>
                                  </tr>
                              );
                          })}
                      </tbody>
                  </table>
              </div>
              </div>
            </div>

            <div id="my_points_container">
              <div id="my_points_text">MY POINTS</div>
              <label id="lblMyPoints" className="my_points_amount">{sessionStorage.getItem('CurrentPoints') || 1200}</label>
            </div>
            {/* <div id="ump_btn">
              <a href="/MyIncentives"  id="linkbtnUseMyPoints" >USE MY POINTS</a>
            </div> */}
            <div 
            className='ump_btnT'
            style={{ display: hiddenPaths.includes(location.pathname) ? "none" : "block" }}
            >
            <div id="ump_btn" >
              <a href="/MyIncentives" id="linkbtnUseMyPoints">USE MY POINTS</a>
            </div>
            </div>
          </div>

          <div id="user_strip_left_container">
            <div id="user_strip_weekly_progress_container">
              <div id="user_strip_weekly_progress_text">
                OVERALL WEEKLY PROGRESS: { sessionStorage.getItem('WeeklyProgress') || 0 }<label id="lblOverAllWeeklyProgress"></label>%
              </div>
              <div id="user_strip_weekly_progress_bar">
                <div id="user_strip_weekly_progress_bar_progress" className='user_strip_weekly_progress_bar_progressT'
                // style={{ width: '0px' }}
                ></div>
              </div>
            </div>
            <div id="user_strip_weekly_achievements_container">
              <div id="user_strip_weekly_achievements_text">
                WEEKLY ACHIEVEMENTS:
              </div>
              <div id="divEnglishTrophyContainer" className="user_strip_weekly_achievements_item user_strip_weekly_achievements_item_first" 
              // style={{display:'block'}}
              >
                <div id="divEnglishTrophy" className="trophy"></div>
                <div className="trophy_text">English Plan</div>
              </div>

              <div id="divMathsTrophyContainer" className="user_strip_weekly_achievements_itemT" 
              // style={{display:'block'}}
              >
                <div id="divMathsTrophy" className="trophy"></div>
                <div className="trophy_text">
                  <span id="spnMathOrMathsPlan">Maths Plan</span>
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
                <div className="trophy_text">x&nbsp;<span id="spnTrophyText">{sessionStorage.getItem('TrophyCount')}</span></div>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Section