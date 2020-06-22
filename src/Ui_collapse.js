import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';

export default class Ui_collapse extends Component{
  render() {
    return (
      <div>
        
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
              <a href="#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></a>
              <a href="#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></a>
              <a href="index.html" className="logo"><img src="images/logo1.png" alt="" />
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
                        <h4>Normal Collapsible</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <ul className="collapsible" data-collapsible="accordion">
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body coll-body"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body coll-body"><span>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body coll-body"><span>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Collapsible Expandable</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <ul className="collapsible" data-collapsible="expandable">
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body coll-body"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body coll-body"><span>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body coll-body"><span>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Collapsible Popup</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <ul className="collapsible popout" data-collapsible="accordion">
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body coll-body"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body coll-body"><span>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body coll-body"><span>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</span>
                            </div>
                          </li>
                        </ul>
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