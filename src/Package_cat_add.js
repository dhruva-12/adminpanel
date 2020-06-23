import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';

export default class Package_cat_add extends Component{
  render() {
    return (
      <div>
        
        <div className="container-fluid sb1">
          <div className="row">
            <Notifysearch></Notifysearch>
           <Drop></Drop>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              
              {/*== LEFT MENU ==*/}
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Add New Package Categories</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <h2>Add New Package Categories</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="list-title" type="text" defaultValue className="validate" />
                      <label htmlFor="list-title">Enter Package Category</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*== BOTTOM FLOAT ICON ==*/}
        <section>
          <div className="fixed-action-btn vertical">
            <a className="btn-floating btn-large red pulse">
              <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
              <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a>
              </li>
              <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a>
              </li>
              <li><a className="btn-floating green"><i className="material-icons">publish</i></a>
              </li>
              <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a>
              </li>
            </ul>
          </div>
        </section>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
}