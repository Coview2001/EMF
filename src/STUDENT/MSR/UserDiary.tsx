// import React, { useState, useEffect } from "react";
// import "./Style/UserDiary.css";
// import Header from "../../Common/Header";
// import Section from "../../Common/Section";

// interface Student {
//   id: number;
//   name: string;
//   completed: number;
//   pending: number;
// }

// interface ActivityRecord {
//   StartDateTime_Local: string;
//   EndDateTime_Local: string;
//   DicCode: string;
//   UnitCode: string;
//   ChildCode: string;
//   UnitDesc: string;
//   ChapterCode: string;
//   ChapterDesc: string;
//   LessonDesc: string;
//   LevelDesc: string;
//   LsnTestCode: string;
//   Type: number;
//   HWID: number;
//   Score: number;
//   TotalQnAnsTime: string | null;
//   TutSpentTime: number;
//   SessionID: number;
//   StartDateTime: string;
//   EndDateTime: string;
// }

// const UserDiary: React.FC = () => {
//   const [dateTimeOrder, setDateTimeOrder] = useState("DateTime");
//   const [sortOrder, setSortOrder] = useState("DESC");
//   const [period, setPeriod] = useState("Daily");
//   const [dateDisplay, setDateDisplay] = useState("Tuesday, 15/11/2016");
//   const [showNextDate, setShowNextDate] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
//   const [weeklyProgress, setWeeklyProgress] = useState(50);
//   const [myPoints, setMyPoints] = useState(0);
//   const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
//   const [weekCount, setWeekCount] = useState(0);
//   const [trophyData, setTrophyData] = useState<string[]>([]);
//   const [userName, setUserName] = useState<string>("");
//   const [purchases, setPurchases] = useState<any[]>([6405]);
//   const [selectedOption, setSelectedOption] = useState<string>("Weekly");
//   const [fromDate, setFromDate] = useState<string>("");
//   const [toDate, setToDate] = useState<string>("");
//   const [imageSrc, setImageSrc] = useState('');
//   const [activities, setActivities] = useState<ActivityRecord[]>([]);
//   const [showDates, setShowDates] = useState<boolean>(false);

//   useEffect(() => {
//     const UserName = sessionStorage.getItem('FName');
//     const UserLogin = sessionStorage.getItem('login');
//     const UserAvatar = sessionStorage.getItem('CurrentAvatar');

//     if (UserName !== null) {
//       setUserName(UserName);
//     }

//     try {
//       if (UserAvatar) {
//         setImageSrc(`${UserAvatar}`);
//       }
//     } catch (error) {
//       console.error('Error loading image:', error);
//     }

//     document.body.classList.add('StudyRoom-background');

//     return () => {
//       document.body.classList.remove('StudyRoom-background');
//     };
//   }, []);

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setPeriod(value);

//     if (value === "Between") {
//       setShowDates(true);
//     } else {
//       setShowDates(false);
//       setFromDate("");
//       setToDate("");
//     }
//   };

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;

//     if (id === "txtCalFromDate") {
//       setFromDate(value);
//       setToDate("");
//       alert("Please select To Date.");
//     } else {
//       setToDate(value);
//     }
//   };

//   useEffect(() => {
//     if (period === "Between" && fromDate && toDate) {
//       const from = new Date(fromDate);
//       const to = new Date(toDate);

//       if (!isNaN(from.getTime()) && !isNaN(to.getTime())) {
//         fetchActivities();
//       } else {
//         alert("Please select valid dates");
//       }
//     } else if (period !== "Between") {
//       fetchActivities();
//     }
//   }, [period, fromDate, toDate]);

//   const handleSort = (column: string) => {
//     if (column === dateTimeOrder) {
//       setSortOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
//     } else {
//       setDateTimeOrder(column);
//       setSortOrder("ASC");
//     }
//   };

//   const handlePrevDateClick = () => {
//     setDateDisplay("Monday, 14/11/2016");
//   };

