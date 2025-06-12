import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Loading from './Common/Loading';
import FamilyLogin from './LOGIN/FamilyLogin';
import SchoolLogin from './LOGIN/SchoolLogin';
import ForgotPassword from './LOGIN/ForgotPassword';
import LoggedOut from './LOGIN/LoggedOut';
import SelectUser from './LOGIN/SelectUser';

import Assessment from './MathsDoctor/Assessment/Assessment';
import AssessmentComplete from './MathsDoctor/Assessment/AssessmentComplete';
import ConfirmAssessment from './MathsDoctor/Assessment/ConfirmAssessment';
import GenerateMDReportAndLP from './MathsDoctor/Assessment/GenerateMDReportAndLP';
import ResumeAssessment from './MathsDoctor/Assessment/ResumeAssessment';

import MovingReport from './MathsDoctor/Reports/MovingReport';
import NavigationReport from './MathsDoctor/Reports/NavigationReport';
import PDFReport from './MathsDoctor/Reports/PDFReport';
import StillReport from './MathsDoctor/Reports/StillReport';

import AllPurchases from './STUDENT/MSR/AllPurchases';
import ChangeAvatar from './STUDENT/MSR/ChangeAvatar';
import DoAgainPage from './STUDENT/MSR/DoAgain';
import DoMore from './STUDENT/MSR/DoMore';
import ExploreActivities from './STUDENT/MSR/ExploreActivities';
import ModifyLessonPlan from './STUDENT/MSR/ModifyLessonPlan';
import ModifyProfile from './STUDENT/MSR/ModifyProfile';
import MSRReports from './STUDENT/MSR/MSRReports';
import MyCompsCurrent from './STUDENT/MSR/MyCompsCurrent';
import MyCompsPast from './STUDENT/MSR/MyCompsPast';
import MyIncentives from './STUDENT/MSR/MyIncentives';
import MyStore from './STUDENT/MSR/MyStore';
import Profile from './STUDENT/MSR/Profile';
import SearchActivities from './STUDENT/MSR/SearchActivities';
import SkillBuildingGames from './STUDENT/MSR/SkillBuildingGames';
import StudentActivityReport from './STUDENT/MSR/StudentActivityReport';
import StudentMathsDoctorReport from './STUDENT/MSR/StudentMathsDoctorReport';
import StudyRoom from './STUDENT/MSR/StudyRoom';
import UserDiary from './STUDENT/MSR/UserDiary';
import ViewAllGames from './STUDENT/MSR/ViewAllGames';

import AnswerSheet from './STUDENT/Tutorials/AnswerSheet';
import ConfirmTest from './STUDENT/Tutorials/ConfirmTest';
import Game from './STUDENT/Tutorials/Game';
import Question from './STUDENT/Tutorials/Question';
import Result from './STUDENT/Tutorials/Result';
import SearchTests from './STUDENT/Tutorials/SearchTests';
import Test from './STUDENT/Tutorials/Test';
import Tutorial from './STUDENT/Tutorials/Tutorial';

const App: React.FC = () => {

      useEffect(() => {
        const handleResize = () => {
          document.body.style.height = `${window.innerHeight - 40}px`;
          document.body.style.width = `${window.innerWidth}px`;
          // document.body.style.backgroundColor = '#457abe';
          // document.body.style.backgroundSize = 'cover';
        };
    
        handleResize(); 
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize); 
        };
      }, []);

      // const documentLink = process.env.REACT_APP_DOCUMENT_LINK;
      // console.log("Using DOCUMENT LINK:", documentLink);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<FamilyLogin />} />
        {/* <Route path="/Loading" element={<Loading />} /> */}
        <Route path="SchoolLogin" element={<SchoolLogin />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} /> 
        <Route path="/LoggedOut" element={<LoggedOut />} />
        <Route path="/SelectUser" element={<SelectUser />} />
        
        <Route path="/Assessment" element={<Assessment />} />
        <Route path="/AssessmentComplete" element={<AssessmentComplete />} />
        <Route path="/ConfirmAssessment" element={<ConfirmAssessment />} />
        <Route path="/GenerateMDReportAndLP" element={<GenerateMDReportAndLP />} />
        <Route path="/ResumeAssessment" element={<ResumeAssessment />} />
        
        <Route path="/MovingReport" element={<MovingReport />} /> {/* Yet to be develop */}
        <Route path="/NavigationReport" element={<NavigationReport />} /> {/* Yet to be develop */}
        <Route path="/PDFReport" element={<PDFReport />} /> {/* Yet to be develop */}
        <Route path="/StillReport" element={<StillReport />} /> {/* Yet to be develop */}

        <Route path="/AllPurchases" element={<AllPurchases />} />
        <Route path="/ChangeAvatar" element={<ChangeAvatar />} />
        <Route path="/DoAgainPage" element={<DoAgainPage />} /> 
        <Route path="/DoMore" element={<DoMore />} />
        <Route path="/ExploreActivities" element={<ExploreActivities />} /> {/*  Still pending in dymamic background image and chanaging subject nav */}
        <Route path="/ModifyLessonPlan" element={<ModifyLessonPlan />} />
        <Route path="/ModifyProfile" element={<ModifyProfile />} />
        <Route path="/MSRReports" element={<MSRReports />} /> {/*  Still pending in dymamic background image and chanaging subject nav */}
        <Route path="/MyCompsCurrent" element={<MyCompsCurrent />} />
        <Route path="/MyCompsPast" element={<MyCompsPast />} />
        <Route path="/MyIncentives" element={<MyIncentives />} />
        <Route path="/MyStore" element={<MyStore />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SearchActivities" element={<SearchActivities />} />
        <Route path="/SkillBuildingGames" element={<SkillBuildingGames />} />
        <Route path="/StudentActivityReport" element={<StudentActivityReport />} />
        <Route path="/StudentMathsDoctorReport" element={<StudentMathsDoctorReport />} />
        <Route path="/StudyRoom" element={<StudyRoom />} /> 
        <Route path='/UserDiary' element={<UserDiary />} />
        <Route path='/ViewAllGames' element={<ViewAllGames />} /> 

        <Route path="/AnswerSheet" element={<AnswerSheet />} />
        <Route path="/ConfirmTest" element={<ConfirmTest />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/SearchTests" element={<SearchTests />} /> 
        <Route path="/Test" element={<Test />} />
        <Route path="/Tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
};

export default App;
