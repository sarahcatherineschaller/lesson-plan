import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLessonPlan } from '../actions/lessonPlans';

class LessonPlanForm extends Component {
	state = {
		title: '',
	}

	handleChange = event => {
		this.setState({
			title: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addLessonPlan(this.state)
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