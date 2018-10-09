import React from 'react';
import './Header.css';
import Counter from './Timer';

class HeaderRight extends React.Component {
    render () {
        return (
            <div className="header-right" >
                <h6><b>MID-MARKET SALES, Q3 2018</b></h6>
                <div className="row">
                    <div className="col s6">
                        <Counter />
                    </div>
                    <div className="col s6">
                        <p className="grey-text">TIME TO LOTTERY</p>
                        <p className="light-green-text">
                            <i className="large material-icons">date_range</i>7 Days 
                        </p>
                    </div>
                </div>
            </div>
            ); 
        }
    }

  
  export default HeaderRight;