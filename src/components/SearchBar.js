import React, {Component} from 'react';

import {Paper, TextField} from '@material-ui/core';

class SearchBar extends Component {

	state = {
		searchTerm: ''
	};

	handleChange = (e) => {
		this.setState({
			searchTerm:e.target.value
		})
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const  {searchTerm} = this.state;
		const {onFormSubmit} = this.props;

		onFormSubmit(searchTerm);
	};

	render() {
		return (
			<Paper elevation={10} style={{padding:'25px'}}>
				<form onSubmit={this.handleSubmit}>
					<TextField fullWidth label="Search youtube videos..." onChange={this.handleChange}/>
				</form>
			</Paper>
		);
	}
}

export default SearchBar;