import React, { useState } from 'react';
import './menulist.scss';

export function MenuList({ list }) {
    let [myId, setMyId] = useState('mm-1');
    const keyClick = (index, list, id) => {
        let elem1 = document.getElementById(myId).classList;
        if (id) {
            elem1.add('mm-subopened');
        }
        let elem2 = document.getElementById(id).classList;
        if (id) {
            elem2.add('mm-highest');
            elem2.add('mm-opened');
        }
        setMyId(id);
    }

    return (
        <div className="mm-menu mm-effect-slide-menu mm-effect-zoom-panels mm-offcanvas">
            <div className="mm-panel mm-opened" id='mm-1'>
                <ul id="myul" className="ul-current">
                    {
                        Object.keys(list).map((keyName, index) => typeof list[keyName] === "string" ? <li key={`${keyName + index}`}>{list[keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list[keyName], `mm-2-${index}`)}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id='mm-2-2'>
                <ul id="myul" >
                    {
                        Object.keys(list['key3']).map((keyName, index) => typeof list['key3'][keyName] === "string" ? <li key={`${keyName + index}`}>{list['key3'][keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list['key3'][keyName])}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id='mm-2-3'>
                <ul id="myul" className="ul-current">
                    {
                        Object.keys(list['key7']).map((keyName, index) => typeof list['key7'][keyName] === "string" ? <li key={`${keyName + index}`}>{list['key7'][keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list['key7'][keyName], `mm-4-${index}`)}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
            <div className="mm-panel mm-hasnavbar mm-hidden" id='mm-4-3'>
                <ul id="myul" className="ul-current">
                    {
                        Object.keys(list['key7']['key17']).map((keyName, index) => typeof list['key7']['key17'][keyName] === "string" ? <li key={`${keyName + index}`}>{list['key7']['key17'][keyName]}</li> : <li key={`${keyName + index}`} id={`myli${index}`} onClick={(event) => keyClick(index, list['key7']['key17'][keyName])}>{keyName}<span></span></li>)
                    }
                </ul>
            </div>
        </div>
    )
}