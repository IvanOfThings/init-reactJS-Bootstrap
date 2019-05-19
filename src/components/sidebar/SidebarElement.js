import React from 'react'

function SidebarElement(props) {
    return (
        <div>
            <li className="nav-item active">
                <a className="nav-link" href={props.href}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>{props.text}</span></a>
            </li>
            <hr className="sidebar-divider" />
        </div>
    );
}

export default SidebarElement;