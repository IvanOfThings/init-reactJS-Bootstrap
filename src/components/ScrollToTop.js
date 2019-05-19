import React from 'react'

function ScrollToTop(props) {
    return (
        <a className="scroll-to-top rounded" href={props.reference}>
            <i className="fas fa-angle-up"></i>
        </a>
    );
}

export default ScrollToTop;