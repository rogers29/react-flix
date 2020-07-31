import React from "react";

function ButtonLink(props) {
    // props => { className: "o que algeum passa", href: "/" }

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;