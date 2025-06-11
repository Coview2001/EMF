import React from 'react';
import './Style/Assessment.css';
import top_blue_panel from './Image/top_blue_panel.png';
import signout_n from './Image/signout_n.png';
import signout_d from './Image/signout_d.png';
import skip_n from './Image/skip_n.png';
import skip_d from './Image/skip_d.png';
import ok_n from './Image/ok_n.png';
import ok_d from './Image/ok_d.png';
import ok_blue_n from './Image/ok_blue_n.gif';
import ok_dblue_o from './Image/ok_dblue_o.gif';
import ok_dblue_d from './Image/ok_dblue_d.gif';
import exit_white_n from './Image/exit_white_n.gif';
import exit_white_o from './Image/exit_white_o.gif';
import exit_white_d from './Image/exit_white_d.gif';

const Assessment: React.FC = () => {
    return (
        <div id="bodyContent">
          <form id='Form'>
            <div id="divContent">
                  <div id="divAssessment" className='divAssessmentT'
                //   style={{ fontFamily: 'Arial', fontSize: '11pt', color: '#1760cf', padding: '0px', margin: '0px' }}
                  >
                      <div id="divMDButtons">
                          <table cellPadding={0} border={0} cellSpacing={0} className='tableT'
                        //   style={{ borderCollapse: 'collapse', width: '100%', height: '79px', backgroundImage: `url(${top_blue_panel})`, backgroundRepeat: 'repeat' }}
                          >
                              <tbody>
                                  <tr>
                                      <td className='TabledataT'
                                    //   style={{ width: '5%', paddingLeft: '10px', verticalAlign: 'top', paddingTop: '13px' }}
                                      >
                                          <img id='imgbtnLogout' src={signout_n} alt="Logout" 
                                              onMouseOver={e => e.currentTarget.src = signout_d} 
                                              onMouseOut={e => e.currentTarget.src = signout_n}
                                          />
                                      </td>
                                      <td id="tdLoggedName" 
                                    //   style={{ width: '32%', textAlign: 'left', paddingLeft: '10px', paddingRight: '20px', verticalAlign: 'top', paddingTop: '19px' }} 
                                      className="CssHeadT" >Logged in as</td>
                                      <td 
                                    //   style={{ width: '3%', textAlign: 'right', verticalAlign: 'top', paddingTop: '19px' }} 
                                      className="CssHeadT">Progress</td>
                                      <td className='Tabledata2T'
                                    //   style={{ width: '30%', paddingLeft: '10px', paddingRight: '10px', verticalAlign: 'top', paddingTop: '19px' }}
                                      >
                                          <div id="divProgressBarContainer">
                                              <div id="divProgressBar"></div>
                                          </div>
                                      </td>
                                      <td className='Tabledata3T'
                                    //   style={{ width: '30%', textAlign: 'right', verticalAlign: 'top', paddingTop: '13px', paddingRight: '10px' }}
                                      >
                                          <img src={skip_n} alt="Skip" className='imgSkipT'
                                            // style={{ cursor: 'pointer' }} 
                                              onMouseOver={e => e.currentTarget.src = skip_d} 
                                              onMouseOut={e => e.currentTarget.src = skip_n} 
                                              onMouseDown={e => e.currentTarget.src = skip_d}
                                          />
                                          &nbsp;&nbsp;&nbsp;&nbsp;
                                          <img src={ok_n} alt="OK" className='imgOkT'
                                        //   style={{ cursor: 'pointer' }} 
                                              onMouseOver={e => e.currentTarget.src = ok_d} 
                                              onMouseOut={e => e.currentTarget.src = ok_n} 
                                              onMouseDown={e => e.currentTarget.src = ok_d}
                                          />
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div id="divMDFrm" className="cssIfrmT">
                          <iframe id="iFrameQn" frameBorder="0" 
                        //   style={{ overflow: 'auto', width: '100%', backgroundColor: '#f8fafc' }}
                          ></iframe>
                      </div>
                  </div>
                  <div id='divOpaque' className='divOpaqueT'
                //   style={{ display: 'none', position: 'absolute', backgroundColor: '#cccccc', opacity: 0.8, zIndex: 200 }}
                  ></div>
                  <div id='divMesg' className='divMesgT'
                //   style={{ display: 'none', position: 'absolute', backgroundColor: 'white', zIndex: 300, border: 'solid 2px blue', fontFamily: 'Arial', fontSize: '14pt', textAlign: 'center' }}
                  >
                      <p>Please wait - Processing ...</p>
                  </div>
                  <div id="divTestComplete" className='divTestCompleteT'
                //   style={{ display: 'none', fontFamily: 'Arial', fontSize: '12pt', color: '#1760cf', textAlign: 'center' }}
                  >
                      <div id="divSubTestComplete" className='divSubTestCompleteT'
                    //   style={{ width: '800px', height: '600px' }}
                      >
                          <div id="div_1" className='div_1T'
                        //   style={{ width: '800px', height: '24px', paddingTop: '77px' }}
                          >
                              <table cellPadding={0} border={0} cellSpacing={0}
                              className='tableAssessmentCompletedT'
                            //   style={{ width: '100%', textAlign: 'left' }}
                              >
                                  <tbody>
                                      <tr>
                                          <td className='td_1T' 
                                        //   style={{ width: '190px' }}
                                          ></td>
                                          <td className='tdAssessmentCompletedT' 
                                        //   style={{ width: '327px' }}
                                          >ASSESSMENT COMPLETED</td>
                                          <td className='tdDateT' 
                                        //   style={{ width: '190px' }}
                                          >Date: <label id="lblLocalDate1"></label></td>
                                          <td><button type="button" className='RemoveSelBorder'  
                                        //   style={{ color: 'red', textDecoration: 'none' }}
                                          >Log Out</button></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div id="divP1" className='divP1T'
                        //   style={{ width: '347px', paddingTop: '115px', paddingLeft: '65px' }}
                          >
                              <table cellPadding={0} border={0} cellSpacing={0} className='tableCompletionOfAssessmentT'
                            //   style={{ width: '100%', textAlign: 'left' }}
                              >
                                  <tbody>
                                      <tr>
                                          <td>Completion of Assessment</td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div id="divP2" className='divP2T'
                                            //   style={{ width: '282px', paddingTop: '12px', paddingLeft: '40px' }}
                                              >
                                                  <table cellPadding={0} border={0} cellSpacing={0} className='tableCompletionOfAssessment2T'
                                                //   style={{ width: '100%', textAlign: 'center', color: 'black' }}
                                                  >
                                                      <tbody>
                                                          <tr>
                                                              <td>Congratulations for completing the Mathematics Doctor Online Assessment.</td>
                                                          </tr>
                                                          <tr>
                                                              <td className='tdCompletionOfAssessmentT'
                                                            //   style={{ height: '10px' }}
                                                              ></td>
                                                          </tr>
                                                          <tr>
                                                              <td><label id="lblComplRep"></label></td>
                                                          </tr>
                                                          <tr>
                                                              <td className='tdCompletionOfAssessment2T' 
                                                            //   style={{ height: '10px' }}
                                                              ></td>
                                                          </tr>
                                                          <tr>
                                                              <td>
                                                                  <img id='imgSendEmail' src={ok_blue_n} alt="Send Email" className='imgSendEmailT'
                                                                //   style={{ outline: 'none' }} 
                                                                      onMouseOver={e => e.currentTarget.src = ok_dblue_o} 
                                                                      onMouseOut={e => e.currentTarget.src = ok_blue_n} 
                                                                      onMouseDown={e => e.currentTarget.src = ok_dblue_d} 
                                                                      onClick={() => { /* function to send email */ }}
                                                                  />
                                                                  <img id='imgExit' src={exit_white_n} alt="Exit" className='imgExitT'
                                                                //   style={{ outline: 'none' }} 
                                                                      onMouseOver={e => e.currentTarget.src = exit_white_o} 
                                                                      onMouseOut={e => e.currentTarget.src = exit_white_n} 
                                                                      onMouseDown={e => e.currentTarget.src = exit_white_d}
                                                                  />
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
        </div>
    );
}

export default Assessment;
