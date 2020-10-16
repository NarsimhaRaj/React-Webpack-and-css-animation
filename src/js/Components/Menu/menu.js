import React from 'react';
import { MenuList } from '../MenuList/menulist';
import './menu.scss';

const myList = {
    "key1": "value",
    "key2": "value",
    "key3": {
        "key4": "value",
        "key5": "value",
        "key6": "value"
    },
    "key7": {
        "key8": "value",
        "key9": "value",
        "key10": "value",
        "key17": {
            "key18": "value",
            "key91": "value",
            "key110": "value"
        },
    },
    "key11": "value",
}

export function Menu(props) {

    let { menu, menuClick } = props;
    return (
        <div className="menu">
            <div id="overlay" onClick={() => menuClick(false)} style={{ display: menu ? 'block' : 'none' }}>
            </div>
            <div className="menu-bar">
                <MenuList list={myList} />
            </div>
        </div>
    )
}