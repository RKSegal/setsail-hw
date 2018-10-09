import React from 'react';
import './Header.css'

class HeaderLeft extends React.Component {
    render () {
        return (
            <div className="header-left row">
                <div className="col s5" >
                    <h5 className="white-text">
                        <b>Leaderboard</b>
                    </h5>
                    <p className="light-blue-text">As on Feb 13</p>
                </div>
            </div>
    ); 
  }
}

  
  export default HeaderLeft;