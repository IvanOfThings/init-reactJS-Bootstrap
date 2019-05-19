import React from 'react'

function SidebarCollapsableElement(props) {

    return (
        <div>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={"#"+props.controls} aria-expanded="true" aria-controls={props.controls}>
                    <i className={"fas fa-fw "+props.classIcon}></i>
                    <span>{props.text}</span>
                </a>
                <div id={props.controls} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{props.subtitle}</h6>
                        {props.content.map((item) => (
                            <a className="collapse-item" href={item.link}> {item.text}</a>
                        ))}
                    </div>
                </div>
            </li>
        </div>
    );
}

export default SidebarCollapsableElement;