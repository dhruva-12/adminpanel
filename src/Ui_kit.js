import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';

export default class Ui_kit extends  Component{
  render() {
    return (
      <div>
        

        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
              <a href="#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></a>
              <a href="#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></a>
              <a href="index.js" className="logo"><img src="images/logo1.png" alt="" />
              </a>
            </div>
            {/*== SEARCH ==*/}
            <div className="col-md-6 col-sm-6 mob-hide">
              <form className="app-search">
                <input type="text" placeholder="Search..." className="form-control" />
                <a href><i className="fa fa-search" /></a>
              </form>
            </div>
            {/*== NOTIFICATION ==*/}
            <div className="col-md-2 tab-hide">
              <div className="top-not-cen">
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-commenting-o" aria-hidden="true" /><span>5</span></a>
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-envelope-o" aria-hidden="true" /><span>5</span></a>
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-tag" aria-hidden="true" /><span>5</span></a>
              </div>
            </div>
            {/*== MY ACCCOUNT ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6">
              {/* Dropdown Trigger */}
              <a className="waves-effect dropdown-button top-user-pro" href="#" data-activates="top-menu"><img src="images/user/6.png" alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
              </a>
              {/* Dropdown Structure */}
              <ul id="top-menu" className="dropdown-content top-menu-sty">
                <li><a href="setting.js" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting</a>
                </li>
                <li><a href="listing-all.js" className="waves-effect"><i className="fa fa-list-ul" aria-hidden="true" /> Listings</a>
                </li>
                <li><a href="hotel-all.js" className="waves-effect"><i className="fa fa-building-o" aria-hidden="true" /> Hotels</a>
                </li>
                <li><a href="package-all.js" className="waves-effect"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                </li>
                <li><a href="event-all.js" className="waves-effect"><i className="fa fa-flag-checkered" aria-hidden="true" /> Events</a>
                </li>
                <li><a href="offers.js" className="waves-effect"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                </li>
                <li><a href="user-add.js" className="waves-effect"><i className="fa fa-user-plus" aria-hidden="true" /> Add New User</a>
                </li>
                <li><a href="#" className="waves-effect"><i className="fa fa-undo" aria-hidden="true" /> Backup Data</a>
                </li>
                <li className="divider" />
                <li><a href="#" className="ho-dr-con-last waves-effect"><i className="fa fa-sign-in" aria-hidden="true" /> Logout</a>
                </li>
              </ul>
            </div>
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
                        <h4>Select Input Boxes</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn select-pos">
                        <form>
                          <div className="input-field col s12">
                            <select>
                              <option value disabled selected>Choose your option</option>
                              <option value={1}>Option 1</option>
                              <option value={2}>Option 2</option>
                              <option value={3}>Option 3</option>
                            </select>
                            <label>Materialize Select</label>
                          </div>
                          <div className="input-field col s12">
                            <select multiple>
                              <option value disabled selected>Choose your option</option>
                              <option value={1}>Option 1</option>
                              <option value={2}>Option 2</option>
                              <option value={3}>Option 3</option>
                            </select>
                            <label>Materialize Multiple Select</label>
                          </div>
                          <div className="input-field col s12">
                            <select multiple>
                              <optgroup label="team 1">
                                <option value={1}>Option 1</option>
                                <option value={2}>Option 2</option>
                              </optgroup>
                              <optgroup label="team 2">
                                <option value={3}>Option 3</option>
                                <option value={4}>Option 4</option>
                              </optgroup>
                            </select>
                            <label>Optgroups</label>
                          </div>
                          <div className="input-field col s12">
                            <select className="icons">
                              <option value disabled selected>Choose your option</option>
                              <option value data-icon="images/user/4.png" className="circle">example 1</option>
                              <option value data-icon="images/user/5.png" className="circle">example 2</option>
                              <option value data-icon="images/user/6.png" className="circle">example 3</option>
                            </select>
                            <label>Images in select</label>
                          </div>
                          <div className="input-field col s12">
                            <select className="icons">
                              <option value disabled selected>Choose your option</option>
                              <option value data-icon="images/user/4.png" className="circle">example 1</option>
                              <option value data-icon="images/user/5.png" className="circle">example 2</option>
                              <option value data-icon="images/user/6.png" className="circle">example 3</option>
                            </select>
                            <label>Images in select</label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Radio Input Buttons</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p>
                            <input name="group1" type="radio" id="test1" />
                            <label htmlFor="test1">Red</label>
                          </p>
                          <p>
                            <input name="group1" type="radio" id="test2" />
                            <label htmlFor="test2">Yellow</label>
                          </p>
                          <p>
                            <input className="with-gap" name="group1" type="radio" id="test3" />
                            <label htmlFor="test3">Green</label>
                          </p>
                          <p>
                            <input name="group1" type="radio" id="test4" disabled="disabled" />
                            <label htmlFor="test4">Brown</label>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Date Pickers</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p>
                            <label htmlFor="date-picker">Red</label>
                            <input type="date" id="date-picker" className="datepicker" />
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Chips</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <div className="chips" />
                        <div className="chips chips-initial" />
                        <div className="chips chips-placeholder" />
                        <div className="chips chips-autocomplete" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 sp-top-30">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Checkboxes</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p>
                            <input type="checkbox" id="test5" />
                            <label htmlFor="test5">Red</label>
                          </p>
                          <p>
                            <input type="checkbox" id="test6" defaultChecked="checked" />
                            <label htmlFor="test6">Yellow</label>
                          </p>
                          <p>
                            <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked="checked" />
                            <label htmlFor="filled-in-box">Filled in</label>
                          </p>
                          <p>
                            <input type="checkbox" id="indeterminate-checkbox" />
                            <label htmlFor="indeterminate-checkbox">Indeterminate Style</label>
                          </p>
                          <p>
                            <input type="checkbox" id="test7" defaultChecked="checked" disabled="disabled" />
                            <label htmlFor="test7">Green</label>
                          </p>
                          <p>
                            <input type="checkbox" id="test8" disabled="disabled" />
                            <label htmlFor="test8">Brown</label>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Switches</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        {/* Switch */}
                        <div className="switch mar-bot-20">
                          <label>
                            Off
                            <input type="checkbox" />
                            <span className="lever" /> On
                          </label>
                        </div>
                        {/* Disabled Switch */}
                        <div className="switch">
                          <label>
                            Off
                            <input disabled type="checkbox" />
                            <span className="lever" /> On
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>File Uploads &amp; File Input</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <div className="file-field input-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Uploads Multiple files</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <div className="file-field input-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" multiple />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Range Filter</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p className="range-field">
                            <input type="range" id="test9" min={0} max={100} />
                          </p>
                        </form>
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