//   const handleNextDateClick = () => {
//     setDateDisplay("Wednesday, 16/11/2016");
//   };

//   const fetchActivities = () => {
//     const startDate = getStartDate();
//     const endDate = getEndDate();

//     fetch("http://localhost:5000/Report", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Login: sessionStorage.getItem("Login"),
//         FamilyCode: "login00001",
//         SchoolCode: "DLR_KE_AU",
//         Subject: "Mathematics",
//         StartDateTime: startDate,
//         EndDateTime: endDate,
//       }),
//     })
//       .then(response => response.json())
//       .then((data: ActivityRecord[]) => {
//         setActivities(data);
//       })
//       .catch(error => {
//         console.error("Error fetching activities:", error);
//       });
//   };

//   const getStartDate = () => {
//     switch (period) {
//       case "Daily":
//         return formatDate(new Date());
//       case "Weekly":
//         return formatDate(getFirstDayOfWeek());
//       case "Monthly":
//         return formatDate(getFirstDayOfMonth());
//       case "Between":
//         return fromDate || formatDate(new Date());
//       default:
//         return formatDate(new Date());
//     }
//   };

//   const getEndDate = () => {
//     switch (period) {
//       case "Daily":
//         return formatDate(new Date());
//       case "Weekly":
//         return formatDate(getLastDayOfWeek());
//       case "Monthly":
//         return formatDate(getLastDayOfMonth());
//       case "Between":
//         return toDate || formatDate(new Date());
//       default:
//         return formatDate(new Date());
//     }
//   };

//   const getFirstDayOfMonth = () => {
//     const today = new Date();
//     return new Date(today.getFullYear(), today.getMonth(), 1);
//   };

//   const getLastDayOfMonth = () => {
//     const today = new Date();
//     return new Date(today.getFullYear(), today.getMonth() + 1, 0);
//   };

//   const getFirstDayOfWeek = () => {
//     const today = new Date();
//     const day = today.getDay();
//     const diff = today.getDate() - day + (day === 0 ? -6 : 1);
//     return new Date(today.setDate(diff));
//   };

//   const getLastDayOfWeek = () => {
//     const firstDay = getFirstDayOfWeek();
//     return new Date(firstDay.setDate(firstDay.getDate() + 6));
//   };

//   const formatDate = (date: Date): string => {
//     return date.toISOString().split("T")[0];
//   };

