import React from 'react'
import SidebarBlockElementList from './SidebarBlockElementList';


function SidebarBlockElement(props) {
    return (
        <div>
            {
                props.content.map((element) => (
                    <li className="nav-item" >
                        <a className="nav-link collapsed" href="#" data-toggle="collapse"
                            data-target={"#" + element.controller}
                            aria-expanded="true"
                            aria-controls={element.controller}>
                            <i className={"fas fa-fw " + element.classIcon}></i>
                            <span>{element.text}</span>
                        </a>
                        <SidebarBlockElementList content={element.blocks}
                            controls={element.controller} />
                    </li>
                ))
            }
        </div>

    );
}

export default SidebarBlockElement;