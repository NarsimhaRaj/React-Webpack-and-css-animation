import React from 'react';
import './wheel.scss';

export function Wheel({ props }) {
    return (
        <div className="wind-wheel">
            <div className="wheel-container">
                <div className="wheel"></div>
                <div className="wheel"></div>
                <div className="wheel"></div>
                <div className="wheel"></div>
            </div>
        </div>
    )
}