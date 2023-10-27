import React, { SVGProps } from "react";

export function LocationPickerIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" {...props}>
            <g>
                <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z" />
            </g>
        </svg>
    );
}

export function LocationPickerIconOutlined(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512px"
            height="512px"
            viewBox="0 0 24 24"
            fill="#000000"
            {...props}
        >
            <g>
                <path
                    d="M12 .021A10.077 10.077 0 0 0 1.935 10.087c0 5.274 8.166 12.329 9.1 13.117l.967.817.967-.817c.932-.788 9.1-7.843 9.1-13.117A10.077 10.077 0 0 0 12 .021Zm0 20.043c-3.065-2.792-7.067-7.328-7.067-9.977a7.067 7.067 0 1 1 14.134 0c0 2.644-4.003 7.182-7.067 9.977Z"
                    opacity="1"
                ></path>
                <circle cx="12" cy="10.002" r="2.997"></circle>
            </g>
        </svg>
    );
}
