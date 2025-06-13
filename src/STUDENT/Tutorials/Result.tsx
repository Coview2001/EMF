import React from 'react'
import './Style/Result.css';

const Result: React.FC = () => {
  return (
    <form id="form1" >
		<div id="colour_squares_right" className="colour_squares"></div>
		<div id="colour_squares_left" className="colour_squares"></div>
		<div id="print_bottom_bar"></div>
		<div id="print_left_bar"></div>
		<div id="print_right_bar"></div>
		<div id="repeating_bg"></div>
		<div id="results_title_bar" className="section_container section_title_bar">
			<div id="bt_results" className="section_div bar_section">
				<p className="bar_title"></p>
			</div>
		</div>

		<div id="results" className="section_container">
			<p id="student_name_title" className="title_text"><span id="spanStudentFirstName" ></span></p>
			<p className="page_text_sml"><span id="spanActivityCompletionDate" ></span></p>
			<p className="page_text orange_text activity_title"><span id="spanActivityTitle" ></span></p>

			<p className="page_text_sml">
				<span id="unit_name">Unit: <span id="spanUnitName" ></span></span>
				<span id="unit_chapter_gap">
					<br />
				</span>
				<span id="unit_chapter_no_gap">/ </span>
				<span id="chapter_name">Chapter: <span id="spanChapterName" ></span></span>
			</p>

			<div id="score_section_container">
				<div id="activity_score">
					<p><span id="spanActivityScorePercentage" ></span>%</p>
				</div>
				<div id="score_bar_container">
					<div id="score_bar"></div>
					<div id="marks">
						<p><span id="spanNoOfCorrectAnswers" ></span>&nbsp;out of <span id="spanTotalNoOfQuestions" ></span></p>
					</div>
				</div>
			</div>
			<p id="pIsSolutionSeen" className="page_text_sml" >Viewed full solution: <span id="spanNoOfFullSolutionViewedQuestions" ></span>/ Viewed partial solution: <span id="spanNoOfPartialSolutionViewedQuestions" ></span></p>

			<div id="divAnimationBox" ></div>
			<p id="pActivitySuggestion" className="title_text_medium" ></p>
			<p id="pActivityMessage" className="page_text_sml" ></p>

			<div id="bottom_container">
				<div id="results_points_container">
					<div id="results_points_animal" className="results_points_animal_animation">
						<p id="points_earned">
							<span id="spanPointsEarnedForActivity" ></span>
							<br />
							<span className="small">POINTS</span>
						</p>
					</div>
					<div id="results_points_box_front"></div>
				</div>

				<div id="button_box">
					<div id="continue_btn" className="general_btn">
						<a href='/Result' id="linkbtnContinue" >
                            Continue
						</a>
					</div>

					<div className="custom_print_btn">
						<a href="/Result">Print</a>
					</div>


				</div>
			</div>
		</div>
	</form>
  )
}

export default Result;