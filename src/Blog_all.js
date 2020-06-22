import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
 class Blog_all extends Component  {
  render(){
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
                  <li className="active-bre"><a href="#"> Blog</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-1">
                <h2>All Blog Posts</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Categories</th>
                      <th>Date</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
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
}


export default Blog_all;