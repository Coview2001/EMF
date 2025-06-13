import React from 'react'
import exit_n from '../Images/exit_n.png';
import timer_icon from '../Images/timer_icon.png';
import skip_n from '../Images/skip_n.png';
import next_test from '../Images/next_test.png';
import './Style/Test.css';

const Test: React.FC = () => {
  return (
    <form id="form1">
		<table width="100%" border={0} cellSpacing={0}
			cellPadding={0}>
			<tr>
				<td id='tdTitle' className="HeadMsg"></td>
			</tr>
			<tr>
				<td id="tdNavHolder">
					<table id="tblQnNav" border={0} cellPadding={0} cellSpacing={0} className="QnNavNEW">
						<tr className='trowT'
						// style={{ height: "50px" }}
						>
							<td width="1%"></td>
							<td width="10%" align="left">
                <a href='/Test'><img src={exit_n} alt="Exit" /></a>
							</td>
							<td width="5%" align="right" className='trow2T'
							// style={{ paddingRight: "5px" }}
							>
								<img src={timer_icon}  alt="images not found" />
							</td>
							<td width='10%' id="tdTime">
								<label id="lblTime" ></label>
							</td>
							<td width='15%' id="tdQnInd" align="center">&nbsp;
                                Question <span id="spanQnNo"></span>&nbsp;of&nbsp;<span id="spanTotalQns" ></span>
							</td>
							<td width='10%' align="right">Progress Bar:</td>
							<td width='28%' id="tdTimeProgress" valign="middle" align="left" 
							// style={{ paddingLeft: "5px" }}
							>
								<div id="divProgressBarContainer">
									<div id="divProgressBar"></div>
								</div>
							</td>
							<td align="left" className='trow3T'
							// style={{ width: "10%", paddingLeft: "5px" }}
							>
                <a href='/Test'><img src={skip_n} alt="Skip" /></a>
							</td>
							<td width='10%' align="right"  className='trow2T'
							// style={{ paddingLeft: "5px" }}
							>
                <a href='/Test'><img src={next_test} alt="Next" /></a>
							</td>
							<td width="1%" align="right" id="tdOK"></td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td id="tdQn" valign="top">
					<iframe id="iFrameQn" className='iFrameQnT' title='Qn'
					// style={{ width: "100%" }}
					></iframe>
				</td>
			</tr>
		</table>

		<div id="dialog-confirm" title="" className='dialog-confirmT'
		//  style={{ display: "none" }}
		 >
			<p><span className="ui-icon ui-icon-alert" id='spanAlertT'
			// style={{ float: "left", margin: "12px 12px 20px 0" }}
			></span></p>
		</div>
	</form>
  )
}

export default Test;