//   return (
//     <div>
//       <form>
//         <a href="#" className="back-to-top">
//           Back to Top
//         </a>
//         <a href="#" className="back-to-bottom" id="back_to_bottom_link">
//           Back to Top
//         </a>
//         <div id="main_top_container">
//           <Header />
//           <Section />
//           <div id="divSubjectBanner" className="subject_banner">
//             <div className="subject_arrow_left_container" id="divsubject_arrow_left">
//               <div className="subject_arrow_text subject_arrow_text_left">
//                 <label id="lblArrowLeftText"></label>
//               </div>
//               <a id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left"></a>
//             </div>
//             <div className="subject_arrow_right_container" id="divsubject_arrow_right">
//               <div className="subject_arrow_text subject_arrow_text_right">
//                 <label id="lblArrowRightText"></label>
//               </div>
//               <a id="linkbtnArrowRight" className="subject_arrow subject_arrow_right"></a>
//             </div>
//           </div>
//         </div>
//         <div className="section-container" id="studentreportscollapse">
//           <div className="content-container">
//             <div className="content-top">
//               <div className="report-heading-container">
//                 <div className="report-heading">User Diary</div>
//               </div>
//               <div className="report-displayed-select">
//                 <div className="report-displayed-heading">Report Displayed:</div>
//                 <br />
//                 <div className="radio-mobile-container">
//                   {["Daily", "Weekly", "Monthly"].map((periodValue) => (
//                     <div className="radio-container" key={periodValue}>
//                       <input
//                         type="radio"
//                         id={`rdo${periodValue}`}
//                         name="toggler"
//                         value={periodValue}
//                         checked={period === periodValue}
//                         onChange={handleRadioChange}
//                       />
//                       <label htmlFor={`rdo${periodValue}`}>{periodValue}</label>
//                     </div>
//                   ))}
//                   <div className="radio-container">
//                     <input
//                       type="radio"
//                       id="rdoViewFrom"
//                       name="toggler"
//                       value="Between"
//                       checked={period === "Between"}
//                       onChange={handleRadioChange}
//                     />
//                     <label htmlFor="rdoViewFrom">View From :</label>
//                     <input
//                       type="date"
//                       id="txtCalFromDate"
//                       value={fromDate}
//                       onChange={handleDateChange}
//                       disabled={!showDates}
//                       placeholder=""
//                     />
//                     To:
//                     <input
//                       type="date"
//                       id="txtCalToDate"
//                       value={toDate}
//                       onChange={handleDateChange}
//                       disabled={!showDates}
//                       placeholder=""
//                     />
//                   </div>
//                 </div>
//                 <div className="week-ending-container">
//                   <a className="arrow-left" onClick={handlePrevDateClick} />
//                   <div className="wk-ending-text" id="divDateDisplay">
//                     {dateDisplay}
//                   </div>
//                   {showNextDate && (
//                     <a className="arrow-right" onClick={handleNextDateClick} />
//                   )}
//                 </div>
//               </div>
//               <div className="widget-container">
//                 <div className="table-mobile-scroll">
//                   ← &nbsp;Scroll table horizontally to view more&nbsp; →
//                 </div>
//                 <div className="scrolling-table-container">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>
//                           Date/Time
//                           <button
//                             className={`sort ${dateTimeOrder === "DateTime" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("DateTime")}
//                           ></button>
//                         </th>
//                         <th className="activity-max-length">Activity</th>
//                         <th>
//                           Score
//                           <button
//                             className={`sort ${dateTimeOrder === "Score" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("Score")}
//                           ></button>
//                         </th>
//                         <th>
//                           <div className="th-double-line">
//                             Time Taken
//                             <br />
//                             (mins)
//                           </div>
//                           <button
//                             className={`sort ${dateTimeOrder === "TimeTaken" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("TimeTaken")}
//                           ></button>
//                         </th>
//                         <th>
//                           <div className="th-double-line">
//                             No. of
//                             <br />
//                             attempts
//                           </div>
//                           <button
//                             className={`sort ${dateTimeOrder === "Attempts" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("Attempts")}
//                           ></button>
//                         </th>
//                         <th>
//                           Level
//                           <button
//                             className={`sort ${dateTimeOrder === "Level" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("Level")}
//                           ></button>
//                         </th>
//                         <th>
//                           Unit
//                           <button
//                             className={`sort ${dateTimeOrder === "Unit" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("Unit")}
//                           ></button>
//                         </th>
//                         <th>
//                           Chapter
//                           <button
//                             className={`sort ${dateTimeOrder === "Chapter" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("Chapter")}
//                           ></button>
//                         </th>
//                         <th>
//                           Selected From
//                           <button
//                             className={`sort ${dateTimeOrder === "SelectedFrom" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
//                             onClick={() => handleSort("SelectedFrom")}
//                           ></button>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {activities.map(activity => (
//                         <tr key={activity.SessionID}>
//                           <td>{new Date(activity.StartDateTime_Local).toLocaleString()}</td>
//                           <td>{activity.LessonDesc}</td>
//                           <td>{activity.Score}</td>
//                           <td>{activity.TutSpentTime}</td>
//                           <td>1</td>
//                           <td>{activity.LevelDesc}</td>
//                           <td>{activity.UnitDesc}</td>
//                           <td>{activity.ChapterDesc}</td>
//                           <td>{new Date(activity.StartDateTime_Local).toLocaleString()}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserDiary;



import React, { useState, useEffect, useCallback } from "react";
import "./Style/UserDiary.css";
import Header from "../../Common/Header";
import Section from "../../Common/Section";
import { data } from "jquery";

