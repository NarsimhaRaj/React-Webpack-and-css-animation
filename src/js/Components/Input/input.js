import React from 'react';
import './input.scss';

export function Input(props) {
    const { type = "text", label = "lable" } = props;

    return (
        <div className="input-parent">
            <label className="floating-label">Your email address</label>
            <input type="text" className="inputText" required />
        </div>
    )
}