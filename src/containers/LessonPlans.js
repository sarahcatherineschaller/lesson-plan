import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getLessonPlans } from '../actions/lessonPlans';
import LessonPlan from './LessonPlan';
import LessonPlanForm from './LessonPlanForm';


class LessonPlans extends Component {
	componentDidMount() {
		this.props.getLessonPlans();
	}

	render() {

		return(
			<div>
			<h1>Lesson Plans</h1>
			
				<LessonPlan />
				<LessonPlanForm />
				
			
			
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		lesson_plans: state.lesson_plans
	}
}

export default connect(mapStateToProps, { getLessonPlans })(LessonPlans);