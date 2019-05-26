import React from 'react'
import SidebarCollapsableElement from './SidebarCollapsableElement';

function SidebarBlockElementList(props) {
  return (
    <div id={props.controls}
      className="collapse"
      aria-labelledby="headingTwo"
      data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        {
          props.content.map((item) => (
            <SidebarCollapsableElement classIcon="fa-wrench"
              subtitle={item.subtitle}
              content={item.links} />
          ))}
      </div>
    </div>
  );
}

export default SidebarBlockElementList;