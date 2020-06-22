import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
var Login= React.createClass({
  render: function() {
    return (
      <div>
        
       
        <div className="blog-login">
          <div className="blog-login-in">
            <form>
              <img src="images/logo.png" alt="" />
              <div className="row">
                <div className="input-field col s12">
                  <input id="first_name1" type="text" className="validate" />
                  <label htmlFor="first_name1">User Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="last_name" type="password" className="validate" />
                  <label htmlFor="last_name">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <a className="waves-effect waves-light btn-large btn-log-in" href="index.html">Login</a>
                </div>
              </div>
              <a href="forgot.html" className="for-pass">Forgot Password?</a>
            </form>
          </div>
        </div>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
});