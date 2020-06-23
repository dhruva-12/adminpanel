
import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';

export default class User_all extends Component{
  render() {
    return (
      <div>
        
        
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
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
              {/*== LEFT MENU ==*/}
              
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
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>User Details</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-users" className="dropdown-content">
                          <li><a href="user-add.js">Add New</a>
                          </li>
                          <li><a href="user-edit.js">Edit</a>
                          </li>
                          <li><a href="#!">Update</a>
                          </li>
                          <li className="divider" />
                          <li><a href="#!"><i className="material-icons">delete</i>Delete</a>
                          </li>
                          <li><a href="user-view.js"><i className="material-icons">subject</i>View All</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Listings</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="list-img"><img src="images/user/1.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/2.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/3.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/4.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/5.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/6.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/1.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/2.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/1.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/3.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/4.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <a href="user-view.js"><i className="fa fa-eye" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="user-edit.js"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                                </td>
                                <td>
                                  <a href="#"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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