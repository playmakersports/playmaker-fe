import React from "react";

function FlagROK() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="900"
            height="600"
            viewBox="-36 -24 72 48"
        >
            <path d="M-36-24h72v48h-72z" fill="#fff" />
            <g transform="rotate(-56.3099325)">
                <g id="b2">
                    <path id="b" d="M-6-26H6v2H-6zm0 3H6v2H-6zm0 3H6v2H-6z" />
                    <use xlinkHref="#b" y="44" />
                </g>
                <path stroke="#fff" d="M0,17v10" />
                <path fill="#cd2e3a" d="M0-12A12 12 0 0 1 0 12z" />
                <path fill="#0047a0" d="M0-12A12 12 0 0 0 0 12 6 6 0 0 0 0 0z" />
                <circle cy="-6" fill="#cd2e3a" r="6" />
            </g>
            <g transform="rotate(-123.6900675)">
                <use xlinkHref="#b2" />
                <path stroke="#fff" d="M0-23.5v3M0,17v3.5M0,23.5v3" />
            </g>
        </svg>
    );
}

export default FlagROK;
