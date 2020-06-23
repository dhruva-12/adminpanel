import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Notifysearch from './Notifysearch';
import Drop from './Drop';

var Hotel_room_type_all = React.createClass({
  render: function() {
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
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Room Types</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-1">
                <h2>All Room Types</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Package Categories</th>
                      <th>Date</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Package Name Here</td>
                      <td>24 may, 2017</td>
                      <td><a href="hotel-room-type-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
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
});