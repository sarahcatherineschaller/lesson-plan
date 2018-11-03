import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getLessonPlans } from '../actions/lessonPlans';

class LessonPlans extends Component {

	componentDidMount() {
		this.props.getLessonPlans()
	}

	render() {
		return(
			<div>
			Lesson Plans
			</div>
		)
	}
}

const mapStateToProps = state => {
	return({
		lesson_plan: state.lesson_plan
	})
}

export default connect(mapStateToProps, { getLessonPlans })(LessonPlans);