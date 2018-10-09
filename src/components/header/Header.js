import React from 'react';
import './Header.css'
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

class Header extends React.Component {
    render () {
        return (
            <nav className="z-depth-0">
              <div className="nav-wrapper">
                <div className="row">
                  <div className="col s1">
                    <i>
                      <img 
                        src={require('./setsail.png')} 
                        alt='setsail-logo'
                        style={{ width: 75, height: 75 }}/>
                    </i>
                  </div>
                  <div className="col s6">
                    <HeaderLeft />
                  </div>
                  <div className="col s5">
                  <HeaderRight />
                  </div>
  
                </div>
            </div>
          </nav>
    ); 
  }
}

  
  export default Header;