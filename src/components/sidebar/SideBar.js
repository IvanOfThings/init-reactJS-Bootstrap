// SideBar.js

import React, { Component } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarElement from './SidebarElement';
import SidebarBlockElement from './SidebarBlockElement';
import SidebarContainer from './SidebarContainer';

export default class Sidebar extends Component {
  render() {
    /*
    const header_content = <SidebarHeader title={this.props.titleBar} />;
    const dashboard_content = <SidebarElement text="Dashboard" href="/" content={null} />;*/


    const dashbord_info = [
      {
        text: "Dashboard",
        controller: "collapsePages",
        classIcon: "sidebar-brand-icon",
        blocks: [
          {
            subtitle: "Login Screens:",
            links: [{ text: "Login", link: "utilities-color.html" },
            { text: "Register", link: "utilities-border.html" },
            { text: "Forgot Password", link: "utilities-animation.html" }]
          },
          {
            subtitle: "Other Pages:",
            links: [{ text: "Login", link: "utilities-color.html" },
            { text: "Register", link: "utilities-border.html" },
            { text: "Forgot Password", link: "utilities-animation.html" },
            { text: "Others", link: "utilities-other.html" }]
          }
        ]
      }
    ];
    //const interface_content = <SidebarBlockElement header="Interface" content={interface_header} />;
    /*
    
        <SidebarContainer content={(<SidebarHeader title={this.props.titleBar} />)} />
        <SidebarContainer content={(<SidebarElement text="Dashboard" href="/" content={null} />)} />
        <SidebarContainer content={(<SidebarBlockElement header="Interface" content={interface_info} />)} />
        <SidebarContainer content={(<SidebarBlockElement header="Addons" content={addons_info} />)} />
    */

    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <SidebarContainer>
          <SidebarHeader title={this.props.titleBar} />
        </SidebarContainer>
        <SidebarContainer>
          <SidebarElement text="Dashboard" href="/dashboard" content={null} />
        </SidebarContainer>
        <SidebarContainer>
          <SidebarBlockElement header="Interface"
            content={
              [
                {
                  text: "Components",
                  controller: "collapseTwo",
                  classIcon: "fa-cog",
                  blocks: [
                    {
                      subtitle: "Custom Components:",
                      links: [{ text: "Button", link: "/buttons" }, { text: "Cards", link: "/cards" }]
                    }
                  ]
                },
                {
                  text: "Utilities",
                  controller: "collapseUtilities",
                  classIcon: "fa-wrench",
                  blocks: [
                    {

                      subtitle: "Custom Custom Utilities:",
                      links: [{ text: "Colors", link: "utilities-color.html" },
                      { text: "Borders", link: "utilities-border.html" },
                      { text: "Animations", link: "utilities-animation.html" },
                      { text: "Others", link: "utilities-other.html" }]
                    }
                  ]
                }
              ]
            }
          />
        </SidebarContainer>
        <SidebarContainer>
          <SidebarBlockElement header="Addons" content={
            [
              {
                text: "Pages",
                controller: "collapsePages",
                classIcon: "fa-folder",
                blocks: [
                  {
                    subtitle: "Login Screens:",
                    links: [{ text: "Login", link: "utilities-color.html" },
                    { text: "Register", link: "utilities-border.html" },
                    { text: "Forgot Password", link: "utilities-animation.html" }]
                  },
                  {
                    subtitle: "Other Pages:",
                    links: [{ text: "404", link: "/404" },
                    { text: "Blank Page", link: "blank.html" }]
                  }
                ]
              }
            ]
          } />

          <li className="nav-item">
            <a className="nav-link" href="/charts">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/tables">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span></a>
          </li>
        </SidebarContainer>



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