interface Student {
    id: number;
    name: string;
    completed: number;
    pending: number;
}

interface ActivityRecord {
    StartDateTime_Local: string;
    EndDateTime_Local: string;
    DicCode: string;
    ChildCode: string;
    UnitDesc: any;
    ChapterCode: string;
    ChapterDesc: string;
    LessonDesc: string;
    LevelDesc: string;
    LsnTestCode: string;
    Type: number;
    HWID: number;
    Score: number;
    TotalQnAnsTime: string | null;
    TutSpentTime: number;
    SessionID: number;
    StartDateTime: string;
    EndDateTime: string;
}

const UserDiary: React.FC = () => {
    const [dateTimeOrder, setDateTimeOrder] = useState("DateTime");
    const [sortOrder, setSortOrder] = useState("DESC");
    const [period, setPeriod] = useState("Daily");
    const [dateDisplay, setDateDisplay] = useState("Tuesday, 15/11/2016");
    const [showNextDate, setShowNextDate] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [weeklyProgress, setWeeklyProgress] = useState(50);
    const [myPoints, setMyPoints] = useState(0);
    const [overallWeeklyProgress, setOverallWeeklyProgress] = useState(0);
    const [weekCount, setWeekCount] = useState(0);
    const [trophyData, setTrophyData] = useState<string[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [purchases, setPurchases] = useState<any[]>([6405]);
    const [selectedOption, setSelectedOption] = useState<string>("Weekly");
    const [fromDate, setFromDate] = useState<string>("");
    const [toDate, setToDate] = useState<string>("");
    const [imageSrc, setImageSrc] = useState('');
    const [activities, setActivities] = useState<ActivityRecord[]>([]);
    const [showDates, setShowDates] = useState<boolean>(false);
    
    // useEffect(() => {
    //     fetch("http://localhost:5000/UserDiary", {
    //         headers: {"Content-Type": "application/json"},
    //         method: "POST",
    //         body: JSON.stringify({
    //             Login: 'Child1',FamilyCode: "login00001", SchoolCode: "DLR_KE_AU"
    //         })
    //     })
        
    //     .then(response => response.json())
    //     .then((data: ActivityRecord[]) => {
    //         setActivities(data);
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error("Error fetching activities:", error);
    //     });
    // }, []);

    useEffect(() => {
        const UserName = sessionStorage.getItem('FName');
        const UserLogin = sessionStorage.getItem('login');
        const UserAvatar = sessionStorage.getItem('CurrentAvatar');

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

    const fetchActivities = useCallback(() => {
        const startDate = getStartDate();
        const endDate = getEndDate();

        fetch("http://localhost:5000/Report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Login: sessionStorage.getItem("Login"),
                FamilyCode: "login00001",
                SchoolCode: "DLR_KE_AU",
                Subject: "Mathematics",
                StartDateTime: startDate,
                EndDateTime: endDate
            }),
        })
            .then(response => response.json())
            .then((data: ActivityRecord[]) => {
                setActivities(data);
                // console.log(data);
            })
            .catch(error => {
                console.error("Error fetching activities:", error);
            });
    }, [period, fromDate, toDate]);

    useEffect(() => {
        fetchActivities();
    }, [fetchActivities]);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPeriod(value);

        if (value === "Between") {
            setShowDates(true);
        } else {
            setShowDates(false);
            setFromDate("");
            setToDate("");
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        if (id === "txtCalFromDate") {
            setFromDate(value);
            setToDate("");
            alert("Please select To Date.");
        } else {
            setToDate(value);
        }
    };

    const handleSort = (column: string, event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();  // Prevent default button behavior
    
    if (column === dateTimeOrder) {
        setSortOrder(prev => prev === "ASC" ? "DESC" : "ASC");
    } else {
        setDateTimeOrder(column);
        setSortOrder("ASC");
    }
    };

    const handlePrevDateClick = () => {
        setDateDisplay("Monday, 14/11/2016");
    };

    const handleNextDateClick = () => {
        setDateDisplay("Wednesday, 16/11/2016");
    };

    const getStartDate = () => {
        switch (period) {
            case "Daily":
                return formatDate(new Date());
            case "Weekly":
                return formatDate(getFirstDayOfWeek());
            case "Monthly":
                return formatDate(getFirstDayOfMonth());
            case "Between":
                return fromDate || formatDate(new Date());
            default:
                return formatDate(new Date());
        }
    };

    const getEndDate = () => {
        switch (period) {
            case "Daily":
                return formatDate(new Date());
            case "Weekly":
                return formatDate(getLastDayOfWeek());
            case "Monthly":
                return formatDate(getLastDayOfMonth());
            case "Between":
                return toDate || formatDate(new Date());
            default:
                return formatDate(new Date());
        }
    };

    const getFirstDayOfMonth = () => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    };

    const getLastDayOfMonth = () => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() + 1, 0);
    };

    const getFirstDayOfWeek = () => {
        const today = new Date();
        const day = today.getDay();
        const diff = today.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(today.setDate(diff));
    };

    const getLastDayOfWeek = () => {
        const firstDay = getFirstDayOfWeek();
        return new Date(firstDay.setDate(firstDay.getDate() + 6));
    };

    const formatDate = (date: Date): string => {
        return date.toISOString().split("T")[0];
    };

    const sortedActivities = [...activities].sort((a, b) => {
        const isAsc = sortOrder === "ASC" ? 1 : -1;

        switch (dateTimeOrder) {
            case "DateTime":
                return (new Date(a.StartDateTime_Local).getTime() - new Date(b.StartDateTime_Local).getTime()) * isAsc;
            case "Score":
                return (a.Score - b.Score) * isAsc;
            case "TutSpentTime":
                return (a.TutSpentTime - b.TutSpentTime) * isAsc;
            case "SessionID":
                return (a.SessionID - b.SessionID) * isAsc;
            case "LevelDesc":
                return a.LevelDesc.localeCompare(b.LevelDesc) * isAsc;
            case "UnitDesc":
                return a.UnitDesc.localeCompare(b.UnitDesc) * isAsc;
            case "ChapterDesc":
                return a.ChapterDesc.localeCompare(b.ChapterDesc) * isAsc;
            // case "SelectedFrom":
            //     return (b.UnitCode - a.Unit) * isAsc;
            default:
                return 0;
        }
    });

    return (
        <div>
            <form>
                <a href="#" className="back-to-top">
                    Back to Top
                </a>
                <a href="#" className="back-to-bottom" id="back_to_bottom_link">
                    Back to Top
                </a>
                <div id="main_top_container">
                    <Header />
                    <Section />
                    <div id="divSubjectBanner" className="subject_banner">
                        <div className="subject_arrow_left_container" id="divsubject_arrow_left">
                            <div className="subject_arrow_text subject_arrow_text_left">
                                <label id="lblArrowLeftText"></label>
                            </div>
                            <a id="linkbtnArrowLeft" className="subject_arrow subject_arrow_left"></a>
                        </div>
                        <div className="subject_arrow_right_container" id="divsubject_arrow_right">
                            <div className="subject_arrow_text subject_arrow_text_right">
                                <label id="lblArrowRightText"></label>
                            </div>
                            <a id="linkbtnArrowRight" className="subject_arrow subject_arrow_right"></a>
                        </div>
                    </div>
                </div>
                <div className="section-container" id="studentreportscollapse">
                    <div className="content-container">
                        <div className="content-top">
                            <div className="report-heading-container">
                                <div className="report-heading">User Diary</div>
                            </div>
                            <div className="report-displayed-select">
                                <div className="report-displayed-headingT">Report Displayed:</div>
                                <br />
                                <div className="radio-mobile-container">
                                    {["Daily", "Weekly", "Monthly"].map((periodValue) => (
                                        <div className="radio-container" key={periodValue}>
                                            <input
                                                type="radio"
                                                id={`rdo${periodValue}`}
                                                name="toggler"
                                                value={periodValue}
                                                checked={period === periodValue}
                                                onChange={handleRadioChange}
                                            />
                                            <label htmlFor={`rdo${periodValue}`}>{periodValue}</label>
                                        </div>
                                    ))}
                                    <div className="radio-container">
                                        <input
                                            type="radio"
                                            id="rdoViewFrom"
                                            name="toggler"
                                            value="Between"
                                            checked={period === "Between"}
                                            onChange={handleRadioChange}
                                        />
                                        <label htmlFor="rdoViewFrom">View From :</label>
                                        <input
                                            type="date"
                                            id="txtCalFromDate"
                                            value={fromDate}
                                            onChange={handleDateChange}
                                            disabled={!showDates}
                                            placeholder=""
                                        />
                                        To:
                                        <input
                                            type="date"
                                            id="txtCalToDate"
                                            value={toDate}
                                            onChange={handleDateChange}
                                            disabled={!showDates}
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="week-ending-container">
                                    <a className="arrow-left" onClick={handlePrevDateClick} />
                                    <div className="wk-ending-text" id="divDateDisplay">
                                        {dateDisplay}
                                    </div>
                                    {showNextDate && (
                                        <a className="arrow-right" onClick={handleNextDateClick} />
                                    )}
                                </div>
                            </div>
                            <div className="widget-container">
                                <div className="table-mobile-scroll">
                                    ← &nbsp;Scroll table horizontally to view more&nbsp; →
                                </div>
                                <div className="scrolling-table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Date/Time
                                                    <button
                                                        className={`sort ${dateTimeOrder === "DateTime" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("DateTime", event)}
                                                    ></button>
                                                </th>
                                                <th className="activity-max-length">Activity</th>
                                                <th>
                                                    Score
                                                    <button
                                                        className={`sort ${dateTimeOrder === "Score" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("Score", event)}
                                                    ></button>
                                                </th>
                                                <th>
                                                    <div className="th-double-line">
                                                        Time Taken
                                                        <br />
                                                        (mins)
                                                    </div>
                                                    <button
                                                        className={`sort ${dateTimeOrder === "TutSpentTime" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("TutSpentTime", event)}
                                                    ></button>
                                                </th>
                                                <th>
                                                    <div className="th-double-line">
                                                        No. of
                                                        <br />
                                                        attempts
                                                    </div>
                                                    <button
                                                        className={`sort ${dateTimeOrder === "SessionID" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("SessionID", event)}
                                                    ></button>
                                                </th>
                                                <th>
                                                    Level
                                                    <button
                                                        className={`sort ${dateTimeOrder === "LevelDesc" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("LevelDesc", event)}
                                                    ></button>
                                                </th>
                                                <th>
                                                    Unit
                                                    <button
                                                        className={`sort ${dateTimeOrder === "UnitDesc" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("UnitDesc", event)}
                                                    ></button>
                                                </th>
                                                <th>
                                                    Chapter
                                                    <button
                                                        className={`sort ${dateTimeOrder === "ChapterDesc" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("ChapterDesc", event)}
                                                    ></button>
                                                </th>
                                                <th>
                                                    Selected From
                                                    <button
                                                        className={`sort ${dateTimeOrder === "HWID" && sortOrder === "ASC" ? "sort-up" : "sort-down"}`}
                                                        onClick={(event) => handleSort("HWID", event)}
                                                    ></button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortedActivities.map(activity => (
                                                <tr key={`${activity.SessionID}-${activity.StartDateTime_Local}`}>
                                                    <td>{new Date(activity.StartDateTime_Local).toLocaleString()}</td>
                                                    <td>{activity.LessonDesc}</td>
                                                    <td>{activity.Score}</td>
                                                    <td>{activity.TutSpentTime}</td>
                                                    <td>1</td>
                                                    <td>{activity.LevelDesc}</td>
                                                    <td>{activity.UnitDesc}</td>
                                                    <td>{activity.ChapterDesc}</td>
                                                    <td>{activity.HWID}</td> 
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserDiary;
