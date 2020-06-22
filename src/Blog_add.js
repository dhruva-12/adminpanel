import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
class Blog_add extends Component{
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
                <li><a href="setting.html" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting</a>
                </li>
                <li><a href="listing-all.html" className="waves-effect"><i className="fa fa-list-ul" aria-hidden="true" /> Listings</a>
                </li>
                <li><a href="hotel-all.html" className="waves-effect"><i className="fa fa-building-o" aria-hidden="true" /> Hotels</a>
                </li>
                <li><a href="package-all.html" className="waves-effect"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                </li>
                <li><a href="event-all.html" className="waves-effect"><i className="fa fa-flag-checkered" aria-hidden="true" /> Events</a>
                </li>
                <li><a href="offers.html" className="waves-effect"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                </li>
                <li><a href="user-add.html" className="waves-effect"><i className="fa fa-user-plus" aria-hidden="true" /> Add New User</a>
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
            
              {/*== LEFT MENU ==*/}
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="index.html"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Add New Post</a>
                  </li>
                  <li className="page-back"><a href="index.html"><i className="fa fa-backward" aria-hidden="true" /> Back</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <div className="box-inn-sp">
                  <div className="inn-title">
                    <h4>Add New Post</h4>
                    <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                  </div>
                  <div className="bor">
                    <form>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="list-title" type="text" className="validate" />
                          <label htmlFor="list-title">Post Name</label>
                        </div>
                        <div className="input-field col s12">
                          <div className="file-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Upload Blog Banner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                          <label htmlFor="textarea1">Blog Descriptions:</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <select multiple>
                            <option value disabled selected>Choose Category</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Educations</option>
                            <option value={3}>Medical</option>
                            <option value={3}>Health</option>
                            <option value={3}>Fitness</option>
                            <option value={3}>Tution</option>
                            <option value={3}>Software</option>
                            <option value={3}>Wedding</option>
                            <option value={3}>Party</option>
                            <option value={3}>Spa/Club</option>
                          </select>
                          <label>Select Category</label>
                        </div>
                        <div className="input-field col s12">
                          <select multiple>
                            <option value disabled selected>Choose Category</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Educations</option>
                            <option value={3}>Medical</option>
                            <option value={3}>Health</option>
                            <option value={3}>Fitness</option>
                            <option value={3}>Tution</option>
                            <option value={3}>Software</option>
                            <option value={3}>Wedding</option>
                            <option value={3}>Party</option>
                            <option value={3}>Spa/Club</option>
                          </select>
                          <label>Select Sub Category</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="post-auth" type="text" className="validate" />
                          <label htmlFor="post-auth">Author Name</label>
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
        
      </div>
    );
  }
}
export default Blog_add;