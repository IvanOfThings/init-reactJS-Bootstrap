import React from 'react'
import SidebarBlockElement from './SidebarBlockElement';

function SidebarContainer(props) {
    return (
        <div>
            <div className="sidebar-heading">
                {props.header}
            </div>
            {props.children}
            <hr className="sidebar-divider" />
        </div>

    );
}

export default SidebarContainer;