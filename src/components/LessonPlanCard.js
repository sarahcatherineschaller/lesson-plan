import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonPlanCard extends Component {
	render() {
		return(
			<div>
				<h3>{this.props.title}</h3>
			</div>
		)
	}
}


export default LessonPlanCard;