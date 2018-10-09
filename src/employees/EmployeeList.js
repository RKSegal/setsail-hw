import React, { Component } from 'react'
import { sortBy } from 'lodash'

import EmployeeData from '../data/data.json'
import EmployeeDetail from './EmployeeDetail'
import './Employees.css'
const EmployeeDataSortedByRank = sortBy(EmployeeData, ['rank']);

class EmployeeList extends Component {
    render () {
        return (
            <div className="row employees">
                <div>
                {   
                    EmployeeDataSortedByRank.slice(0,3).map((employeeInfo, index) => {
                        return <EmployeeDetail employee={employeeInfo} key={`employee-list-key ${index}`}/>
                    })
                }
                </div>
            </div>
        )
    }
}

export default EmployeeList