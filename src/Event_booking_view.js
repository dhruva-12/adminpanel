import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
var Event_booking_view = React.createClass({
  render: function() {
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
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-h-square" aria-hidden="true" /> Hotels</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-all.html">All Hotels</a>
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
                  <li className="active-bre"><a href="#"> Hotel Booking Details</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-1">
                <div className="inn-title">
                  <h4>Event Booking User Details</h4>
                  <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                </div>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Hotel Name :</td>
                      <td>Doe</td>
                    </tr>
                    <tr>
                      <td>Start Date :</td>
                      <td>12 mar, 2017</td>
                    </tr>
                    <tr>
                      <td>End Date :</td>
                      <td>12 mar, 2017</td>
                    </tr>
                    <tr>
                      <td>User Name</td>
                      <td>John Mathive</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>+01 32145 45678</td>
                    </tr>
                    <tr>
                      <td>Email id</td>
                      <td>my test@gmail.com</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>Chennai</td>
                    </tr>
                    <tr>
                      <td>Adults</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Childrens</td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>
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