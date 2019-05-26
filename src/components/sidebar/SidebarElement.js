import React from 'react'

function SidebarElement(props) {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.href}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>{props.text}</span></a>
        </li>
    );
}

export default SidebarElement;