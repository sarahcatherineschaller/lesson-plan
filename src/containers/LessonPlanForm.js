import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLessonPlan } from '../actions/lessonPlans';
import { updateLessonPlanFormData } from '../actions/lessonPlanForm';

class LessonPlanForm extends Component {
	state = {
		title: '', 
		grade_level: '', 
		subject: '', 
		total_time: '', 
		objective: '', 
		materials: '', 
		summary: '', 
		other: '',
	}

	handleChange = event => {
		const { name, value } = event.target 
		this.setState({
			[name]: value
		})
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
					<input type="text" onChange={ (event) => this.handleChange(event) } value={ title } />
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




export default connect(mapStateToProps, { createLessonPlan })(LessonPlanForm);