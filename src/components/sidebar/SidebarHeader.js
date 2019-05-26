import React from 'react'

function SidebarHeader(props) {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">{props.title}</div>
        </a>
    );
}

export default SidebarHeader;