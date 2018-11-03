import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	return (
		<div>
			<Link to='/'>Home</Link>{" "}
			<Link to='/about'>About</Link>{" "}
			<Link to='/about'>Contact</Link>{" "}
			<Link to='/lesson_plans'>Lessons</Link>{" "}

		</div>
	)
}

export default Navbar;