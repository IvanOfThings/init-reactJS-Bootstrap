import React from 'react'

function SidebarCollapsableElement(props) {

    return (
        <div>
            <h6 className="collapse-header">{props.subtitle}</h6>
            {
                props.content.map((item) => (
                    <a className="collapse-item" href={item.link}> {item.text}</a>
                ))
            }
        </div>
    );
}

export default SidebarCollapsableElement;