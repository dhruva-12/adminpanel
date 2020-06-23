
import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';


export default class Ui_temp extends Component{
  render() {
    return (
      <div>
        
      
        {/*== MAIN CONTRAINER ==*/}
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
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Ui Form</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Normal Form Fields (Full)</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Normal Form Fields (Full)</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Normal Form Fields (Half)</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Normal Form Fields (Full)</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                      </div>
                    </div>
                  </div>
                </div>
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