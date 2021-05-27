import React from "react";
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return (
        <button className={classNames("Button")} {...rest}>
            {children}
        </button>
    );
}

export default Button;
