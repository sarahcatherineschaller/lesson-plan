import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLessonPlan } from '../actions/lessonPlans';
import { updateLessonPlanFormData } from '../actions/lessonPlanForm';

class LessonPlanForm extends Component {

	handleChange = event => {
		const { name, value } = event.target 
		const currentLessonPlanFormData = Object.assign({}, this.props.lessonPlanFormData, {
			[name]: value
		})
		this.props.updateLessonPlanFormData(currentLessonPlanFormData)
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.createLessonPlan(this.props.lessonPlanFormData, this.props.history)
	}

	render() {
		const { title } = this.props.lessonPlanFormData

		return(
			<div>
				<form onSubmit={ (event) => this.handleSubmit(event) }>
				<p>
					<label>add lesson plan</label>
					<input type="text" onChange={ event => this.handleChange(event) } name="title" value={ title } />
				</p>
				<input type="submit" />
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		lessonPlanFormData: state.lessonPlanFormData
	}
}




export default connect(mapStateToProps, { createLessonPlan, updateLessonPlanFormData })(LessonPlanForm);