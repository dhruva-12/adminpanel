import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import { Link } from 'react-router-dom';
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';

class Routes extends Component {
  render() {
    return (
      
<div className="sb2-1"><div  className="sb2-12"><ul>

  <li><img src="images/placeholder.jpg" alt=""/></li>
  <li><h5>firstname lastname <span> Address</span></h5></li>
  <li></li></ul></div><div className="sb2-13"><ul className="collapsible" data-collapsible="accordion">
      <li>
      <Link to ={"/index"}  className="menu-active"><i className="fa fa-bar-chart" aria-hidden="true"></i> Dashboard</Link>
    </li>

    <li>
      
      <Link to= "/listingAll"  className="collapsible-header"><i  className="fa fa-list-ul" aria-hidden="true"></i> Listing</Link>
      <div className="collapsible-body left-sub-menu"><ul><li>All listing</li>
         <li><Link to="Listing_add">Add New listing</Link></li>
        <li><Link to="Listing_cat_all ">All listing Categories</Link></li>
        <li><Link to="Listing_cat_add ">Add listing Categories</Link></li></ul></div></li>
    <li>
    <Link to="" className="panel-collapse collapse in"><i className="fa fa-user" aria-hidden="true"></i> Users</Link>
    <div className="collapsible-body left-sub-menu"><ul>
    <li><Link to="User_all ">All Users</Link></li>
    <li><Link to="User_add">Add New user</Link></li></ul></div></li>
    <li>
      <Link to="" className="collapsible-header"><i className="fa fa-umbrella" aria-hidden="true"></i> Tour Packages</Link>
      <div className="collapsible-body left-sub-menu"><ul>
        <li><Link to="Package_all">All Packages</Link></li>
        <li><Link to="Package_add">Add New Package</Link></li>
        <li><Link to="Package_cat_all ">All Package Categories</Link></li>
        <li><Link to="Package_cat_add ">Add Package Categories</Link></li></ul></div></li>
    <li>
      <Link to=""  className="collapsible-header"><i className="fa fa-h-square" aria-hidden="true"></i> Hotels</Link>
    <div  className="collapsible-body left-sub-menu"><ul>
    <li><Link to="Hotel_all ">All   Hotels</Link></li>
    <li><Link to=" Hotel_add  ">Add New   Hotel</Link></li>
    <li><Link to=" Hotel_room_type_all">Room Type</Link></li>
    <li><Link to=" Hotel_room_type_add  ">Add Room Type</Link></li></ul></div></li>
    <li><Link to=""  className="collapsible-header">
      <i className="fa fa-picture-o" aria-hidden="true"></i> Sight Seeings</Link>
      <div className="collapsible-body left-sub-menu"><ul>
    <li>
      <Link to="Sight_see_all ">All Sight Seeings</Link></li>
    <li>
      <Link to="Sight_see_add ">Add New Sight Seeing</Link></li></ul></div></li>
    <li>
      <Link to=""  className="collapsible-header"><i  className="fa fa-calendar-o" aria-hidden="true"></i> Events</Link>
      <div className="collapsible-body left-sub-menu"><ul>
        <li><Link to="Event_all">All Events</Link></li>
      <li><Link to="Event_add">Add New Event</Link></li></ul></div></li>
    <li>
      <Link to=""  className="collapsible-header"><i className="fa fa-braille" aria-hidden="true"></i> Ui-Kits</Link><div         className="collapsible-body left-sub-menu"><ul>
        <li><Link to="Ui_form">ui-form</Link></li>
        <li><Link to="Ui_kit">ui-kit</Link></li>
        <li><Link to="Ui_table">ui-table</Link></li>
    <li>
      <Link to ="Ui_pre_load">ui-pre-load</Link></li><li><Link to="ui-tab  ">ui-tab</Link></li>
    <li>
      <Link to="Ui_icons  ">ui-icons</Link></li><li><Link to="ui-collapsible.">ui-collapsible</Link></li></ul></div></li>
    <li>
      <Link to=""    className="collapsible-header"><i  className="fa fa-usd" aria-hidden="true"></i> Discounts</Link><div         className="collapsible-body left-sub-menu"><ul><li>
        <Link to="Discount">All Discounts</Link></li><li>
        <Link to="Discount_add">Add New Discounts</Link></li></ul></div></li>
    <li>
      <Link to=""  className="collapsible-header"><i className="fa fa-tags" aria-hidden="true"></i> Offers</Link><div         className="collapsible-body left-sub-menu"><ul><li><Link to="offers    ">All Offers</Link></li>
    <li>
      <Link to="Offers_add">Add New Offers</Link></li></ul></div></li>
      <li
      ><Link to=""   className="collapsible-header"><i  className="fa fa-ticket" aria-hidden="true"></i> Booking &amp; Enquiry</Link><div         className="collapsible-body left-sub-menu"><ul>
      <li>
        <Link to="Hotel_booking_all">Hotel</Link></li>
        <li><Link to="Package_booking_all">Package</Link></li>
        <li> <Link to="Sight_see_booking-all">Sight Seeings</Link></li>
        <li><Link to="event-booking-all">Events</Link></li></ul></div></li>
        <li><Link to=""  className="collapsible-header"><i className="fa fa-rss" aria-hidden="true"></i> Blog &amp; Articals</Link><div         className="collapsible-body left-sub-menu"><ul><li><Link to="blog-all    ">All Blogs</Link></li><li><Link to="blog-add    ">Add Blog</Link></li></ul></div></li>
       <li> <Link to="Social_media"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Social Media</Link></li>
<li><Link to="Login" target="_blank"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link></li>

</ul>
</div></div>
            
    );
  }
}
export default Routes;

