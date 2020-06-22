import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';

export default class Ui_icons extends Component{
  render() {
    return (
      <div>
        
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
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Icon Packs</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <div className="row icon-container">
                          <br />
                          <br />
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">info_outline</i><span>info_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">input</i><span>input</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">invert_colors</i><span>invert_colors</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">label</i><span>label</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">label_outline</i><span>label_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">language</i><span>language</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">query_builder</i><span>query_builder</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_identity</i><span>perm_identity</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_media</i><span>perm_media</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_phone_msg</i><span>perm_phone_msg</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_scan_wifi</i><span>perm_scan_wifi</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">picture_in_picture</i><span>picture_in_picture</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">play_for_work</i><span>play_for_work</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">polymer</i><span>polymer</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">power_settings_new</i><span>power_settings_new</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">print</i><span>print</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">thumb_down</i><span>thumb_down</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">thumb_up</i><span>thumb_up</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">thumbs_up_down</i><span>thumbs_up_down</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">email</i><span>email</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">dialpad</i><span>dialpad</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">dialer_sip</i><span>dialer_sip</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">contacts</i><span>contacts</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">forward_5</i><span>forward_5</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">stay_current_portrait</i><span>stay_current_portrait</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">stay_primary_landscape</i><span>stay_primary_landscape</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">stay_primary_portrait</i><span>stay_primary_portrait</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">swap_calls</i><span>swap_calls</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">textsms</i><span>textsms</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">voicemail</i><span>voicemail</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">vpn_key</i><span>vpn_key</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">group_work</i><span>group_work</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">grade</i><span>grade</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">clear_all</i><span>clear_all</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">chat_bubble_outline</i><span>chat_bubble_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">chat_bubble</i><span>chat_bubble</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">repeat</i><span>repeat</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">repeat_one</i><span>repeat_one</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">replay</i><span>replay</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">replay_10</i><span>replay_10</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">replay_30</i><span>replay_30</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">replay_5</i><span>replay_5</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">shuffle</i><span>shuffle</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">skip_next</i><span>skip_next</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">skip_previous</i><span>skip_previous</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">contact_phone</i><span>contact_phone</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">comment</i><span>comment</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">recent_actors</i><span>recent_actors</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">snooze</i><span>snooze</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">sort_by_alpha</i><span>sort_by_alpha</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">stop</i><span>stop</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">subtitles</i><span>subtitles</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">surround_sound</i><span>surround_sound</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">web</i><span>web</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">volume_up</i><span>volume_up</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">volume_off</i><span>volume_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">volume_mute</i><span>volume_mute</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">toc</i><span>toc</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">today</i><span>today</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">toll</i><span>toll</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">track_changes</i><span>track_changes</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">translate</i><span>translate</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">trending_down</i><span>trending_down</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">question_answer</i><span>question_answer</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">receipt</i><span>receipt</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">done</i><span>done</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">tab</i><span>tab</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">tab_unselected</i><span>tab_unselected</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">theaters</i><span>theaters</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">hd</i><span>hd</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">games</i><span>games</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">hearing</i><span>hearing</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_module</i><span>view_module</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_list</i><span>view_list</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_remote</i><span>settings_remote</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_voice</i><span>settings_voice</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">search</i><span>search</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings</i><span>settings</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_applications</i><span>settings_applications</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_backup_restore</i><span>settings_backup_restore</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_bluetooth</i><span>settings_bluetooth</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_brightness</i><span>settings_brightness</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_cell</i><span>settings_cell</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_ethernet</i><span>settings_ethernet</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_input_antenna</i><span>settings_input_antenna</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">trending_flat</i><span>trending_flat</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">trending_up</i><span>trending_up</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">work</i><span>work</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">youtube_searched_for</i><span>youtube_searched_for</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">zoom_in</i><span>zoom_in</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">my_location</i><span>my_location</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">visibility_off</i><span>visibility_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">visibility</i><span>visibility</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_week</i><span>view_week</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_stream</i><span>view_stream</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_quilt</i><span>view_quilt</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">video_library</i><span>video_library</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">videocam</i><span>videocam</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">videocam_off</i><span>videocam_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">volume_down</i><span>volume_down</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_overscan</i><span>settings_overscan</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_input_svideo</i><span>settings_input_svideo</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_input_hdmi</i><span>settings_input_hdmi</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_input_composite</i><span>settings_input_composite</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_input_component</i><span>settings_input_component</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">launch</i><span>launch</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_device_information</i><span>perm_device_information</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_data_setting</i><span>perm_data_setting</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">zoom_out</i><span>zoom_out</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">alarm_on</i><span>alarm_on</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">dns</i><span>dns</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">redeem</i><span>redeem</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">reorder</i><span>reorder</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">report_problem</i><span>report_problem</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">restore</i><span>restore</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">room</i><span>room</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">schedule</i><span>schedule</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">movie</i><span>movie</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">android</i><span>android</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">announcement</i><span>announcement</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">mic_off</i><span>mic_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">mic_none</i><span>mic_none</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">swap_horiz</i><span>swap_horiz</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">swap_vert</i><span>swap_vert</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">swap_vertical_circle</i><span>swap_vertical_circle</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">system_update_alt</i><span>system_update_alt</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">present_to_all</i><span>present_to_all</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">portable_wifi_off</i><span>portable_wifi_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">phonelink_setup</i><span>phonelink_setup</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">phonelink_ring</i><span>phonelink_ring</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">phonelink_lock</i><span>phonelink_lock</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">phonelink_erase</i><span>phonelink_erase</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">person_pin</i><span>person_pin</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">navigation</i><span>navigation</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">new_releases</i><span>new_releases</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">not_interested</i><span>not_interested</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">pause</i><span>pause</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">pause_circle_filled</i><span>pause_circle_filled</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">pause_circle_outline</i><span>pause_circle_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">play_arrow</i><span>play_arrow</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">play_circle_filled</i><span>play_circle_filled</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">play_circle_outline</i><span>play_circle_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">playlist_add</i><span>playlist_add</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">queue</i><span>queue</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">queue_music</i><span>queue_music</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">radio</i><span>radio</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">class</i><span>class</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">code</i><span>code</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">credit_card</i><span>credit_card</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">dashboard</i><span>dashboard</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">delete</i><span>delete</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">description</i><span>description</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">open_with</i><span>open_with</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">pageview</i><span>pageview</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">payment</i><span>payment</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_camera_mic</i><span>perm_camera_mic</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">perm_contact_calendar</i><span>perm_contact_calendar</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">airplay</i><span>airplay</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">done_all</i><span>done_all</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">phone</i><span>phone</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">no_sim</i><span>no_sim</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">invert_colors_off</i><span>invert_colors_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">chat</i><span>chat</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call_split</i><span>call_split</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call_received</i><span>call_received</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call_missed</i><span>call_missed</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call_merge</i><span>call_merge</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call_made</i><span>call_made</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call_end</i><span>call_end</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">call</i><span>call</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">business</i><span>business</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">alarm_off</i><span>alarm_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">message</i><span>message</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">location_on</i><span>location_on</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">location_off</i><span>location_off</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">live_help</i><span>live_help</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">album</i><span>album</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">av_timer</i><span>av_timer</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">closed_caption</i><span>closed_caption</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">equalizer</i><span>equalizer</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">turned_in_not</i><span>turned_in_not</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">verified_user</i><span>verified_user</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_agenda</i><span>view_agenda</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_array</i><span>view_array</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_carousel</i><span>view_carousel</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_column</i><span>view_column</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">subject</i><span>subject</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">supervisor_account</i><span>supervisor_account</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_power</i><span>settings_power</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">shop</i><span>shop</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">shop_two</i><span>shop_two</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">shopping_basket</i><span>shopping_basket</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">shopping_cart</i><span>shopping_cart</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">speaker_notes</i><span>speaker_notes</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">spellcheck</i><span>spellcheck</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">star</i><span>star</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">stars</i><span>stars</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">store</i><span>store</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">ring_volume</i><span>ring_volume</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">speaker_phone</i><span>speaker_phone</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">stay_current_landscape</i><span>stay_current_landscape</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">forum</i><span>forum</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">import_export</i><span>import_export</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">open_in_browser</i><span>open_in_browser</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">open_in_new</i><span>open_in_new</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">forward_30</i><span>forward_30</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">turned_in</i><span>turned_in</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_headline</i><span>view_headline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">view_day</i><span>view_day</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">warning</i><span>warning</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">error_outline</i><span>error_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">error</i><span>error</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">add_alert</i><span>add_alert</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">settings_phone</i><span>settings_phone</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">forward_10</i><span>forward_10</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">fast_rewind</i><span>fast_rewind</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">fast_forward</i><span>fast_forward</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">explicit</i><span>explicit</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">list</i><span>list</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">lock</i><span>lock</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">lock_open</i><span>lock_open</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">lock_outline</i><span>lock_outline</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">loyalty</i><span>loyalty</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">markunread_mailbox</i><span>markunread_mailbox</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">note_add</i><span>note_add</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">offline_pin</i><span>offline_pin</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">http</i><span>http</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">mic</i><span>mic</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">loop</i><span>loop</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">library_music</i><span>library_music</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">library_books</i><span>library_books</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">library_add</i><span>library_add</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">high_quality</i><span>high_quality</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">info</i><span>info</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">https</i><span>https</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">aspect_ratio</i><span>aspect_ratio</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">assessment</i><span>assessment</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">assignment</i><span>assignment</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">assignment_ind</i><span>assignment_ind</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">assignment_late</i><span>assignment_late</span>
                          </div>
                          <div className="icon-preview col s6 m3"><i className="material-icons dp48">mode_edit</i><span>mode_edit</span>
                          </div>
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