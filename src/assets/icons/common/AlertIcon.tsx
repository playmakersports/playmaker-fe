import React, { SVGProps } from "react";

function AlertIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" {...props}>
            <g>
                <path d="M4.068 18h15.656a3 3 0 0 0 2.821-4.021l-2.852-7.885A8.323 8.323 0 0 0 11.675 0a8.321 8.321 0 0 0-8.123 6.516l-2.35 7.6A3 3 0 0 0 4.068 18ZM7.1 20a5 5 0 0 0 9.8 0Z"></path>
            </g>
        </svg>
    );
}

export default AlertIcon;
