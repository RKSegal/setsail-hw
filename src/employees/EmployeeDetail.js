import React, { Component } from 'react'

class EmployeeDetail extends Component {
    render () {

        return (
    			<div className="col s3">
      				<div className="card">
        				<div className="card-image">
							<img src={this.props.employee.avatarURL} />
        				</div>
        				<div className="card-content">
							  <p>{this.props.employee.name}</p>
							<p>{this.props.employee.rank}</p>
        				</div>
      				</div>
    			</div>
        )
    }
}

export default EmployeeDetail