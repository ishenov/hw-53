import React, { Component } from "react";

export default class TodoItem extends Component {
	render() {
		const { title, handleDelete} = this.props;
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6>{title}</h6>
				<div className="todo-icon">
					<span className="mx-2 text-danger" onClick={handleDelete}>Delete
          </span>
				</div>
			</li>
		);
	}
}