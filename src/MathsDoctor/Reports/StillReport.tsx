import React, { useState, useEffect } from 'react';
import './Style/StillReport.css';

const StillReport: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [recommendationText, setRecommendationText] = useState('');
  const [knowledgeGaps, setKnowledgeGaps] = useState([]);
  const [achievedLevels, setAchievedLevels] = useState(0);

  useEffect(() => {
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <form>
          <div id="page_wrap">
            <header id="header_bar">
              <div id="top_logo_box_left"></div>
              <div id="top_logo_box"></div>
              <div id="top_text_div">
                <div id="top_name">
                  <p>{firstName} {lastName}</p>
                </div>
                <div id="top_title">
                  <p>Knowledge of Curriculum Report</p>
                </div>
                <div className="top_details">
                  <p>School Level: {grade} / Assessment Completed: {completionDate}</p>
                </div>
              </div>
            </header>

            <div id="report_container">
              <hr id="hr_div" />
              <div id="wall_container">
                <div className="summary">
                  <p>Summary</p>
                  <div>{summaryText}</div>
                  <div>
                    <span className="recommendation-title">Recommendation: </span>{recommendationText}
                  </div>
                </div>

                <div className="wall-heading">Result</div>
                <div className="grades">
                  {/* Replace this with map over your data */}
                  {/* Example of a dynamic list */}
                </div>

                <div id="graph">
                  <canvas id="canvasBrickWall"></canvas>
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
                        <strong>future years/grades</strong>.
                      </div>
                    </div>
                  </div>

                  <div id="get_started_div">
                    <div id="get_started_btn" onClick={() => alert('get started')}>
                      <div id="plus"></div>
                      <div id="plus_text">
                        <p>GET STARTED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="gaps_container">
              <div id="print_btn" onClick={handlePrint}>
                <p>PRINT REPORT</p>
              </div>
              <p id="gaps_title">
                Math Doctor<sup>&reg;</sup> has diagnosed the following gaps in {firstName}’s wall of knowledge:
              </p>
              <div id="gaps_box_container">
                {knowledgeGaps.map((gap, index) => (
                  <div className="gaps_box" key={index}>
                    <div className="gaps_subtitle">
                      {/* <p>Year {gap.year} gaps</p> */}
                    </div>
                    {/* <p className="gaps_listing">{gap.knowledgeGaps}</p> */}
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

export default StillReport;
