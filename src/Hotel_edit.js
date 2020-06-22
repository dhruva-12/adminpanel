import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';

var Hotel_edit = React.createClass({
  render: function() {
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
              <div className="sb2-12">
                <ul>
                  <li><img src="images/placeholder.jpg" alt="" />
                  </li>
                  <li>
                    <h5>Victoria Baker <span> Santa Ana, CA</span></h5>
                  </li>
                  <li />
                </ul>
              </div>
              {/*== LEFT MENU ==*/}
              <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                  <li><a href="index.html"><i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard</a>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-list-ul" aria-hidden="true" /> Listing</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="listing-all.html">All listing</a>
                        </li>
                        <li><a href="listing-add.html">Add New listing</a>
                        </li>
                        <li><a href="listing-cat-all.html">All listing Categories</a>
                        </li>
                        <li><a href="listing-cat-add.html">Add listing Categories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-user" aria-hidden="true" /> Users</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="user-all.html">All Users</a>
                        </li>
                        <li><a href="user-add.html">Add New user</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="package-all.html">All Packages</a>
                        </li>
                        <li><a href="package-add.html">Add New Package</a>
                        </li>
                        <li><a href="package-cat-all.html">All Package Categories</a>
                        </li>
                        <li><a href="package-cat-add.html">Add Package Categories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header active"><i className="fa fa-h-square" aria-hidden="true" /> Hotels</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-all.html" className="menu-active">All Hotels</a>
                        </li>
                        <li><a href="hotel-add.html">Add New Hotel</a>
                        </li>
                        <li><a href="hotel-room-type-all.html">Room Type</a>
                        </li>
                        <li><a href="hotel-room-type-add.html">Add Room Type</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-picture-o" aria-hidden="true" /> Sight Seeings</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="sight-see-all.html">All Sight Seeings</a>
                        </li>
                        <li><a href="sight-see-add.html">Add New Sight Seeing</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-calendar-o" aria-hidden="true" /> Events</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="event-all.html">All Events</a>
                        </li>
                        <li><a href="event-add.html">Add New Event</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-braille" aria-hidden="true" /> Ui-Kits</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="ui-form.html">ui-form</a>
                        </li>
                        <li><a href="ui-kit.html">ui-kit</a>
                        </li>
                        <li><a href="ui-table.html">ui-table</a>
                        </li>
                        <li><a href="ui-pre-load.html">ui-pre-load</a>
                        </li>
                        <li><a href="ui-tab.html">ui-tab</a>
                        </li>
                        <li><a href="ui-icons.html">ui-icons</a>
                        </li>
                        <li><a href="ui-collapsible.html">ui-collapsible</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-usd" aria-hidden="true" /> Discounts</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="discount.html">All Discounts</a>
                        </li>
                        <li><a href="discount-add.html">Add New Discounts</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="offers.html">All Offers</a>
                        </li>
                        <li><a href="offers-add.html">Add New Offers</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-ticket" aria-hidden="true" /> Booking &amp; Enquiry</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-booking-all.html">Hotel</a>
                        </li>
                        <li><a href="package-booking-all.html">Package</a>
                        </li>
                        <li><a href="sight-see-booking-all.html">Sight Seeings</a>
                        </li>
                        <li><a href="event-booking-all.html">Events</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-rss" aria-hidden="true" /> Blog &amp; Articals</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="blog-all.html">All Blogs</a>
                        </li>
                        <li><a href="blog-add.html">Add Blog</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="social-media.html"><i className="fa fa-plus-square-o" aria-hidden="true" /> Social Media</a>
                  </li>
                  <li><a href="login.html" target="_blank"><i className="fa fa-sign-in" aria-hidden="true" /> Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Edit Hotel</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <h2>Edit Hotel Details</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <ul className="nav nav-tabs tab-list">
                  <li className="active"><a data-toggle="tab" href="#home"><i className="fa fa-info" aria-hidden="true" /> <span>Detail</span></a>
                  </li>
                  <li><a data-toggle="tab" href="#menu1"><i className="fa fa-bed" aria-hidden="true" /> <span>Room Type</span></a>
                  </li>
                  <li><a data-toggle="tab" href="#menu2"><i className="fa fa-picture-o" aria-hidden="true" /> <span>Photo Gallery</span></a>
                  </li>
                  <li><a data-toggle="tab" href="#menu3"><i className="fa fa-facebook" aria-hidden="true" /> <span>Social Media</span></a>
                  </li>
                  <li><a data-toggle="tab" href="#menu4"><i className="fa fa-phone" aria-hidden="true" /> <span>Contact Info</span></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="home" className="tab-pane fade in active">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Listing Information</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="bor">
                        <form>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="list-title" type="text" className="validate" />
                              <label htmlFor="list-title">Listing Name</label>
                            </div>
                            <div className="input-field col s12">
                              <input id="list-name" type="text" className="validate" />
                              <label htmlFor="list-name">Contact Person</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <div className="chips chips-placeholder" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                              <label htmlFor="textarea1">Listing Descriptions:</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
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
                            <div className="input-field col s6">
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
                              <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Submit" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id="menu1" className="tab-pane fade">
                    <div className="inn-title">
                      <h4>Hotel Room Details</h4>
                      <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                    </div>
                    <div className="bor">
                      <form>
                        <div className="row">
                          <div className="input-field col s12">
                            <select multiple>
                              <option value disabled selected>Room Type</option>
                              <option value={1}>Deluxe</option>
                              <option value={2}>Premium</option>
                              <option value={3}>Premium Plus</option>
                              <option value={3}>Non-Deluxe</option>
                              <option value={3}>Normal</option>
                            </select>
                            <label>Select Category</label>
                          </div>
                          <div className="input-field col s12">
                            <input id="t2-price" type="number" className="validate" />
                            <label htmlFor="t2-price">Price</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <div className="chips chips-placeholder" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea id="textarea4" className="materialize-textarea" defaultValue={""} />
                            <label htmlFor="textarea4">Listing Descriptions:</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <div className="file-field input-field">
                              <div className="btn">
                                <span>File</span>
                                <input type="file" />
                              </div>
                              <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload room image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Submit" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="bor">
                      <form>
                        <div className="row">
                          <div className="input-field col s12">
                            <select multiple>
                              <option value disabled selected>Room Type</option>
                              <option value={1}>Deluxe</option>
                              <option value={2}>Premium</option>
                              <option value={3}>Premium Plus</option>
                              <option value={3}>Non-Deluxe</option>
                              <option value={3}>Normal</option>
                            </select>
                            <label>Select Category</label>
                          </div>
                          <div className="input-field col s12">
                            <input id="t2-price1" type="number" className="validate" />
                            <label htmlFor="t2-price1">Price</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <div className="chips chips-placeholder" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea id="textarea2" className="materialize-textarea" defaultValue={""} />
                            <label htmlFor="textarea2">Listing Descriptions:</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <div className="file-field input-field">
                              <div className="btn">
                                <span>File</span>
                                <input type="file" />
                              </div>
                              <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload room image" />
                              </div>
                            </div>
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
                  <div id="menu2" className="tab-pane fade">
                    <div className="inn-title">
                      <h4>Photo Gallery</h4>
                      <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                    </div>
                    <div className="bor">
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
                        <div className="row">
                          <div className="input-field col s12">
                            <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Upload" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="menu3" className="tab-pane fade">
                    <div className="inn-title">
                      <h4>Social Media</h4>
                      <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                    </div>
                    <div className="bor">
                      <form>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t4-soc1" type="text" defaultValue="http://facebook.com/" className="validate" />
                            <label htmlFor="t4-soc1">Facebook Url</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t4-soc2" type="text" defaultValue="http://google.com/gplus" className="validate" />
                            <label htmlFor="t4-soc2">Google Plus Url</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t4-soc3" type="text" defaultValue="http://twitter.com/" className="validate" />
                            <label htmlFor="t4-soc3">Twitter Url</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t4-soc4" type="text" defaultValue="http://Linkedin.com/" className="validate" />
                            <label htmlFor="t4-soc4">Linkedin Url</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t4-soc5" type="text" className="validate" />
                            <label htmlFor="t4-soc5">WhatsApp Number</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t4-soc6" type="text" defaultValue="http://vk.com/" className="validate" />
                            <label htmlFor="t4-soc6">Vk Url</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Upload" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="menu4" className="tab-pane fade">
                    <div className="inn-title">
                      <h4>Contact Info</h4>
                      <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                    </div>
                    <div className="bor">
                      <form>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="t5-n1" type="text" className="validate" />
                            <label htmlFor="t5-n1">Contact Name</label>
                          </div>
                          <div className="input-field col s6">
                            <input id="t5-n2" type="text" className="validate" />
                            <label htmlFor="t5-n2">Alter Contact Name</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input id="t5-n3" type="number" className="validate" />
                            <label htmlFor="t5-n3">Phone</label>
                          </div>
                          <div className="input-field col s6">
                            <input id="t5-n4" type="number" className="validate" />
                            <label htmlFor="t5-n4">Mobile</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="t5-n5" type="email" className="validate" />
                            <label htmlFor="t5-n5">Email</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea id="t5-n6" className="materialize-textarea" defaultValue={""} />
                            <label htmlFor="t5-n6">Listing Descriptions:</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Upload" />
                          </div>
                        </div>
                      </form>
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
});