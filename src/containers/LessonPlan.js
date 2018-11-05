import React, { Component } from 'react';
import { connect } from 'react-redux';
import LessonPlans from './LessonPlans';
import LessonPlanForm from './LessonPlanForm';
import LessonPlanCard from '../components/LessonPlanCard';
import { getLessonPlan } from '../actions/lessonPlanActions';


class LessonPlan extends Component {

	componentDidMount() {
		this.props.getLessonPlan(this.props.match.params.lessonPlanId);
	}

	render() {
		return(
			<div>
				<h3>Lesson Plan Show Page</h3>
				<LessonPlanCard history={this.props.history} lesson_plan={this.props.lesson_plan} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return({
		lesson_plan: state.lesson_plans
	})
}

export default connect(mapStateToProps)(LessonPlan);