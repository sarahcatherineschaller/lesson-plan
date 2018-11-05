import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLessonPlan } from '../actions/lessonPlans';
import { updateLessonPlanFormData } from '../actions/lessonPlanForm';

class LessonPlanForm extends Component {
	state = {
		title: '',
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
		return(
			<div>
				<form onSubmit={ (event) => this.handleSubmit(event) }>
				<p>
					<label>add lesson plan</label>
					<input type="text" onChange={ (event) => this.handleChange(event) } value={ this.state.title } />
				</p>
				<input type="submit" />
				</form>
			</div>
		)
	}
}




export default connect()(LessonPlanForm);