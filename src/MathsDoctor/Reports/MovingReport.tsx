import React, { useState, useEffect } from 'react';
import './Style/MovingReport.css';

const MovingReport: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [gradeText, setGradeText] = useState<string>('Year');
    const [grade, setGrade] = useState<string>('');
    const [completionDate, setCompletionDate] = useState<string>('');
    const [summaryText, setSummaryText] = useState<string>('');
    const [recommendationText, setRecommendationText] = useState<string>('');
    const [knowledgeGaps, setKnowledgeGaps] = useState<Array<{ year: string, gaps: string }>>([]);

    useEffect(() => {
    }, []);

    const handlePrintReport = () => {
        window.print();
    };

    return (
        <form>
            <div id="page_wrap">
                <div id="header_bar">
                    <div id="top_logo_box_left"></div>
                    <div id="top_logo_box"></div>
                    <div id="top_text_div">
                        <div id="top_name">
                            <p><span id="spanFName" className="spanFName">{firstName}</span> <span id="spanLName" className="lastname">{lastName}</span></p>
                        </div>
                        <div id="top_title">
                            <p>Knowledge of Curriculum Report</p>
                        </div>
                        <div className="top_details">
                            <p>School Level: <span id="spanGradeText" >Year</span> <span id="spanGrade" >{gradeText}</span>/ Assessment Completed: <span id="spanCompletionDate" >{completionDate}</span></p>
                        </div>
                        <div className="top_details2">
                            <p>School Level: <span id="spanGradeText1" >Year</span> <span id="spanGrade1" >{grade}</span></p>
                        </div>
                        <div className="top_details2">
                            <p>Assessment Completed: <span id="spanCompletionDate1" ></span></p>
                        </div>
                    </div>
                </div>

                <div className="speech corner"><span id="speech_text">Loading...</span></div>
                
                <div id="report_container">
                    <div id="tutor_div">
                        <div className="play_btn"><span className="arrow_right"></span></div>
                    </div>
                    <hr id="hr_div" />
                    <div id="wall_container">
                        <div className="summary">
                            <p>Summary</p>
                            <div>
                                <span>{summaryText}</span>
                            </div>
                            <div>
                                <span className="recommendation-title">Recommendation: &nbsp;</span><span>{recommendationText}</span>
                            </div>
                        </div>
                        <div className="wall-heading">Result</div>
                        <div className="grades">
                            {/* Add grade rows here dynamically if necessary */}
                        </div>
                        <div id="graph">
                        </div>
                        <div className="extras">
                            <div className="legend-container">
                                <div className="legend">
                                    <div className="legend-heading">Brick wall legend:</div>
                                    <div className="legend-div">
                                        <div className="yellow-icon"></div>
                                        <div className="legend-text">Solid understanding</div>
                                    </div>
                                    <div className="legend-div">
                                        <div className="red-icon"></div>
                                        <div className="legend-text">Knowledge gaps</div>
                                    </div>
                                    <div className="brick-note">
                                        &#42; Note that where the bricks are faded, this represents
                                        <strong>future {gradeText}s</strong>.
                                    </div>
                                </div>
                            </div>
                            <div className="achieve-container">
                                <div className="grade-achieved">{gradeText} Levels Achieved</div>
                                <div className="bar-container">
                                    <div className="progressbar">
                                        <div className="grey-block"></div>
                                        {/* Render progress blocks here */}
                                    </div>
                                </div>
                            </div>
                            <div id="get_started_div">
                                <a href="#" id="get_started_btn">
                                    <div id="plus"></div>
                                    <div id="plus_text">
                                        <p>GET STARTED</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="gaps_container">
                        <button type="button" onClick={handlePrintReport} id="linkbtnPrintReport" >
                            <div id="print_btn">
                                <p>PRINT REPORT</p>
                            </div>
                        </button>
                        <p id="gaps_title">
                            <span className="ctry au">Maths</span><span className="ctry us">Math</span>
                                Doctor<sup>&reg;</sup> has diagnosed the following gaps in
                            <span className="firstname" id="spanFname1">{firstName}</span>’s wall of knowledge:
                        </p>
                        <div id="gaps_box_container">
                            {knowledgeGaps.map((gap, index) => (
                                <div key={index} className="gaps_box">
                                    <div className="gaps_subtitle">
                                        <p>{gradeText} {gap.year} gaps</p>
                                    </div>
                                    <p className="gaps_listing">{gap.gaps}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>

            <div id="footer_div">
                <p>
                    Disclaimer: <span className="ctry au">Maths</span><span className="ctry us">Math</span>
                    Doctor&reg; reports are to be used as a guideline only. No responsibility
        is taken if results provided by <span className="ctry au">Maths</span><span className="ctry us">Math</span>
                    Doctor&reg; do not translate to school reports or any other forms of assessment. It is assumed
        that the user used <span className="ctry au">Maths</span><span className="ctry us">Math</span> Doctor&reg;
        in accordance with the guidelines specified.
                </p>
            </div>
        </form>
    );
};

export default MovingReport;
