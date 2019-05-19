// SideBar.js

import React, { Component } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarElement from './SidebarElement';
import SidebarCollapsableElement from './SidebarCollapsableElement';

export default class SideBar extends Component {
  render() {
    const content =

      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Custom Components:</h6>
        <a className="collapse-item" href="buttons.html">Buttons</a>
        <a className="collapse-item" href="cards.html">Cards</a>
      </div>;
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <SidebarHeader title={this.props.titleBar} />
        <SidebarElement text="Dashboard" href="index.html" content={null} />

        <div className="sidebar-heading">
          Interface
                </div>

        <SidebarCollapsableElement classIcon="fa-cog" controls="collapseTwo" text="Components" subtitle="Custom Components:" content={[{ text: "Button", link: "buttons.html" }, { text: "Cards", link: "cards.html" }]} />
        <SidebarCollapsableElement classIcon="fa-wrench" controls="collapseUtilities" text="Utilities" subtitle="Custom Custom Utilities:" content={[
          { text: "Colors", link: "utilities-color.html" },
          { text: "Borders", link: "utilities-border.html" },
          { text: "Animations", link: "utilities-animation.html" },
          { text: "Others", link: "utilities-other.html" }
        ]} />


        <hr className="sidebar-divider" />>

      <div className="sidebar-heading">
          Addons
                </div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">Login</a>
              <a className="collapse-item" href="register.html">Register</a>
              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">404 Page</a>
              <a className="collapse-item" href="blank.html">Blank Page</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul >
    )
  }
}