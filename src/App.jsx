import "./App.css";
import React from 'react';
import { FaUserAlt } from "react-icons/fa";

function App() {
  return (
    <div className="body">
      <div className="app-container">
        <form>
          <div className="user-logo-container">
            <div className="user-logo-background">
              <FaUserAlt className="icon"/>
            </div>
          </div>
          <div className="email-address-container">
            <input type="email" placeholder="Email" />
          </div>
          <div className="password-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="submit-button-container">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App