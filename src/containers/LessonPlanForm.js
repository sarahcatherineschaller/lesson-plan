import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLessonPlan } from '../actions/lessonPlans';

class LessonPlanForm extends Component {
	render() {
		return(
			<div>
			</div>
		)
	}
}

export default connect()(LessonPlanForm);