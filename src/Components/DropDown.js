import React, { useRef }from 'react';
import { useDetectOutsideClick } from './useDetectOutsideClick.js';

import './menuStyles.css';


   /* <NavLink className="NavLink" to="/" activeClassName="active"> Home </NavLink>
    <NavLink className="NavLink" to="/Win" activeClassName="active"> Win </NavLink>
    <NavLink className="NavLink" to="/CConvert" activeClassName="active">  Currency Convertor  </NavLink>
    */

   
    export default function App() {
      const dropdownRef = useRef(null);
      const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
      const onClick = () => setIsActive(!isActive);
    
      return (
        <div className="container">
          <div className="menu-container">
            <button onClick={onClick} className="menu-trigger">
              <span>Menu</span>
            </button>
            <nav
              ref={dropdownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <a href="./CConvert">Currency Convertor</a>
                </li>
                <li>
                  <a href="./Win">Win</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
    