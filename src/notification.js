import React from 'react'

export default props => (
    <svg {...props} fill="none" viewBox="0 0 20 20">
        <clipPath>
            <path d="M0 0h20v20H0z" />
        </clipPath>
        <g fill="currentColor">
            <path d="M5.725 17.548a.5.5 0 0 1 .354-.612L9.943 15.9a.5.5 0 0 1 .612.354 2.5 2.5 0 1 1-4.83 1.294z"
                fillOpacity=".6" />
            <path clipRule="evenodd"
                d="M6.802 2.248A1 1 0 1 0 6.285.316a1 1 0 0 0 .517 1.932zm.742.836a5.5 5.5 0 0 0-3.89 6.737l.44 1.642-.6 1.962c-.459 1.502.914 2.923 2.43 2.517l9.45-2.532c1.518-.407 1.996-2.324.847-3.395l-1.501-1.4-.44-1.641a5.5 5.5 0 0 0-6.736-3.89z"
                fillRule="evenodd" />
        </g>
    </svg>
)