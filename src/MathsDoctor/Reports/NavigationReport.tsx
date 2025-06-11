import React from 'react';
import "./Style/NavigationReport.css";

const NavigationReport: React.FC = () => {
  return (
    <div>
      <head>
        <title>Navigation Report</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />
        <link href="Style/NavigationReport.css" rel="stylesheet" />
        <script src="Script/NavigationReport.js"></script>
      </head>
      <body>
        <form id="form1">
          <div id="divHeader" className='divHeaderT' 
          // style={{ backgroundColor: '#4c90ff', textDecorationColor: 'white' }}
          >
            <div id="divUserDetails">
              S: <label id="lblSchoolCode"></label>
              F: <label id="lblFamilyCode"></label>
              L: <label id="lblLogin"></label>
              Year: <label id="lblYear"></label>
              Score: <label id="lblScore"></label>
              <button id="btnViewQuestion" type="button">View Question</button>
              <button id="btnAnswerSheet" type="button">Answer Sheet</button>
            </div>
          </div>
          <div id="divNavigationFlow">
            <h3>Navigation Flow</h3>
            <table id="gvNavigationFlow">
              <thead>
                <tr className='theaderT'
                // style={{ backgroundColor: '#6B696B', color: 'white', fontWeight: 'bold' }}
                >
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr className='trowT'
                // style={{ backgroundColor: '#F7F7DE' }}
                >
                  <td>Data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="divNavigationInfo">
            <div id="divSSTable">
              <h3>Strand - Substrand Table</h3>
              <table id="gvSSTable">
                <thead>
                  <tr className='trow2T'
                  // style={{ backgroundColor: '#5D7B9D', color: 'white', fontWeight: 'bold' }}
                  >
                    <th>Sl No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='trow3T' 
                  // style={{ backgroundColor: '#F7F6F3' }}
                  >
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="divSSYTable">
              <h3>Strand - Substrand - Year Table</h3>
              <table id="gvSSYTable">
                <thead>
                  <tr className='trow2T'
                  // style={{ backgroundColor: '#5D7B9D', color: 'white', fontWeight: 'bold' }}
                  >
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='trow3T'
                  // style={{ backgroundColor: '#F7F6F3' }}
                  >
                    <td>Data</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="divQnNavigationTable">
              <h3>Question Navigation Table</h3>
              <table id="gvQnNavigationTable">
                <thead>
                  <tr className='trow2T'
                  // style={{ backgroundColor: '#5D7B9D', color: 'white', fontWeight: 'bold' }}
                  >
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='trow3T'
                  // style={{ backgroundColor: '#F7F6F3' }}
                  >
                    <td>
                      <button type="button">View Question</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </body>
    </div>
  );
};

export default NavigationReport;
