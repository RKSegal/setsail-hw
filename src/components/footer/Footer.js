import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render () {
        return (
        <div className="footer">
          <div className="footer-green-line">
              
            <p><img 
                src={require('./pie.png')} 
                style={{ width: 12, height: 12 }}
              /> <b>NEXT UP:</b> Tips for Attainment</p>
          </div>
         </div>
        )
        }
    }
  
  export default Footer;